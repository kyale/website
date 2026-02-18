/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // Nécessaire pour l'export statique sans serveur d'images
};

export default nextConfig;
