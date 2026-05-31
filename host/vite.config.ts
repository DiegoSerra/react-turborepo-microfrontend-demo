import { federation } from "@module-federation/vite";
import { rnw } from "vite-plugin-rnw";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  server: { fs: { allow: [".", "..", "../shared"] } },
  build: {
    target: "chrome89",
    outDir: "../dist",
  },
  plugins: [
    rnw(),
    federation({
      dts: true,
      name: "host",
      filename: "remoteEntry.js",
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-native-web": { singleton: true },
        "@repo/core": { singleton: true },
        "@repo/ui": { singleton: true },
        "@repo/components": { singleton: true },
      },
    }),
  ],
}));
