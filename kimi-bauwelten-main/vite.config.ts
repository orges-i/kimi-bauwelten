import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  
  return {
    server: {
      host: "0.0.0.0",
      port: 8080,
      strictPort: true,
      open: true,
      proxy: {
        // Add any API proxies here if needed
      },
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
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
      // Ensure proper chunking for better loading performance
      chunkSizeWarningLimit: 1000,
    },
    // Use relative paths for better compatibility
    base: isDev ? '/' : './',
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
