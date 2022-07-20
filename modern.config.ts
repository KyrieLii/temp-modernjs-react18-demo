import { defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/docs/apis/config/overview
export default defineConfig({
  server: {
    ssr: true,
  },
  runtime: {
    router: true,
    state: true,
  },
});
