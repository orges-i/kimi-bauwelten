import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isDev = mode === 'development';
  const isBuild = command === 'build';
  
  return {
    base: '/kimi-bauwelten/',
    server: {
      host: "0.0.0.0",
      port: 8080,
      strictPort: true,
      open: true,
      proxy: {
        // Add any API proxies here if needed
      },
      // This ensures that all routes are handled by index.html for client-side routing
      historyApiFallback: true,
    },
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
        // Emotion babel plugin is not needed with SWC
      }), 
      isDev && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: isDev,
      // Ensure assets are loaded from the correct path
      assetsInlineLimit: 0,
      // This ensures that the 404.html is copied to the root
      copyPublicDir: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
          entryFileNames: `assets/[name].[hash].js`,
          chunkFileNames: `assets/[name].[hash].js`,
          assetFileNames: `assets/[name].[hash].[ext]`
        }
      },
      // Ensure proper chunking for better loading performance
      chunkSizeWarningLimit: 1000,
      // Minify the build for production
      minify: isDev ? false : 'terser',
      // Enable brotli compression
      brotliSize: !isDev,
    },
    define: {
      'process.env': {}
    },
    // Improve HMR in development
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      esbuildOptions: {
        // Enable esbuild's tree shaking
        treeShaking: true,
      },
    },
  };
});
