# Royal International

Royal International, a service-based company in Bangalore, offers a range of services including Data Center Migration, Project Logistics, Clean Room/LAB Migration, and Relocation Services. This project focuses on enhancing the company's digital presence by showcasing its services, highlighting what differentiates Royal International from its competitors, and featuring its clients to build trust and credibility.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Type Docs Installation Setup](#type-docs-installation-setup)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive Animations: Smooth animations using Framer Motion for an enhanced user experience.
- Customizable Components: Easily customizable components built with Tailwind CSS.
- TypeScript Integration: Provides type safety and better developer tooling.

## Tech Stack

- **React** – for building the user interface.
- **Tailwind CSS** – for styling with utility-first classes.
- **TypeScript** – for type safety and enhanced development experience.
- **Framer Motion** – for smooth animations and transitions.
- **Aeternity UI** – for prebuilt UI components.
- **shadcn** – for UI styling and custom design components.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```
   cd your-repo
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the development server:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

- `npm start`: Runs the app in development mode.
- `npm build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm lint`: Lints the codebase.
- `npm run type-docs`: invoke TypeDoc to create documentation based on TypeScript code and comments.

## Folder Structure

```
src/
├── assets/        # Static assets like images, fonts
├── components/    # Reusable components
├── components/ui  # Reusable components from acternity
├── data/          # Data for globe used in Hero section
├── pages/         # Page-level components
├── hooks/         # Custom hooks
├── utils/         # Utility functions
├── styles/        # Global styles
├── App.tsx        # Root component
└── index.tsx      # Entry point
```

## TypeDoc Installation and Setup

To generate documentation for this project, we use [TypeDoc](https://typedoc.org/), a documentation generator for TypeScript.

For more details, check out this [blog article about typedoc installation](https://dev.to/mirzaleka/learn-how-to-document-javascripttypescript-code-using-jsdoc-typedoc-359h) on TypeScript documentation best practices.

### Step 1: Install TypeDoc

First, you need to install TypeDoc as a development dependency:

```
npm install typedoc --save-dev
```

### Step 2: Configure TypeDoc

You can configure TypeDoc by adding a script in your `package.json` file:

```json
{
  "scripts": {
    "type-docs": "typedoc" // npm run type-docs for generating documents based on type docs comment
  }
}
```

This command will generate documentation in the `docs/` directory based on the TypeScript files in the `src/` folder.

### Step 3: Customize TypeDoc Configuration

We have made the TypeDoc configuration in tsconfig.json file

```json
"typedocOptions": {
  "entryPoints": [
    "src/*.tsx",
    "src/pages/*.tsx",
    "src/components/**/*.tsx", // <--- take everything from this location
    "src/components/*.tsx",
  ],
  "out": "docs/typedoc" // <--- output directory
}
```

**We haven't used this typedoc.json file in the project but this gives more customization**

You can also create a `typedoc.json` configuration file in the root directory for more advanced options. Here's an example:

```json
{
  "entryPoints": ["src/index.ts"],
  "out": "docs",
  "includeVersion": true,
  "excludePrivate": true,
  "excludeExternals": true
}
```

This config customizes the input and output settings for the documentation generation.

### Step 4: Generate Documentation

Once TypeDoc is set up, you can generate the documentation by running:

```
npm run type-docs
```

This will output the generated documentation into the `docs/` folder.

### Step 5: Viewing the Documentation

You can view the generated documentation by opening the `index.html` file inside the `docs/` folder in a browser.

For more information about TypeDoc configuration, check the [official documentation](https://typedoc.org/guides/installation/).

## Contributing

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.