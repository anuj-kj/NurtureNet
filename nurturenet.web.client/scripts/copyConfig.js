import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, '../build');
const configFile = path.join(__dirname, '../staticwebapp.config.json');
const destFile = path.join(buildDir, 'staticwebapp.config.json');

// Ensure the build directory exists
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// Copy the config file to the build directory
fs.copyFileSync(configFile, destFile);

console.log('staticwebapp.config.json copied to build directory');