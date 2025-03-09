"use client";

import { Suspense, type ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/config/styles/fonts";
import { StyledComponentsRegistry } from "@/config/lib/registry";
import { theme } from "@/config/styles/theme";
import { GlobalStyles } from "@/config/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";
import { Cursor } from "@/components/atoms/cursor";
import { SmoothScroll } from "@/components/atoms/smooth-scroll";
import { LanguageProvider } from "@/config/contexts/language";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH} />
      </head>

      <body className={fontNames}>
        <StyledComponentsRegistry>
          <LanguageProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <GSAPInitializer />
              <main>
                <Suspense>
                  <Cursor>{children}</Cursor>
                </Suspense>
              </main>
            </ThemeProvider>
          </LanguageProvider>
        </StyledComponentsRegistry>
        <SmoothScroll />
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "G-XYZ"} />
    </html>
  );
};

export default RootLayout;
