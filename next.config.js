/** @type {import('next').NextConfig} */

// const withPWA = require("@ducanh2912/next-pwa").default({
//   dest: "public",
//   cacheOnFrontEndNav : true,
//   aggressiveFrontEndNavCaching:true,
//   reloadinfOnline:true,
//   swcMinify:true,
//   disable:false,
//   workboxOptions:{
//       disableDevLogs:true
//   },
// });


const nextConfig = {


  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }, 
      {
        protocol: 'http',
        hostname: '*'
      }, 
    ]
  }
}

// module.exports = withPWA(nextConfig) ;
module.exports = nextConfig ;