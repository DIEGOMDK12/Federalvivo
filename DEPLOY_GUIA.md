# Guia de Deploy no Render - Chip Federal

## 🚀 Passo a Passo para Fazer Funcionar

### 1. Fazer Push do Código
```bash
git add -A
git commit -m "Deploy admin panel with analytics"
git push origin main  # ou sua branch
```

### 2. Configurar DATABASE_URL no Render

1. Acesse sua aplicação no Render: https://dashboard.render.com
2. Vá para **Environment** → **Environment Variables**
3. Clique em **Add Environment Variable**
4. Configure:
   - **Key**: `DATABASE_URL`
   - **Value**: Copie e cole sua connection string do Neon:
   ```
   postgresql://neondb_owner:npg_fEj5aSPtOu6c@ep-soft-tree-a4ryrpv3-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
   ```
5. Clique em **Save**

### 3. Fazer Deploy

Opção A (Automático):
- Faça push do código (ele detectará e fará deploy automaticamente)

Opção B (Manual):
- No Render Dashboard → clique em **Deploy** → **Redeploy main**

### 4. Aguardar Conclusão
- O build deve levar ~2-3 minutos
- Verifique o status em **Logs** no Render

### 5. Testar o Painel Admin

Acesse: `https://seu-app.onrender.com/admin`

Digite a senha: `506731`

## ✅ O Que Funciona

- ✅ Página inicial com planos de operadores
- ✅ Link de afiliado integrado
- ✅ Rastreamento de visualizações do site
- ✅ Rastreamento de cliques no link
- ✅ Painel admin com estatísticas em tempo real
- ✅ Taxa de conversão calculada automaticamente

## 🔐 Credenciais do Painel Admin

- **URL**: `/admin`
- **Senha**: `506731`

## 📊 Estatísticas Rastreadas

1. **Visualizações do Site** - Quantas vezes a página foi acessada
2. **Cliques no Link** - Quantas vezes o link de afiliado foi clicado
3. **Taxa de Conversão** - Percentual de cliques por visualização

Os dados são atualizados em tempo real a cada 5 segundos.

## 🔗 Links Importantes

- **Site**: `https://seu-app.onrender.com`
- **Admin**: `https://seu-app.onrender.com/admin`
- **API Analytics**: `https://seu-app.onrender.com/api/analytics?password=506731`

## 🛠️ Troubleshooting

### Erro "Erro ao carregar dados" no admin

1. Verifique se o DATABASE_URL está configurado no Render
2. Certifique-se de que a senha está correta: `506731`
3. Verifique os logs do Render para erros de conexão

### Banco de dados não criou tabelas

As tabelas são criadas automaticamente quando o servidor inicia. Se houver erro:

1. Verifique a connection string do Neon
2. Certifique-se de que o banco está acessível
3. Redeploy a aplicação

## 📝 Notas

- O arquivo `render.yaml` foi configurado para usar a DATABASE_URL do Render
- As tabelas de analytics são criadas automaticamente no startup
- Não é necessário rodar migrações manualmente
- Todos os dados são persistidos no PostgreSQL Neon

---

Pronto! Seu painel admin deve estar funcionando no Render agora!
