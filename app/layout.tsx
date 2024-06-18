import type { Metadata } from "next";

import Nav from "src/components/Nav";
import Footer from "src/shared/Footer";
import { HeaderInit, PageViews } from "src/components/InngestClientSDK";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Inngest - Ship reliable code, no extra infrastructure",
    template: "%s - Inngest",
  },
  icons: {
    icon: [
      {
        url: process.env.NEXT_PUBLIC_FAVICON ?? "/favicon-june-2024-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: process.env.NEXT_PUBLIC_FAVICON ?? "/favicon-june-2024-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts-cdn.inngest.com/" />
        <link rel="stylesheet" href="https://fonts-cdn.inngest.com/fonts.css" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
        <HeaderInit />
      </head>
      <body className="dark font-sans">
        <Nav />

        <main /*className="max-w-container-desktop m-auto px-6 md:px-10 lg:px-20" */
        >
          {children}
        </main>

        <Footer disableCta={true} />

        <PageViews />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');
      `,
          }}
        />
      </body>
    </html>
  );
}
