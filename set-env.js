const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, './src/environments/environment.ts');

const envConfigFile = `export const environment = {
  production: ${process.env.PRODUCTION === 'true'},
  SUPABASE_URL: ${JSON.stringify(process.env.SUPABASE_URL || '')},
  SUPABASE_PUBLISHABLE_KEY: ${JSON.stringify(process.env.SUPABASE_PUBLISHABLE_KEY || '')}
};
`;

fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, envConfigFile);
console.log('environment.ts generado correctamente.');
