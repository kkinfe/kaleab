import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://kkinfe.github.io/",
    siteName: "Kaleab Kinfe",
  },
  twitter: {
    handle: "@Kaleabkinfe",
    site: "@Kaleabkinfe",
    cardType: "summary_large_image",
  },
};

export default config;
