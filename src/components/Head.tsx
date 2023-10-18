import Head from "next/head";

export default function HeadMeta({ pageName }: { pageName?: string }) {
  return (
    <Head>
      <title>{pageName && `${pageName} | `}BookHub</title>
      <meta name="description" content="Tiketai - A Powerful Ticketing System for Seamless Event Management" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
