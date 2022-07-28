import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as url from 'url'
import path from 'path'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@App': path.resolve(__dirname, './src/app'),
            '@Cart': path.resolve(__dirname, './src/cart'),
            '@Menu': path.resolve(__dirname, './src/menu'),
        },
    },
})
