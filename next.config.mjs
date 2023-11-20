/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { withContentlayer } from "next-contentlayer";
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@aiabit/api", "@aiabit/auth", "@aiabit/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  webpack(config) {
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};

export default withContentlayer(config);
