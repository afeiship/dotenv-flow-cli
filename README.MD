# dotenv-flow-cli
> dotenv-flow cli.

## usage
```json
  "scripts": {
    "dev": "NODE_ENV=development dotenv-flow-cli src/app.js",
    "beta": "NODE_ENV=beta dotenv-flow-cli src/app.js"
  },
```

## raw
```json
  "scripts": {
    "dev": "NODE_ENV=development node -r dotenv-flow/config src/app.js",
    "beta": "NODE_ENV=beta node -r dotenv-flow/config src/app.js"
  },
```

## use ci.js
```json
  "scripts": {
    "dev": "NODE_ENV=development node cli.js src/app.js",
    "beta": "NODE_ENV=beta node cli.js src/app.js"
  },
```

## cli.js
```shell
#!/usr/bin/env node

import dotenvFlow from 'dotenv-flow';
import { spawn } from 'child_process';

dotenvFlow.config();

const [, , ...args] = process.argv;
if (args.length === 0) {
  console.error('Usage: cli.js <script.js> [args]');
  process.exit(1);
}

const script = args[0];
const scriptArgs = args.slice(1);

const child = spawn('node', [script, ...scriptArgs], { stdio: 'inherit' });
child.on('exit', code => process.exit(code));
```