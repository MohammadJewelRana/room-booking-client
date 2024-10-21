import "@/styles/globals.css";
// import "../styles/globals.css"
import { Metadata, Viewport } from "next";

import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";

import { metaDataSEO } from "@/utils/MetaData";

export const metadata = metaDataSEO({
  tabTitle: "roomBooker | Home",
  des: "Welcome to our room booking website.",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-white text-black font-sans antialiased ",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
