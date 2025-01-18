import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, '../build');
const configFile = path.join(__dirname, '../staticwebapp.config.json');
const headersFile = path.join(__dirname, '../public/_headers');
const destConfigFile = path.join(buildDir, 'staticwebapp.config.json');
const destHeadersFile = path.join(buildDir, '_headers');

// Ensure the build directory exists
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// Copy the config file to the build directory
fs.copyFileSync(configFile, destConfigFile);
console.log('staticwebapp.config.json copied to build directory');

// Copy the headers file to the build directory
if (fs.existsSync(headersFile)) {
  fs.copyFileSync(headersFile, destHeadersFile);
  console.log('_headers file copied to build directory');
} else {
  console.warn('_headers file not found');
}