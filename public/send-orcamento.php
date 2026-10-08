<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método não permitido.']);
    exit;
}

function field(string $key): string
{
    return trim((string) ($_POST[$key] ?? ''));
}

$honeypot = field('website');
if ($honeypot !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$nome = field('nome');
$email = field('email');
$telefone = field('telefone');
$observacoes = field('observacoes');

if ($nome === '' || $email === '' || $telefone === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Preencha nome, e-mail e celular.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Informe um e-mail válido.']);
    exit;
}

$allowedExt = ['pdf', 'jpg', 'jpeg', 'png', 'webp', 'heic', 'heif'];
$allowedMime = [
    'application/pdf',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
];
$maxBytes = 5 * 1024 * 1024;
$attachments = [];

if (!empty($_FILES['receitas'])) {
    $names = $_FILES['receitas']['name'];
    $tmps = $_FILES['receitas']['tmp_name'];
    $sizes = $_FILES['receitas']['size'];
    $errors = $_FILES['receitas']['error'];
    $types = $_FILES['receitas']['type'];

    if (!is_array($names)) {
        $names = [$names];
        $tmps = [$tmps];
        $sizes = [$sizes];
        $errors = [$errors];
        $types = [$types];
    }

    $count = 0;
    foreach ($names as $i => $originalName) {
        $error = $errors[$i] ?? UPLOAD_ERR_NO_FILE;
        if ($error === UPLOAD_ERR_NO_FILE || $originalName === '') {
            continue;
        }
        if ($error !== UPLOAD_ERR_OK) {
            http_response_code(422);
            echo json_encode(['ok' => false, 'error' => 'Não foi possível enviar um dos arquivos.']);
            exit;
        }

        $count++;
        if ($count > 4) {
            http_response_code(422);
            echo json_encode(['ok' => false, 'error' => 'Envie no máximo 4 arquivos.']);
            exit;
        }

        $tmp = $tmps[$i] ?? '';
        $size = (int) ($sizes[$i] ?? 0);
        if (!is_uploaded_file($tmp) || $size <= 0 || $size > $maxBytes) {
            http_response_code(422);
            echo json_encode(['ok' => false, 'error' => 'Cada anexo deve ter no máximo 5 MB.']);
            exit;
        }

        $ext = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime = $finfo ? (string) finfo_file($finfo, $tmp) : (string) ($types[$i] ?? '');
        if ($finfo) {
            finfo_close($finfo);
        }

        if (!in_array($ext, $allowedExt, true) || !in_array($mime, $allowedMime, true)) {
            http_response_code(422);
            echo json_encode(['ok' => false, 'error' => 'Use apenas PDF ou imagens (JPG, PNG, WEBP).']);
            exit;
        }

        $safeName = preg_replace('/[^A-Za-z0-9._-]/', '_', $originalName) ?: ('receita-' . $count . '.' . $ext);
        $attachments[] = [
            'name' => $safeName,
            'type' => $mime,
            'data' => file_get_contents($tmp),
        ];
    }
}

$to = 'contato@sinergia.far.br';
$subjectRaw = 'Novo orçamento pelo site — ' . $nome;
$subject = '=?UTF-8?B?' . base64_encode($subjectRaw) . '?=';
$obs = $observacoes !== '' ? $observacoes : '(não informado)';
$bodyText =
    "Novo pedido de orçamento pelo site da Sinergia.\n\n" .
    "Nome: {$nome}\n" .
    "E-mail: {$email}\n" .
    "Celular/WhatsApp: {$telefone}\n" .
    "Observações: {$obs}\n" .
    'Anexos: ' . count($attachments) . "\n";

$boundary = '==Sinergia_' . bin2hex(random_bytes(12));
$headers = [
    'MIME-Version: 1.0',
    'From: Sinergia Site <contato@sinergia.far.br>',
    'Reply-To: ' . $nome . ' <' . $email . '>',
    'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
];

$message = "--{$boundary}\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$message .= $bodyText . "\r\n";

foreach ($attachments as $file) {
    $message .= "--{$boundary}\r\n";
    $message .= 'Content-Type: ' . $file['type'] . '; name="' . $file['name'] . "\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= 'Content-Disposition: attachment; filename="' . $file['name'] . "\"\r\n\r\n";
    $message .= chunk_split(base64_encode($file['data'])) . "\r\n";
}

$message .= "--{$boundary}--";

$sent = @mail($to, $subject, $message, implode("\r\n", $headers), '-fcontato@sinergia.far.br');

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.',
    ]);
    exit;
}

echo json_encode(['ok' => true]);
