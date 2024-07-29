import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/section/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mubirastudio.vercel.app/'),
  title: {
    default: "Mubirastudio",
    template: '%s - Mubirastudio'
  },
  alternates: {
    canonical: "https://www.mubirastudio.vercel.app/",
    languages: {
      "id-ID": 'https://www.mubirastudio.vercel.app/'
    }
  },
  openGraph: {
    title: "Mubirastudio",
    description: "A Software Engineer based in Bandung, Indonesia. See more information about me."
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div id="children">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
