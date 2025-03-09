import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import Content from "@/config/constants";

interface LanguageContextType {
  setType: Dispatch<SetStateAction<"en" | "pt" | "es">>;
  content: {
    homne: {
      header: {
        content: {
          text: JSX.Element;
          title: JSX.Element;
          description: JSX.Element;
          button: {
            title: string;
            href: string;
          };
        };
        globe: {
          active: boolean;
          list: {
            title: string;
            description: string;
          }[];
        };
      };
      tecnology: {
        title: string;
        imgs: {
          src: string;
          alt: string;
        }[];
      };
      case: {
        project: {
          info: {
            title: string;
            button: {
              title: string;
              href: string;
            };
          };
          awward: {
            title: string;
            description: string;
            href: string;
          };
          content: {
            title: string;
            description: string;
          };
        };
        content: {
          title: string;
          text: JSX.Element;
        };
      };
      services: {
        title: string;
        description: JSX.Element;
        list: {
          title: string;
          text: JSX.Element;
          button: {
            title: string;
            href: string;
          };
        }[];
      };
      difference: {
        title: JSX.Element;
        description: JSX.Element;
        imgs: {
          src: string;
          alt: string;
        }[];
        content: {
          leads: {
            text: string;
            number: number;
          };
          domain: {
            text: string;
            number: number;
          };
          hits: {
            text: string;
            number: number;
          };
        };
      };
      how_it_works: {
        title: JSX.Element;
        steps: {
          span: JSX.Element;
          title: JSX.Element;
          description: JSX.Element;
          img: {
            src: string;
            alt: string;
          };
        }[];
      };
      business: {
        title: JSX.Element;
        list: {
          type: string;
          content: JSX.Element;
        }[];
      };
      portfolio: {
        title: JSX.Element;
        description: JSX.Element;
      };
      faq: {
        title: JSX.Element;
        description: JSX.Element;
        list: {
          question: JSX.Element;
          answer: JSX.Element;
        }[];
      };
    };
  };
  data: {
    navigation: {
      title: string;
      content: {
        title: string;
        href: string;
        children: {
          title: string;
          href: string;
        }[];
      }[];
    };
    social_share: {
      title: string;
      content: {
        title: string;
        link: string;
      }[];
    };
    services: {
      title: string;
      content: {
        title: string;
      }[];
    };
    contact: {
      title: string;
      content: {
        text: string;
        content: string;
        link: string;
      }[];
    };
    footer: {
      title: JSX.Element;
      text: JSX.Element;
      form: {
        label: string;
        name: string;
        type: string;
      }[];
    };
  };
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [type, setType] = useState<"en" | "pt" | "es">("pt");
  const [content, setContent] = useState(Content["pt"]?.components);
  const [data, setData] = useState(Content["pt"]?.data);

  useEffect(() => {
    setContent(Content[type]?.components);
    setData(Content[type]?.data);
  }, [type]);

  return (
    <LanguageContext.Provider
      value={{
        setType,
        content,
        data,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("erro no provider state");
  }
  return context;
};
