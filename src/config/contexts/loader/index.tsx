import { createContext, ReactNode, useContext, useState } from "react";

export default interface LoaderContextProps {
  isLoading: boolean;
  onChangeLoading: (value: boolean) => void;
}

const DEFAULT_STATE: LoaderContextProps = {
  isLoading: false,
  onChangeLoading: () => null,
};

const LoaderContext = createContext(DEFAULT_STATE);

interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(DEFAULT_STATE.isLoading);

  const onChangeLoading = (value: boolean) => {
    setTimeout(() => setIsLoading(value), 500);
  };

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        onChangeLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = () => useContext(LoaderContext);
