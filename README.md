# Farmácia Sinergia

Site institucional em React + Vite + Tailwind. O resultado do build é estático e pode ser enviado ao cPanel da HostGator.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra o endereço indicado no terminal (em geral `http://localhost:5173`).

## Publicar no cPanel (HostGator)

1. Neste computador, gere os arquivos de produção:

   ```bash
   npm install
   npm run build
   ```

2. A pasta `dist/` será criada com `index.html`, `assets/`, `favicon.svg` e `.htaccess`.

3. No cPanel, abra **Gerenciador de Arquivos** e entre em `public_html` (domínio principal) ou na pasta do subdomínio.

4. Envie **todo o conteúdo** de `dist/` (não a pasta `dist` em si). Confirme que o `.htaccess` e o `send-orcamento.php` também foram enviados.

5. Abra o domínio no navegador. Se o HTTPS não estiver ativo, ative o certificado gratuito (Let’s Encrypt) em **SSL/TLS** ou **SSL Status** no cPanel.

O formulário de orçamento envia nome, e-mail, telefone, observações e até 4 anexos para `contato@sinergia.far.br` pelo PHP do cPanel. No `npm run dev` local o envio de e-mail não funciona — só depois de publicado.

## Contatos configurados

- WhatsApp: [wa.me/5511992832901](https://wa.me/5511992832901)
- Telefone: (11) 5575-6172
- E-mail: contato@sinergia.far.br
- Endereço: R. Cel. Lisboa, 826 - Vila Clementino, São Paulo - SP, 04020-041
