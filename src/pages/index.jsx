import Link from "next/link";

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
import siteMeta from "@/data/siteMeta";
import { NextSeo } from "next-seo";

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
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
        title="Kaleab Kinfe"
        description={siteMeta.description}
        canonical="https://kkinfe.github.io/kaleab"
        openGraph={{
          url: "https://kkinfe.github.io/kaleab",
          images: [
            {
              url: `https://kkinfe.github.io/kaleab/og?title=${siteMeta.title}&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: "kkinfe.github.io/kaleab",
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

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
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
