import type { MetadataRoute } from "next";

export const revalidate = 60;
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const navigation = [
    {
      title: "Cases",
      href: "/cases",
      children: [
        {
          title: "Pantas Paladar",
          href: "/cases/pantas-paladar",
          children: [],
        },
        {
          title: "Fiberweb",
          href: "/cases/fiberweb",
          children: [],
        },
        {
          title: "Baterias Galileu",
          href: "/cases/baterias-galileu",
          children: [],
        },
        {
          title: "Autority Comunicação Visual",
          href: "/cases/autority-comunicacao-visual",
          children: [],
        },
      ],
    },
    { title: "Serviços", href: "/servicos", children: [] },
    { title: "Sobre", href: "/sobre", children: [] },
    { title: "Contato", href: "/contato", children: [] },
  ];

  const languages = ["en", "es"]; // Idiomas suportados

  const getUrlsFromNavigation = (items: typeof navigation): MetadataRoute.Sitemap => {
    return items.flatMap((item) => {
      const baseUrl = `${process.env.NEXT_PUBLIC_URL}${item.href}`;

      return [
        // URL padrão (sem prefixo de idioma)
        {
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        },

        // URLs para cada idioma (/en/ e /es/)
        ...languages.map((lang) => ({
          url: `${process.env.NEXT_PUBLIC_URL}/${lang}${item.href}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        })),

        // Chamamos recursivamente para os filhos
        ...getUrlsFromNavigation(item.children || []),
      ];
    });
  };

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },

    // Adicionamos a versão /en e /es para a home também
    ...languages.map((lang) => ({
      url: `${process.env.NEXT_PUBLIC_URL}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    })),

    ...getUrlsFromNavigation(navigation),
  ];
}
