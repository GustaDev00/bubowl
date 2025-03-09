import { ReactNode } from "react";
import { LanguageProvider } from "./language";
import { LoaderProvider } from "./loader";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <LanguageProvider>
      <LoaderProvider>{children}</LoaderProvider>
    </LanguageProvider>
  );
};
