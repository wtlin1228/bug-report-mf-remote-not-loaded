import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "provider",
  exposes: {
    ".": "./src/index.tsx",
  },
  getPublicPath: `function() { return 'http://localhost:3001/' }`,
});
