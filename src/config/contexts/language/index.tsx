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
  content: unknown;
  data: unknown;
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
