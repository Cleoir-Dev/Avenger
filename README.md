# Avenger Workspace

This is an Nx monorepo managed with `pnpm`, containing multiple Ionic/Angular applications and shared libraries.

## 1. Prerequisites

Before you begin, ensure you have the following tools installed on your system.

### Node.js and pnpm

- **Node.js**: The LTS (Long-Term Support) version is required. You can download it from the [official Node.js website](https://nodejs.org/).
- **pnpm**: We use `pnpm` as the package manager for its efficiency in monorepos. To install it after setting up Node.js, run:
  ```bash
  npm install -g pnpm
  ```

### OS-Specific Installation

- **Windows**: It is recommended to use [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage Node.js versions. After installation, use `nvm install lts` and `nvm use lts`.
- **macOS/Linux**: It is recommended to use [nvm](https://github.com/nvm-sh/nvm). After installation, use `nvm install --lts` and `nvm use --lts`.

## 2. Local Environment Setup

1.  **Clone the repository** (if applicable).
2.  **Install dependencies**: In the project root, run the command:
    ```bash
    pnpm install
    ```
    This command will install all workspace dependencies defined in `package.json`.

## 3. Project Structure

The workspace is organized as follows:

- `apps/`: Contains the source code for all applications.
  - `ash/`, `ebony/`, `fury/`, `whisper/`, `storm/`: Ionic/Angular applications.
  - `ash-e2e/`, etc.: End-to-end (Cypress) test projects for each application.
- `libs/`: Contains shared code libraries.
  - `service/`: Service libraries (e.g., `CurrencyService`).
  - `utils/`: Utility functions (e.g., `generateUuid`).
- `package.json`: Defines the scripts and dependencies for the entire workspace.
- `project.json`: Each app and lib has its own `project.json` to define its targets (build, serve, test, etc.).
- `nx.json`: The main Nx configuration file.

## 4. Available Scripts

The following scripts are available in `package.json` to streamline development. Run them with `pnpm <script-name>`.

- **`serve:<app-name>`**: Starts the development server for a specific application.
  - Ex: `pnpm serve:ash` (runs on `http://localhost:4200`)
  - Ex: `pnpm serve:fury` (runs on `http://localhost:4202`)

- **`build:<app-name>`**: Builds an application for production.
  - Ex: `pnpm build:ash`

- **`build:all`**: Builds all applications in the workspace for production.

- **`test:<project-name>`**: Runs unit tests for an app or lib.
  - Ex: `pnpm test:ash`
  - Ex: `pnpm test:utils`

- **`test:all`**: Runs all unit tests in the workspace.

- **`lint:all`**: Lints all projects.

- **`graph`**: Opens a graphical visualization of the project's dependencies.

## 5. How to Contribute

Follow these guides to add new features to the workspace.

### How to Create a New Ionic Application

Let's use the example of creating a new app called `new-app`.

1.  **Generate the Base Angular Application**:
    ```bash
    pnpm nx generate @nx/angular:application --name=new-app --directory=apps/new-app --style=scss --routing=true
    ```
    *(Choose `esbuild`, `jest`, `cypress` in the options)*

2.  **Add Ionic Configuration**:
    ```bash
    pnpm nx generate @nxext/ionic-angular:configuration --project=new-app --capacitor=true
    ```
    *(Choose the `tabs` template)*

3.  **Set a Fixed Port**: Open the `apps/new-app/project.json` file, find the `serve` target, and add the `port` option:
    ```json
    "serve": {
      "executor": "@angular-devkit/build-angular:dev-server",
      "options": {
        "port": 4205 // Use the next available port
      },
      // ...
    }
    ```

4.  **Add Scripts**: Add the `serve:new-app`, `build:new-app`, and `test:new-app` scripts to `package.json`.

### How to Create a New Utility Library (Utils)

Let's use the example of creating a `validators` library.

1.  **Generate the Library**:
    ```bash
    pnpm nx generate @nx/angular:library --name=validators --directory=libs/validators --buildable
    ```

2.  **Implement the Logic**: Create your function files inside `libs/validators/src/lib/` (e.g., `email-validator.ts`).

3.  **Export**: Export your functions in the `libs/validators/src/index.ts` file.
    ```typescript
    export * from './lib/email-validator';
    ```

### How to Create a New Service Library

Let's use the example of creating an `AuthService`.

1.  **Generate the Library**:
    ```bash
    pnpm nx generate @nx/angular:library --name=auth --directory=libs/auth --buildable
    ```

2.  **Implement the Service**: Create the `libs/auth/src/lib/auth.service.ts` file with the `@Injectable({ providedIn: 'root' })` decorator.

3.  **Export**: Export the service in the `libs/auth/src/index.ts` file.
    ```typescript
    export * from './lib/auth.service';
    ```

After creating any library, you can import it into any application using the alias `@avenger/<lib-name>`, for example: `import { emailValidator } from '@avenger/validators';`.
