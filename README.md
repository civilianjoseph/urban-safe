# Urban Safe

Aplicativo web de **segurança colaborativa**: a pessoa entra na conta e vê a área principal do mapa (ainda em construção). Hoje o projeto tem tela de login e uma tela inicial com cabeçalho.

Você **não precisa saber programar** para rodar. Basta instalar duas coisas no computador e copiar alguns comandos.

---

## O que você precisa ter instalado

1. **Node.js** (versão 18 ou mais nova)  
   Inclui o `npm`, que baixa as bibliotecas do projeto.  
   Baixe em: [https://nodejs.org](https://nodejs.org)  
   Escolha a versão **LTS** (recomendada).

2. **Git** (opcional, se for clonar o repositório)  
   Baixe em: [https://git-scm.com](https://git-scm.com)

Para conferir se o Node está ok, abra o terminal (Prompt de Comando, PowerShell ou Terminal) e digite:

```bash
node -v
npm -v
```

Se aparecer um número de versão em cada linha, está pronto.

---

## Como rodar o projeto

### 1. Entre na pasta do projeto

No terminal, vá até a pasta onde o Urban Safe está. Exemplo:

```bash
cd C:\Users\seu-usuario\development\personal\urban-safe
```

### 2. Instale as dependências

Na primeira vez (e sempre que alguém mudar o `package.json`), rode:

```bash
npm install
```

Isso cria a pasta `node_modules` com as bibliotecas. Pode demorar um pouco. **Não edite essa pasta.**

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O terminal vai mostrar um endereço, em geral:

```
http://localhost:5173
```

### 4. Abra no navegador

Copie o endereço acima e cole no Chrome, Edge ou Firefox.

Para **parar** o servidor, volte ao terminal e pressione `Ctrl + C`.

---

## Como usar o app depois de aberto

A autenticação ainda é **simulada**: não há banco de dados de verdade. Qualquer e-mail e senha “funcionam”. Os dados ficam só no seu navegador.

Na tela de login já vêm preenchidos:

- E-mail: `teste@gmail.com`
- Senha: `Teste@123`

Clique em **Entrar na conta**. Você vai para a tela inicial. O botão **Sair** volta para o login.

Não é necessário criar arquivo `.env` nem configurar Supabase para ver o app rodando hoje.

---

## Outros comandos úteis

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o app para desenvolver (atualiza sozinho ao salvar arquivos) |
| `npm run build` | Gera a versão final, pronta para publicar, na pasta `dist` |
| `npm run preview` | Abre localmente a versão gerada pelo `build` |
| `npm run lint` | Procura problemas de estilo e erros comuns no código |
| `npm run typecheck` | Confere se o TypeScript está correto, sem gerar o site |

---

## O que tem em cada pasta e arquivo

Pense no projeto como uma casa: a pasta `src` é o interior (onde o app de fato vive). O resto é “infraestrutura” (ferramentas, configurações).

```
urban-safe/
├── src/                  ← código do aplicativo
├── index.html            ← página HTML que o navegador abre
├── package.json          ← lista de bibliotecas e comandos
├── package-lock.json     ← versões exatas das bibliotecas (não mexa)
├── vite.config.ts        ← configuração da ferramenta que sobe o app
├── tsconfig.json         ← configuração do TypeScript
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js      ← regras de qualidade do código
├── postcss.config.js     ← ajuda a processar o CSS
└── README.md             ← este arquivo
```

### Pasta `src` — o coração do app

```
src/
├── main.tsx              ← ponto de partida: “liga” o React na página
├── App.tsx               ← decide o que mostrar: login ou tela inicial
├── index.css             ← cores, fontes e estilo global
├── vite-env.d.ts         ← tipos do Vite (arquivo técnico)
├── pages/                ← telas inteiras
├── components/           ← pedaços reutilizáveis da interface
└── shared/               ← código compartilhado (login, tipos)
```

| Pasta / arquivo | Para que serve |
| --- | --- |
| `src/main.tsx` | Coloca o app dentro do `index.html`. É o primeiro arquivo de código que roda. |
| `src/App.tsx` | Se a pessoa está logada, mostra a home. Se não, mostra o login. |
| `src/index.css` | Visual de todo o site: paleta de cores, fonte, fundo. |
| `src/pages/` | Telas completas (uma “página” de cada vez). |
| `src/pages/auth/` | Tela de login (e-mail, senha, botão Entrar). |
| `src/pages/home/` | Tela depois do login (hoje só o cabeçalho). |
| `src/components/` | Peças de interface usadas em várias telas. |
| `src/components/button/` | Botão. |
| `src/components/input/` | Campo de texto (e-mail, senha). |
| `src/components/logo/` | Logo “Urban safe.” |
| `src/components/header/` | Barra do topo: logo, localização, avatar e Sair. |
| `src/shared/context/` | Controle de login: guardar usuário, entrar e sair. |
| `src/shared/types/` | Formato dos dados (por exemplo, o que é um “usuário”). |

Arquivos `.tsx` misturam visual e lógica. Arquivos `.module.css` ao lado de um componente são o estilo **só daquela peça**, para não bagunçar o resto do site.

### Arquivos na raiz (fora de `src`)

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Esqueleto da página. O React desenha o app dentro da caixa `#root`. |
| `package.json` | Nome do projeto, bibliotecas e os comandos `npm run ...`. |
| `vite.config.ts` | Diz ao Vite como montar o projeto (incluindo o atalho `@` = pasta `src`). |
| `tsconfig*.json` | Regras do TypeScript (linguagem usada no código). |
| `eslint.config.js` | “Corretor” automático de qualidade do código. |
| `postcss.config.js` | Processa CSS (por exemplo, prefixos para navegadores). |

### Pastas que aparecem depois que você roda comandos

Essas pastas **não entram no Git** (estão no `.gitignore`) e você não precisa editá-las.

| Pasta | Quando aparece | O que é |
| --- | --- | --- |
| `node_modules/` | Depois de `npm install` | Todas as bibliotecas baixadas. Pode ser enorme. |
| `dist/` | Depois de `npm run build` | Versão pronta do site para publicar. |

---

## Tecnologias (resumo rápido)

- **React** — monta a interface em pedaços (componentes).
- **TypeScript** — JavaScript com checagem de tipos, para achar erros antes de rodar.
- **Vite** — sobe o projeto rápido no `localhost` e gera o build.
- **CSS Modules** — cada componente tem seu próprio arquivo de estilo.
- **Supabase** — já está na lista de dependências, mas **ainda não é usado**. O login atual é local (navegador).

---

## Problemas comuns

**`npm` não é reconhecido**  
O Node.js não está instalado ou o terminal foi aberto antes da instalação. Feche o terminal, instale o Node LTS e abra de novo.

**A página não abre**  
Confira se o `npm run dev` ainda está rodando e se você abriu exatamente o endereço que o terminal mostrou (porta pode ser `5173` ou outra, se a 5173 estiver ocupada).

**Tela em branco depois de atualizar o código**  
Olhe o terminal e o console do navegador (`F12` → Console). Em geral há uma mensagem de erro vermelha apontando o arquivo.

**Quero “começar do zero” no login**  
No navegador, abra as Ferramentas de desenvolvedor (`F12`) → Application (ou Armazenamento) → Local Storage e apague a chave `alerta-user`. Ou use o botão **Sair**.
