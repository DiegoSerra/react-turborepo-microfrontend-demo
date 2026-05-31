import { federation } from "@module-federation/vite";
import { rnw } from "vite-plugin-rnw";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    server: {
      fs: {
        allow: [".", "..", "../shared"],
      },
    },
    build: {
      target: "chrome89",
    },
    plugins: [
      rnw(),
      federation({
        dts: true,
        filename: "remoteEntry.js",
        name: "remote-2",
        exposes: {
          "./remote-app": "./src/App.tsx",
          "./counter": "./src/components/Counter.tsx",
        },
        remotes: {},
        shared: {
          react: { singleton: true, import: false },
          "react-dom": { singleton: true, import: false },
          "react-native-web": { singleton: true, import: false },
          "@repo/core": { singleton: true, import: false },
          "@repo/ui": { singleton: true, import: false },
          "@repo/components": { singleton: true, import: false },
        },
      }),
    ],
  };
});
