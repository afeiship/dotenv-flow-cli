#!/usr/bin/env node

import { Command, Option } from 'commander';
import { createRequire } from 'module';

const __dirname = new URL('../', import.meta.url).pathname;
const require = createRequire(__dirname);
const pkg = require('./package.json');
const program = new Command();

program.version(pkg.version);
program.addOption(new Option('-v, --verbose', 'show verbose log')).parse(process.argv);

/**
 * @help: dotenv-flow-cli -h
 * @description: dotenv-flow-cli -f
 */

class CliApp {
  constructor() {
    this.args = program.args;
    this.opts = program.opts();
  }

  log(...args) {
    const { verbose } = this.opts;
    if (verbose) console.log('📗', ...args);
  }

  run() {
    this.log('run cli: ', __dirname, this.args, this.opts, pkg.version);
  }
}

new CliApp().run();
