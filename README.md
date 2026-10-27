# Site da agência
```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run build && npm start
```
Deploy: suba no GitHub e importe o repositório na Vercel (uso comercial exige plano Pro). Defina `LEAD_WEBHOOK_URL` (n8n/CRM) nas variáveis de ambiente. Veja `BRANDING.md` para personalizar a marca.
