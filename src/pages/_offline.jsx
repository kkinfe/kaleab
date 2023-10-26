import Head from 'next/head'
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
import {LinkIcon} from '@/components/icons/LinkIcon'

import { projects } from "@/data/siteMeta";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

const Fallback = () => (
  <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/svg+xml"/>
        <link rel="apple-touch-icon" href="/iconx/apple-touch-icon.png"/>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header/>
      <Container className="mt-9">
        <div className="max-w-2xl text-lg">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, freelancer, and open source enthusiast.
          </h1>
          <p className="mt-6 prose dark:prose-invert">
            I&apos;m Kaleab, a passionate technologist with a diverse
            skill set and a love for all things tech. 🚀
          </p>
          <p className="mt-6 prose dark:prose-invert">
            As a software developer, I bring ideas to life through elegant code.
            Whether it&apos;s crafting web applications, mobile solutions, or
            diving into emerging technologies, I&apos;m up for the challenge.
          </p>
          <p className="mt-6 prose dark:prose-invert">
            Poke around and see what I&apos;m up to. It&apos;s all open source, so feel
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

      <Container id="projects" className="mt-12 md:mt-12">
        <h1 className="text-xl w-auto font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
          Projects
        </h1>
        <ul
          role="list"
          className="mx-auto mt-8 md:mt-8 sm:grid max-w-3xl sm:grid-cols-2 sm:gap-y-10 gap-x-10 flex flex-col gap-16 lg:max-w-none lg:grid-cols-2"
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
      <Footer/>
  </>
)

export default Fallback