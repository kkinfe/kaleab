import Link from "next/link";
import Image from "next/image";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons/SocialIcons";

import { generateRssFeed } from "@/lib/generateRssFeed";
import { getAllArticles } from "@/lib/getAllArticles";
import { formatDate } from "@/lib/formatDate";
import siteMeta, { projects } from "@/data/siteMeta";
import { NextSeo } from "next-seo";

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/blogs/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <NextSeo
        title="Kaleab K. Tekleab's Official Website"
        description={siteMeta.description}
        canonical="https://kkinfe.github.io"
        openGraph={{
          url: "https://kkinfe.github.io",
          images: [
            {
              url: `https://kkinfe.github.io/favicon.ico`,
              width: 1200,
              height: 600,
              alt: "Og Image Alt",
              type: "image/png",
            },
          ],
          siteName: "Kaleab K. Tekleab's official website",
        }}
      />
      <Container className="mt-9">
        <div className="max-w-2xl text-lg">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, freelancer, and open source enthusiast.
          </h1>
          <p className="mt-6 prose dark:prose-invert">
            Hey there, I&apos;m Kaleab, a passionate technologist with a diverse
            skill set and a love for all things tech. 🚀
          </p>
          <p className="mt-6 prose dark:prose-invert">
            As a software developer, I bring ideas to life through elegant code.
            Whether it&apos;s crafting web applications, mobile solutions, or
            diving into emerging technologies, I&apos;m up for the challenge.
          </p>
          <p className="mt-6 prose dark:prose-invert">
            Poke around and see what I’m up to. It’s all open source, so feel
            free to contribute.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={siteMeta.author.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />

            <SocialLink
              href={siteMeta.author.instagram}
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />

            <SocialLink
              href={siteMeta.author.email}
              aria-label="Email Address for contact"
              icon={MailIcon}
            />

            <SocialLink
              href={siteMeta.author.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={siteMeta.author.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>

      <Container id="blogs" className="mt-16 md:mt-16">
        <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          Blogs
        </h1>
        <div className="mt-16 md:mt-16 grid max-w-2xl grid-cols-2 gap-y-20 gap-x-10 lg:max-w-none lg:grid-cols-2">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </Container>

      <Container id="projects" className="mt-16 md:mt-16">
        <h1 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          Projects
        </h1>
        <ul
          role="list"
          className="mt-16 md:mt-16 grid max-w-2xl grid-cols-2 gap-y-20 gap-x-10 lg:max-w-none lg:grid-cols-2"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
