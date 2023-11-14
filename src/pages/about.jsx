import Image from 'next/image'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { BriefcaseIcon, ArrowDownIcon } from '@/components/icons/Icons'

import portraitImage from '@/images/ss.png'
import siteMeta, { resume } from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


function Resume() {
    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            {/* <Image src={role.logo} alt="" className="h-7 w-7" unoptimized /> */}
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-500 dark:text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                                    }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button href="https://linkedin.com/in/kaleabkinfe" variant="secondary" className="group mt-6 w-full">
                More on LinkedIn
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}

export default function About() {
    return (
        <>
            <NextSeo
                title="About - Kaleab K. Tekleab's Official Website"
                description={siteMeta.description}
                canonical="https://kkinfe.github.io/about"
                openGraph={{
                    url: "https://kkinfe.github.io/about",
                    images: [
                        {
                            url: `https://kkinfe.github.io/about`,
                            width: 1200,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/png",
                        },
                    ],
                    siteName: "Kaleab K. Tekleab's official website",
                }}
            />
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="object-cover aspect-square  rounded-2xl bg-zinc-100 dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            A Lifelong Passion for Software Design: The Journey of Kaleab <abbr title="Kinfe" className="no-underline">K.</abbr> Tekleab.
                        </h1>
                        <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
                            <p>From the moment I laid my eyes on a dusty computer programming book in my school library more than a decade ago, my life took a transformative turn. I am Kaleab Kinfe, a passionate software designer, and my story is a testament to the enduring power of curiosity, determination, and innovation in the world of technology.</p>
                            <p>For me, software design is not just about writing lines of code and architecting systems; it&apos;s about creating solutions that enhance the lives of people and solve real-world problems. One project that deeply resonates with me is the mobile app I designed for a nonprofit organization. This app aimed to connect volunteers with individuals in need, and its impact was profound. Thousands of volunteers were able to extend a helping hand to those requiring assistance, making a significant difference in their lives. This project reinforced my belief in using my skills for the greater good and highlighted the importance of empathy in the world of technology</p>
                            <p>In conclusion, my journey in the world of software design has been marked by curiosity, innovation, and a deep commitment to making a positive impact. My story is a testament to the enduring spirit of creativity and the boundless potential of technology to shape our world. As I continue on this path, I am driven by the belief that my passion for software design will continue to fuel my desire to create meaningful solutions and inspire those around me to do the same.</p>
                        </div>
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        <Resume />
                    </div>

                </div>
            </Container>
        </>
    )
}
