import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {scxIconPlugin} from "scx-ui/scx-icon-vite-plugins.js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        scxIconPlugin({type: "html"})
    ],
    optimizeDeps: {
        include: ['spark-md5']
    }
})
