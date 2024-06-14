import type { Metadata } from "next";
import "./globals.css";
import { I18nProviderClient } from "../../locales/client";
import { ReactElement } from "react";
import SessionProvider from "~/components/sessionProvider";
import { Inter as FontSans } from "next/font/google"
import { cn } from "~/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { session, locale }
}: { params: { locale: string }, children: ReactElement }) {
  return (
    // TODO GET LOCALE FROM SESSION ET SET IT
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <I18nProviderClient locale={locale}>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >{children}</body>
        </I18nProviderClient>
      </SessionProvider>
    </html>
  );
}
