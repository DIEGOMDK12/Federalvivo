# Deploy no Render.com

## Pré-requisitos
- Conta no [Render.com](https://render.com)
- Repositório Git (GitHub, GitLab ou Gitea)
- DATABASE_URL configurada

## Passos para fazer Deploy

### 1. Criar repositório Git (se não tiver)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <seu-repo-url>
git push -u origin main
```

### 2. No Render.com

1. Acesse [dashboard.render.com](https://dashboard.render.com)
2. Clique em **New +** → **Web Service**
3. Escolha seu repositório do GitHub/GitLab
4. Preencha as informações:
   - **Name**: `chip-federal` (ou seu nome)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (ou Premium se desejar)

### 3. Configurar Variáveis de Ambiente

No painel do Render, vá em **Environment**:

#### Banco de Dados (PostgreSQL)
Você tem 3 opções:

**Opção A: Usar Neon (recomendado)**
1. Crie uma conta em [neon.tech](https://neon.tech)
2. Crie um novo projeto
3. Copie a `DATABASE_URL`
4. Cole em **Environment Variables** no Render com a chave `DATABASE_URL`

**Opção B: Usar PostgreSQL no Render**
1. Crie um novo **PostgreSQL Database** no Render
2. Copie a connection string
3. Cole como `DATABASE_URL`

**Opção C: Usar qualquer outro PostgreSQL**
- Gera uma URL de conexão e adicione como `DATABASE_URL`

### 4. Variáveis de Ambiente Necessárias

```
DATABASE_URL=<sua-url-postgresql>
NODE_ENV=production
PORT=10000 (Render auto-detecta)
```

### 5. Deploy

Depois de configurar:
1. Clique em **Create Web Service**
2. O Render começará a fazer build automaticamente
3. Acompanhe no **Logs**

## Após o Deploy

- Seu site estará disponível em: `https://<seu-nome>.onrender.com`
- Qualquer push para o `main` no Git fará deploy automaticamente

## Troubleshooting

### Build falha
- Verifique os logs em **Logs** → **Build Logs**
- Certifique-se que `npm run build` funciona localmente

### Aplicação não inicia
- Verifique **Runtime Logs**
- Certifique-se que `DATABASE_URL` está configurada
- Verifique se `npm start` funciona localmente

### Erros de banco de dados
- Verifique se `DATABASE_URL` está correta
- Teste a conexão com:
  ```bash
  psql $DATABASE_URL -c "SELECT 1"
  ```

## URLs úteis

- **Dashboard Render**: https://dashboard.render.com
- **Documentação Render**: https://render.com/docs
- **Status**: https://status.render.com
