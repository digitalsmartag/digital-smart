# Configuração da Integração com Google Meu Negócio

Este guia explica como configurar a sincronização automática de avaliações do Google Meu Negócio com o site.

## 📋 Pré-requisitos

1. Conta no Google Cloud Platform
2. Perfil do Google Meu Negócio configurado
3. Acesso administrativo ao perfil

## 🔧 Passo a Passo

### 1. Criar Projeto no Google Cloud

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Anote o ID do projeto

### 2. Habilitar APIs Necessárias

No Google Cloud Console, habilite as seguintes APIs:

- **Google My Business API** (My Business Business Information API)
- **Google My Business Account Management API**

Para habilitar:
1. Vá em "APIs & Services" > "Library"
2. Busque por "My Business"
3. Clique em cada API e clique em "Enable"

### 3. Criar Conta de Serviço

1. Vá em "APIs & Services" > "Credentials"
2. Clique em "Create Credentials" > "Service Account"
3. Preencha os dados:
   - **Nome**: `google-reviews-sync`
   - **Descrição**: `Conta para sincronizar avaliações do Google`
4. Clique em "Create and Continue"
5. Selecione o papel: **Owner** ou **Editor**
6. Clique em "Done"

### 4. Gerar Chave Privada

1. Na lista de contas de serviço, clique na conta criada
2. Vá na aba "Keys"
3. Clique em "Add Key" > "Create new key"
4. Selecione formato **JSON**
5. Clique em "Create" - o arquivo será baixado automaticamente
6. **IMPORTANTE**: Guarde este arquivo em local seguro!

### 5. Dar Permissões à Conta de Serviço

1. Acesse [Google Business Profile](https://business.google.com/)
2. Selecione seu perfil de negócio
3. Vá em "Usuários" ou "Users"
4. Clique em "Adicionar usuários"
5. Adicione o email da conta de serviço (formato: `nome@projeto-id.iam.gserviceaccount.com`)
6. Dê permissão de **Proprietário** ou **Gerente**

### 6. Configurar Variáveis de Ambiente

1. Abra o arquivo JSON baixado no passo 4
2. Copie os valores de `client_email` e `private_key`
3. Crie ou edite o arquivo `.env.local` na raiz do projeto:

```env
# Google My Business API
GOOGLE_CLIENT_EMAIL=sua-conta-servico@projeto-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSUA_CHAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----\n"
```

**IMPORTANTE**: 
- Mantenha as aspas duplas na `GOOGLE_PRIVATE_KEY`
- Mantenha os `\n` na chave privada
- Nunca commite o arquivo `.env.local` no Git

### 7. Adicionar ao .gitignore

Certifique-se de que o arquivo `.env.local` está no `.gitignore`:

```
.env.local
.env*.local
```

## 🚀 Como Funciona

### Cache Inteligente
- As avaliações são armazenadas em cache por **1 hora**
- Isso evita exceder os limites da API do Google
- Reduz o tempo de carregamento da página

### Fallback Automático
- Se a API falhar, o site exibe avaliações estáticas
- Garante que o site sempre funcione, mesmo com problemas na API
- Não impacta a experiência do usuário

### Sincronização
- As avaliações são buscadas automaticamente quando a página carrega
- O componente detecta se são avaliações do Google ou estáticas
- Exibe badge "Avaliações do Google" quando sincronizado

## 🧪 Testar a Integração

1. Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Acesse a página principal do site
3. Role até a seção de "Depoimentos"
4. Verifique se aparece "Avaliações do Google" no badge
5. Confira o console do navegador para logs

## 🔍 Troubleshooting

### Erro: "Nenhuma conta encontrada"
- Verifique se a conta de serviço tem permissões no Google Business Profile
- Confirme que adicionou o email correto como usuário

### Erro: "Authentication failed"
- Verifique se as credenciais no `.env.local` estão corretas
- Confirme que a chave privada está completa (incluindo BEGIN e END)
- Certifique-se de que os `\n` estão presentes na chave

### Erro: "API not enabled"
- Verifique se habilitou todas as APIs necessárias no Google Cloud
- Aguarde alguns minutos após habilitar as APIs

### Avaliações não aparecem
- Verifique se seu perfil do Google tem avaliações públicas
- Confirme que as avaliações não estão ocultas
- Aguarde o cache expirar (1 hora) ou reinicie o servidor

## 📊 Monitoramento

Para ver logs da API:
1. Abra o console do navegador (F12)
2. Vá na aba "Console"
3. Procure por mensagens relacionadas a "google-reviews"

Para ver logs do servidor:
1. Verifique o terminal onde o Next.js está rodando
2. Procure por erros relacionados à API do Google

## 🔒 Segurança

- **NUNCA** commite o arquivo `.env.local`
- **NUNCA** compartilhe a chave privada
- Mantenha as credenciais seguras
- Use variáveis de ambiente em produção (Vercel, Netlify, etc.)

## 📝 Notas Importantes

- A API do Google tem limites de requisições
- O cache de 1 hora ajuda a respeitar esses limites
- Em produção, considere usar um banco de dados para cache mais robusto
- As avaliações são atualizadas automaticamente a cada hora

## 🆘 Suporte

Se encontrar problemas:
1. Verifique os logs do console e servidor
2. Confirme todas as configurações acima
3. Teste as credenciais manualmente
4. Consulte a [documentação oficial do Google](https://developers.google.com/my-business)
