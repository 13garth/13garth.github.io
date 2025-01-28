import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    base: '/',
    build: {
        outDir: "public",
        manifest: "manifest.json",
        emptyOutDir: false,
        rollupOptions: {
            input: {
                main: "resources/js/app.js",
            },
            output: {
                format: "umd",
                entryFileNames: "app.js",
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith(".css")) {
                        return "app.css";
                    }
                    return "assets/[name][extname]";
                    // return "assets/[name]-[hash][extname]";
                },
                globals: {
                    jquery: "$",
                },
            },
        },
        cssCodeSplit: false,
        cssMinify: true,
        minify: false,
    },
    plugins: [laravel(["/app.css", "/app.js"])],
    resolve: {
        alias: {
            xlsx: "./public/uncompiled-js/xlsx.full.min.js",
        },
    },
    server: {
        host: "localhost",
        port: 3000,
        strictPort: true,
        hmr: {
            overlay: false,
        },
        watch: {
            usePolling: true,
        },
    },
});
