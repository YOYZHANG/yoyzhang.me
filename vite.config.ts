import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Markdown from "vite-plugin-react-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    react(),
    Markdown({
      wrapperComponent: 'WrapperPost'
    }),
    Pages({
      dirs: 'pages',
      extensions: ['md', 'tsx'],
    }),
  ],

})
