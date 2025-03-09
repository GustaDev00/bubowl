import { type Metadata } from "next";
import { type ReactNode } from "react";
import { HomeTemplate } from "@/templates/home";

export const metadata: Metadata = {
  title: "Bubowl - Construção de Websites criativos e eficazes",
  description: "Construção de Websites criativos e eficazes",
  robots: "index, follow",
  openGraph: {
    title: "Bubowl - Construção de Websites criativos e eficazes",
    description: "Construção de Websites criativos e eficazes",
    type: "website",
    url: "https://bubowl.com.br",
  },
};

const Home = (): ReactNode => {
  return <HomeTemplate />;
};

export default Home;
