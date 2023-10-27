import { NextSeo } from 'next-seo';

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import {LinkIcon} from '@/components/icons/LinkIcon'

import siteMeta, { projects } from '@/data/siteMeta'


export default function Projects() {
  const headline = "Things I’ve made trying to put my mark on the universe."
  const intro="I’ve worked on tons of little projects over the years, but these are the ones that I’m most proud of. If you see something that piques your interest, check it out via the link below. While you're there, feel free to contribute any ideas that would make it better. Remember: Open source!"

  return (
    <>
      <NextSeo
        title="Projects - Kaleab K. Tekleab's Official Website"
        description={siteMeta.description}
        canonical="https://kkinfe.github.io/projects"
        openGraph={{
          url: 'https://kkinfe.github.io/projects',
          images: [
            {
              url: `https://kkinfe.github.io/projects`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'kkinfe.github.io',
        }}
      />
      <SimpleLayout title={headline} intro={intro}>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
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
      </SimpleLayout>
    </>
  )
}
