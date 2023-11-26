import { fileURLToPath, URL } from "node:url";

import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import VueTypeImports from '@rah-emil/vite-plugin-vue-type-imports'
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    VueTypeImports(),
    splitVendorChunkPlugin(),
    vitePluginImp({
      libList: [
        {
          libName: "@icon-park/vue-next",
          libDirectory: "es/icons",
          camel2DashComponentName: false
        }
      ]
    })
    // Markdown({
    //   markdownItOptions: {
    //     html: true,
    //     xhtmlOut: true,
    //     breaks: true,
    //     linkify: true,
    //     typographer: true
    //   },
    //   markdownItSetup(md) {
    //     md.use(MarkdownItAbbr)
    //       .use(MarkdownItAnchor)
    //       .use(MarkdownItFootnote)
    //       .use(MarkdownItHighlightJS)
    //       .use(MarkdownItSub)
    //       .use(MarkdownItSup)
    //       .use(MarkdownItTaskLists)
    //       .use(MarkdownItTOC)
    //       .use(MarkdownHighlight)
    //       .use(align)
    //       .use(mark);
    //   },
    //   // Class names for the wrapper div
    //   wrapperClasses: "markdown-body"
    // })
  ],
  build:{
    target: 'es2018',
    outDir: '../docs',
    emptyOutDir: false,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
