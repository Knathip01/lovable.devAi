// Disable Cloudflare adapter (used by Lovable sandbox) so the app can be
// deployed to Vercel instead.  The lovable config auto-injects Cloudflare
// during build; setting `cloudflare: false` prevents that.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
});
