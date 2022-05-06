import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'server/public'
    },
    resolve: {
        alias: {
            "@": path.resolve("src"),
        },
    },
})
