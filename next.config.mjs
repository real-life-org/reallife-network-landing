import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal self-contained server bundle for the Docker image.
  output: "standalone",
  // Pin the file-tracing root to this project so Next doesn't pick up the
  // monorepo lockfile one level up.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
