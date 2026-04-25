import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	transpilePackages: ["@repo/chemistry", "@repo/learn", "@repo/unitconv"],
	output: "export"
};

export default nextConfig;
