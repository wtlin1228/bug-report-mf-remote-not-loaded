import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "consumer",
  remotes: {
    provider: "provider@http://localhost:3001/mf-manifest.json",
  },
  shareStrategy: "loaded-first",
});
