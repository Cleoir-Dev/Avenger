# Avenger Workspace

Este é um monorepo Nx gerenciado com `pnpm`, contendo múltiplas aplicações Ionic/Angular e bibliotecas compartilhadas.

## 1. Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas em seu sistema.

### Node.js e pnpm

- **Node.js**: É necessário ter a versão LTS (Long-Term Support). Você pode baixar do [site oficial do Node.js](https://nodejs.org/).
- **pnpm**: Usamos `pnpm` como gerenciador de pacotes por sua eficiência em monorepos. Para instalar, após ter o Node.js, rode:
  ```bash
  npm install -g pnpm
  ```

### Instalação por Sistema Operacional

- **Windows**: Recomenda-se usar o [nvm-windows](https://github.com/coreybutler/nvm-windows) para gerenciar as versões do Node.js. Após instalar, use `nvm install lts` e `nvm use lts`.
- **macOS/Linux**: Recomenda-se usar o [nvm](https://github.com/nvm-sh/nvm). Após instalar, use `nvm install --lts` e `nvm use --lts`.

## 2. Configuração do Ambiente Local

1.  **Clone o repositório** (se aplicável).
2.  **Instale as dependências**: Na raiz do projeto, execute o comando:
    ```bash
    pnpm install
    ```
    Este comando irá instalar todas as dependências do workspace definidas no `package.json`.

## 3. Estrutura do Projeto

O workspace está organizado da seguinte forma:

- `apps/`: Contém o código-fonte de todas as aplicações.
  - `ash/`, `ebony/`, `fury/`, `whisper/`, `storm/`: Aplicações Ionic/Angular.
  - `ash-e2e/`, etc.: Projetos de testes end-to-end (Cypress) para cada aplicação.
- `libs/`: Contém as bibliotecas de código compartilhado.
  - `service/`: Bibliotecas de serviços (ex: `CurrencyService`).
  - `utils/`: Funções utilitárias (ex: `generateUuid`).
- `package.json`: Define os scripts e dependências de todo o workspace.
- `project.json`: Cada app e lib possui seu próprio `project.json` para definir seus alvos (build, serve, test, etc.).
- `nx.json`: Arquivo de configuração principal do Nx.

## 4. Scripts Disponíveis

Os seguintes scripts estão disponíveis no `package.json` para facilitar o desenvolvimento. Execute-os com `pnpm <script-name>`.

- **`serve:<app-name>`**: Inicia o servidor de desenvolvimento para uma aplicação específica.
  - Ex: `pnpm serve:ash` (roda em `http://localhost:4200`)
  - Ex: `pnpm serve:fury` (roda em `http://localhost:4202`)

- **`build:<app-name>`**: Compila uma aplicação para produção.
  - Ex: `pnpm build:ash`

- **`build:all`**: Compila todas as aplicações do workspace para produção.

- **`test:<project-name>`**: Roda os testes unitários para um app ou lib.
  - Ex: `pnpm test:ash`
  - Ex: `pnpm test:utils`

- **`test:all`**: Roda todos os testes unitários do workspace.

- **`lint:all`**: Executa o linter em todos os projetos.

- **`graph`**: Abre uma visualização gráfica das dependências do projeto.

## 5. Como Contribuir

Siga estes guias para adicionar novas funcionalidades ao workspace.

### Como Criar uma Nova Aplicação Ionic

Vamos usar o exemplo de criar um novo app chamado `nova-app`.

1.  **Gerar a Aplicação Angular Base**:
    ```bash
    pnpm nx generate @nx/angular:application --name=nova-app --directory=apps/nova-app --style=scss --routing=true
    ```
    *(Escolha `esbuild`, `jest`, `cypress` nas opções)*

2.  **Adicionar a Configuração Ionic**:
    ```bash
    pnpm nx generate @nxext/ionic-angular:configuration --project=nova-app --capacitor=true
    ```
    *(Escolha o template `tabs`)*

3.  **Configurar a Porta Fixa**: Abra o arquivo `apps/nova-app/project.json`, encontre o alvo `serve` e adicione a opção `port`:
    ```json
    "serve": {
      "executor": "@angular/build:dev-server",
      "options": {
        "port": 4205 // Use a próxima porta disponível
      },
      // ...
    }
    ```

4.  **Adicionar Scripts**: Adicione os scripts `serve:nova-app`, `build:nova-app`, e `test:nova-app` ao `package.json`.

### Como Criar uma Nova Biblioteca de Funções (Utils)

Vamos usar o exemplo de criar uma biblioteca `validators`.

1.  **Gerar a Biblioteca**:
    ```bash
    pnpm nx generate @nx/angular:library --name=validators --directory=libs/validators --buildable
    ```

2.  **Implementar a Lógica**: Crie seus arquivos de função dentro de `libs/validators/src/lib/` (ex: `email-validator.ts`).

3.  **Exportar**: Exporte suas funções no arquivo `libs/validators/src/index.ts`.
    ```typescript
    export * from './lib/email-validator';
    ```

### Como Criar uma Nova Biblioteca de Serviço (Service)

Vamos usar o exemplo de criar um `AuthService`.

1.  **Gerar a Biblioteca**:
    ```bash
    pnpm nx generate @nx/angular:library --name=auth --directory=libs/auth --buildable
    ```

2.  **Implementar o Serviço**: Crie o arquivo `libs/auth/src/lib/auth.service.ts` com a anotação `@Injectable({ providedIn: 'root' })`.

3.  **Exportar**: Exporte o serviço no arquivo `libs/auth/src/index.ts`.
    ```typescript
    export * from './lib/auth.service';
    ```

Após criar qualquer biblioteca, você pode importá-la em qualquer aplicação usando o alias `@avenger/<nome-da-lib>`, por exemplo: `import { emailValidator } from '@avenger/validators';`.
