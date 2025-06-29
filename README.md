Issue: https://github.com/module-federation/core/issues/3863

Reproduction steps:

1. run provider:

   ```bash
   $ pnpm i
   $ pnpm build
   $ pnpm preview
   ```

2. run consumer:

   ```bash
   $ pnpm i
   $ pnpm build
   $ pnpm preview
   ```

3. open `localhost:3000`
