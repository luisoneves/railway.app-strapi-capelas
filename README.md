# 📘 README – Deploy do Strapi no Railway (Guia Completo)

## 🚀 Introdução
Este documento registra todo o processo de deploy do projeto Strapi usando o Railway, incluindo configurações necessárias, variáveis de ambiente, comandos importantes e boas práticas.

Nenhuma credencial real está registrada aqui, apenas a estrutura correta para referência futura.

---

# 🧩 1. Pré-requisitos

Antes do deploy, certifique-se de ter:

- Node.js instalado  
- Projeto configurado localmente  
- Conta no Railway  
- CLI do Railway instalada:

\`\`\`bash
npm i -g @railway/cli
\`\`\`

---

# 🗄️ 2. Configurar o PostgreSQL no Railway

1. Criar um serviço PostgreSQL no dashboard do Railway  
2. Copiar a DATABASE_URL gerada automaticamente  
3. Garantir que o projeto Strapi está linkado ao serviço:

\`\`\`bash
railway link
railway service
\`\`\`

---

# 🔐 3. Variáveis de Ambiente Necessárias

Configure no Railway (NÃO comitar valores reais):

\`\`\`
DATABASE_URL=gerado automaticamente pelo Railway
NODE_ENV=production

APP_KEYS=chave1,chave2,chave3,chave4
API_TOKEN_SALT=salt_aleatorio
ADMIN_JWT_SECRET=jwt_admin_aleatorio
JWT_SECRET=jwt_aleatorio
\`\`\`

## Como gerar chaves seguras:

\`\`\`bash
openssl rand -base64 32
\`\`\`

Ou definir automaticamente:

\`\`\`bash
railway variables --set "APP_KEYS=$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32)"
railway variables --set "API_TOKEN_SALT=$(openssl rand -base64 32)"
railway variables --set "ADMIN_JWT_SECRET=$(openssl rand -base64 32)"
railway variables --set "JWT_SECRET=$(openssl rand -base64 32)"
\`\`\`

---

# 🛠️ 4. Build e Deploy

\`\`\`bash
railway up
\`\`\`

---

# ✔️ 5. Checklist para Deploy Futuro

- [ ] PostgreSQL criado  
- [ ] DATABASE_URL configurada  
- [ ] NODE_ENV=production  
- [ ] APP_KEYS com 4 chaves seguras  
- [ ] API_TOKEN_SALT configurado  
- [ ] ADMIN_JWT_SECRET configurado  
- [ ] JWT_SECRET configurado  
- [ ] Projeto linkado:

\`\`\`bash
railway link
railway service
\`\`\`

- [ ] Deploy:

\`\`\`bash
railway up
\`\`\`

---

# 📝 6. Observações Importantes

- Nunca comite .env
- Nunca comite keys reais
- Railway salva tudo como variáveis seguras
- Para backup local → Git é seguro

---

# 🎉 Conclusão

Este documento garante que você poderá repetir o deploy em qualquer momento.
