import nextMDX from '@next/mdx'
import nextPWA from 'next-pwa'
import remarkGfm from 'remark-gfm'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkCodeTitles from './src/lib/remark-code-title.mjs'
import rehypePresetMinify from 'rehype-preset-minify'
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true, 
}
const withPWA = nextPWA({
  disable: process.env.NODE_ENV === 'development',
  dest: "public",
  swSrc: 'service-worker.js',
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkCodeTitles],
    rehypePlugins: [rehypePrismPlus, rehypePresetMinify],
    providerImportSource: '@mdx-js/react',
  },
})

export default withPWA(withMDX(nextConfig))
