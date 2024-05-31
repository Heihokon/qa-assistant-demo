import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FsProvider } from "@/components/FsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <FsProvider>
        <body className={inter.className}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Welcome to Flagship Qa assistant demo app!</h1>
              </div>
            </div>
            {children}
          </div>
        </body>
      </FsProvider>
    </html>
  );
}
