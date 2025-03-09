"use client";

import { Hero } from "@/components/organisms/hero";
import { useLanguageContext } from "@/config/contexts/language";
import { type FC } from "react";

export const HomeTemplate: FC = () => {
  const { content } = useLanguageContext();
  const { header } = content.home;
  return (
    <>
      <Hero {...header} />
    </>
  );
};
