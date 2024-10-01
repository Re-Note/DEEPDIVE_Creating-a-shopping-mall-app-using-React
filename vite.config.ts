import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/DEEPDIVE_Creating-a-shopping-mall-app-using-React/', // GitHub 리포지토리 이름으로 설정
  plugins: [react()],
});
