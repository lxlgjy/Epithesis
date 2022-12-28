import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
// 无法修复ts中找不到模块禁止
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
