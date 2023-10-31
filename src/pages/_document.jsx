import { Html, Head, Main, NextScript } from "next/document";

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function removeEventListeners() {
  darkModeMediaQuery.removeEventListener('change', updateModeWithoutTransitions);
  window.removeEventListener('storage', updateModeWithoutTransitions);
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
    removeEventListeners()
  }
`;

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <meta name="theme-color" content="#000000"/>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml"/>
        <link rel="apple-touch-icon" href="/iconx/apple-touch-icon.png"/>
        <link rel="manifest" href="/site.webmanifest" />
        <link	rel="preload"	as="image"	href="https://www.gravatar.com/avatar/adb4591e2216aa1a7ed89a5097a6351f?size=512&q=$75"/>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
