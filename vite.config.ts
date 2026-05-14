import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
  build: {
    rollupOptions: {
      input: {
        main:        resolve(__dirname, 'index.html'),
        work:        resolve(__dirname, 'work.html'),
        examples:    resolve(__dirname, 'examples.html'),
        blog:        resolve(__dirname, 'blog.html'),
        blogCost:    resolve(__dirname, 'blog/how-much-does-a-website-cost-denton-tx.html'),
        blogSigns:   resolve(__dirname, 'blog/5-signs-your-website-is-hurting-your-business.html'),
        blogCustom:  resolve(__dirname, 'blog/custom-website-vs-template-denton-small-business.html'),
      },
    },
  },
});
