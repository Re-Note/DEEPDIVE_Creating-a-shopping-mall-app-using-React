import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/DEEPDIVE_Creating-a-shopping-mall-app-using-React/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // 메인 파일 경로
        fallback: './404.html', // 404 fallback 파일 경로
      },
    },
  },
  server: {
    open: true, // 개발 서버 실행 시 자동으로 브라우저 열기
  },
});
