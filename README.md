<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Project README">
  <title>Project README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: black; /* Set the background color to black */
      color: white; /* Set the text color to white */
      line-height: 1.6;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    h1, h2, h3 {
      color: #fff; /* Ensure headings are also white */
    }
    code {
      background-color: #333; /* Set the background color of code blocks */
      color: #fff; /* Set the text color to white */
      padding: 2px 5px;
      border-radius: 4px;
    }
    pre {
      background-color: #333; /* Set the background color of preformatted blocks */
      color: #fff; /* Set the text color to white */
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
    }
    ul, ol {
      padding-left: 20px;
    }
    a {
      color: #1e90ff; /* Set link color to stand out on black background */
    }
  </style>
</head>
<body>

  <h1>Royal International</h1>
  <p>Royal International, a service-based company in Bangalore, offers a range of services including Data Center Migration, Project Logistics, Clean Room/LAB Migration, and Relocation Services. This project focuses on enhancing the company's digital presence by showcasing its services, highlighting what differentiates Royal International from its competitors, and featuring its clients to build trust and credibility.</p>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#scripts">Scripts</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#type-docs-installation-setup">Type Docs Intallation and Setup</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="features">Features</h2>
  <ul>
    <li>Interactive Animations: Smooth animations using Framer Motion for an enhanced user experience.</li>
    <li>Customizable Components: Easily customizable components built with Tailwind CSS.</li>
    <li>TypeScript Integration: Provides type safety and better developer tooling.</li>
  </ul>

  <h2 id="tech-stack">Tech Stack</h2>
  <ul>
    <li><strong>React</strong> – for building the user interface.</li>
    <li><strong>Tailwind CSS</strong> – for styling with utility-first classes.</li>
    <li><strong>TypeScript</strong> – for type safety and enhanced development experience.</li>
    <li><strong>Framer Motion</strong> – for smooth animations and transitions.</li>
    <li><strong>Aeternity UI</strong> – for prebuilt UI components.</li>
    <li><strong>shadcn</strong> – for UI styling and custom design components.</li>
  </ul>

  <h2 id="installation">Installation</h2>
  <ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/your-username/your-repo.git</code></pre>
    <li>Navigate to the project directory:</li>
    <pre><code>cd your-repo</code></pre>
    <li>Install dependencies:</li>
    <pre><code>npm install</code></pre>
  </ol>

  <h2 id="usage">Usage</h2>
  <p>To start the development server:</p>
  <pre><code>npm start</code></pre>
  <p>Open <a href="http://localhost:3000">http://localhost:3000</a> to view it in the browser.</p>

  <h2 id="scripts">Scripts</h2>
  <ul>
    <li><code>npm start</code>: Runs the app in development mode.</li>
    <li><code>npm build</code>: Builds the app for production.</li>
    <li><code>npm test</code>: Runs the test suite.</li>
    <li><code>npm lint</code>: Lints the codebase.</li>
    <li><code>npm run type-docs</code>: invoke TypeDoc to create documentation based on TypeScript code and comments.</li>
  </ul>

  <h2 id="folder-structure">Folder Structure</h2>
  <pre><code>src/
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
</code></pre>

  <h2>TypeDoc Installation and Setup</h2>

  <p>To generate documentation for this project, we use <a href="https://typedoc.org/">TypeDoc</a>, a documentation generator for TypeScript.</p>
  <p>For more details, check out this <a href="https://dev.to/mirzaleka/learn-how-to-document-javascripttypescript-code-using-jsdoc-typedoc-359h" target="_blank">blog article about typedoc installation</a> on TypeScript documentation best practices.</p>

  <h3>Step 1: Install TypeDoc</h3>
  <p>First, you need to install TypeDoc as a development dependency:</p>
  <pre><code>npm install typedoc --save-dev</code></pre>

  <h3>Step 2: Configure TypeDoc</h3>
  <p>You can configure TypeDoc by adding a script in your <code>package.json</code> file:</p>
  <pre><code>
  {
    "scripts": {
      "type-docs": "typedoc"
    }
  }
  </code></pre>

  <p>This command will generate documentation in the <code>docs/</code> directory based on the TypeScript files in the <code>src/</code> folder.</p>

  <h3>Step 3: Customize TypeDoc Configuration</h3>
  <p>We have made the TypeDoc configuration in tsconfig.json file</p>
  <pre><code>
    "typedocOptions": {
      "entryPoints": [
        "src/*.tsx",
        "src/pages/*.tsx",
        "src/components/**/*.tsx", // <--- take everything from this location
        "src/components/*.tsx",
      ],
      "out": "docs/typedoc" // <--- output directory
    }
  </code>
  </pre>

  <strong>We haven't used this typedoc.json file in the project but this gives more customization</strong>

  <p>You can also create a <code>typedoc.json</code> configuration file in the root directory for more advanced options. Here’s an example:</p>
  <pre><code>
  {
    "entryPoints": ["src/index.ts"],
    "out": "docs",
    "includeVersion": true,
    "excludePrivate": true,
    "excludeExternals": true
  }
  </code></pre>

  <p>This config customizes the input and output settings for the documentation generation.</p>

  <h3>Step 4: Generate Documentation</h3>
  <p>Once TypeDoc is set up, you can generate the documentation by running:</p>
  <pre><code>npm run type-docs</code></pre>

  <p>This will output the generated documentation into the <code>docs/</code> folder.</p>

  <h3>Step 5: Viewing the Documentation</h3>
  <p>You can view the generated documentation by opening the <code>index.html</code> file inside the <code>docs/</code> folder in a browser.</p>

  <p>For more information about TypeDoc configuration, check the <a href="https://typedoc.org/guides/installation/">official documentation</a>.</p>

  <h2 id="contributing">Contributing</h2>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new feature branch: <code>git checkout -b feature/your-feature</code>.</li>
    <li>Commit your changes: <code>git commit -m 'Add some feature'</code>.</li>
    <li>Push to the branch: <code>git push origin feature/your-feature</code>.</li>
    <li>Open a pull request.</li>
  </ol>

  <h2 id="license">License</h2>
  <p>This project is licensed under the MIT License - see the <code>LICENSE</code> file for details.</p>

</body>
</html>
