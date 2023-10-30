import nextMDX from '@next/mdx'
import nextPWA from 'next-pwa'
import remarkGfm from 'remark-gfm'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkCodeTitles from './src/lib/remark-code-title.mjs'
import rehypePresetMinify from 'rehype-preset-minify'
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        port: '',
        pathname: '/avatar/adb4591e2216aa1a7ed89a5097a6351f?size=512x512',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true, 
}

const withPWA = nextPWA ({
  dest: "public",
  register: true,
  skipWaiting: true,  
  swSrc: 'service-worker.js'
})

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkCodeTitles],
    rehypePlugins: [rehypePrismPlus, rehypePresetMinify],
    providerImportSource: '@mdx-js/react',
  },
})

export default withPWA(withMDX(nextConfig))
