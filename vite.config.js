import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
 plugins: [sveltekit()],
 server: {
  https: (fs.existsSync(path.resolve(__dirname, 'server.key')) ?
   {
    key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
   } : null),
  host: true,
  port: 5000
 }
});
