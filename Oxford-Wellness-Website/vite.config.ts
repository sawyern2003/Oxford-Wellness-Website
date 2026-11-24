import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";
import { belsyreRedirectLocation } from "./shared/belsyre-qr";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    metaImagesPlugin(),
    {
      name: "preload-main-font",
      transformIndexHtml: {
        order: "post",
        handler(html, ctx) {
          if (!ctx.bundle) return html;
          const fontAsset = Object.keys(ctx.bundle).find((file) =>
            /montserrat-latin-600-normal.*\.woff2$/i.test(file),
          );
          if (!fontAsset) return html;
          const href = fontAsset.startsWith("/") ? fontAsset : `/${fontAsset}`;
          const preload = `<link rel="preload" href="${href}" as="font" type="font/woff2" crossorigin />`;
          return html.replace("</head>", `    ${preload}\n  </head>`);
        },
      },
    },
    {
      name: "belsyre-qr-redirect",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const pathOnly = req.url?.split("?")[0];
          if (pathOnly !== "/belsyre" && pathOnly !== "/belsyre/") {
            next();
            return;
          }
          res.statusCode = 302;
          res.setHeader("Location", belsyreRedirectLocation());
          res.setHeader("Cache-Control", "no-store");
          res.end();
        });
      },
    },
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
