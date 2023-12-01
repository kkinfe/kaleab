const siteMeta = {
  title: "Kaleab K. Tekleab's Official Website",
  description:
    "Explore insightful blogs and creative projects on Kaleab K. Tekleab's Official Website",
  copyright: "Kaleab Kinfe",
  author: {
    name: "Kaleab Kinfe",
    email: "mailto:kaleab.kinfe.tekleab@gmail.com",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/kaleabkinfe_",
    github: "https://github.com/kkinfe",
    linkedin: "https://linkedin.com/in/kaleabkinfe",
  },
  siteUrl: "https://kkinfe.github.io/",
};
export const projects = [
  {
    name: "Geez",
    description:
      "Our Geez Documentation website is your one-stop resource for everything related to Geez",
    link: { href: "https://github.com/kkinfe/Geez", label: "github.com" },
  },
  {
    name: "Ecovida",
    description:
      "Welcome to Ecovida an e-commerce platform, where shopping meets seamless indulgence!",
    link: { href: "https://github.com/kkinfe/ecovida", label: "github.com" },
  },
  {
    name: "Smart-Sprouts",
    description:
      "Automating Efficient Irrigation for Plant Growth.",
    link: { href: "https://github.com/kkinfe/Smart-Sprouts", label: "github.com" },
  },
  {
    name: "NodeBase",
    description:
      "A Node.js starter template with TypeScript, SWC, Jest, nodemon, Prettier, Husky, cross-env, and optimized workflows for top-notch web development.",
    link: { href: "https://github.com/kkinfe/NodeBase", label: "github.com" },
  },
  {
    name: "Portifolio Website",
    description: "Elegant portfolio website for shares your work and journey.",
    link: { href: "https://github.com/kkinfe/kkinfe.github.io", label: "github.com" },
  }
];

export const resume = [
  {
    company: 'Supernova',
    title: 'Full Stack Developer',

    start: '2021',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Securicom Advanced Technologies',
    title: 'React Developer',

    start: '2020',
    end: '2021',
  },
];

export default siteMeta;
