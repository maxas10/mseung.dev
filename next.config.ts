import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       // The 'source' is the incoming request path.
  //       // We are matching the root path ('/').
  //       source: '/',
  //       // The 'destination' is the path to the actual page component.
  //       // This will serve the content of src/app/main/page.tsx for the '/' URL.
  //       // Note: The 'app' directory is for Next.js 13+ (App Router).
  //       // If you are using Next.js 11 (Pages Router), your path would be '/main'.
  //       destination: '/main',
  //     },
  //   ]
  // },
};

export default nextConfig;
