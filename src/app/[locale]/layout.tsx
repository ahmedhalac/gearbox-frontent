import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gearbox",
  description: "Gearbox store",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  console.log("locale", locale);
  // if (!routing.locales.includes(locale as any)) {
  //   notFound();
  // }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={barlow.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
