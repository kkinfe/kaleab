import { NextSeo } from "next-seo";
import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { getAllArticles } from "@/lib/getAllArticles";
import { formatDate } from "@/lib/formatDate";
import siteMeta from "@/data/siteMeta";

function Article({ article }) {
  return (
    <article className="md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blogs/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} decorate>
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
    </article>
  );
}

export default function ArticlesIndex({ articles }) {
  const headline =
    "I write about things I'm learning and things I'm building.";
  const intro =
    "All of my long-form thoughts on programming, leadership, infrastructure, and more, collected in chronological order.";

  return (
    <>
      <NextSeo
        title="Blogs - Kaleab K. Tekleab's Official Website"
        description={siteMeta.description}
        canonical="https://kkinfe.github.io/blogs"
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
          siteName: "kkinfe.github.io",
        }}
      />
      <SimpleLayout title={headline} intro={intro}>
        <div className=" md:pl-6">
          <div className="mx-auto mt-12 md:mt-12 sm:grid max-w-3xl sm:grid-cols-2 sm:gap-y-10 gap-x-10 flex flex-col gap-16 lg:max-w-none lg:grid-cols-2">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  };
}
