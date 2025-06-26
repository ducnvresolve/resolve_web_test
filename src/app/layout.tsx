import { Montserrat } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { fallbackLng } from "./i18n/settings";
import type { BaseLayoutProps } from "@/types/base.types";
import "./globals.css";

const MONTSERRAT = Montserrat({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-montserrat",
});

const APP_GOOGLE_ANALYTICS_ID = process.env.APP_GOOGLE_ANALYTICS_ID || "";
const APP_GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

export default function RootLayout({
  params: { lng = fallbackLng },
  children,
}: BaseLayoutProps) {
  return (
    <html
      lang={lng}
      dir="ltr"
      className={`scroll-smooth tracking-wide ${MONTSERRAT.variable}`}
    >
      <head>
        {/* Google Tag Manager - Head */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${APP_GTM_ID}');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId={APP_GOOGLE_ANALYTICS_ID} />
        {typeof window !== "undefined" ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${APP_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
