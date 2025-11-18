import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from "@tailwindcss/vite";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    fontFamily: {
  poppins: ['Poppins', 'sans-serif'],
}

  },
});
