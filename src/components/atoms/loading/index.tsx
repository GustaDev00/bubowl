import { useEffect, useState } from "react";
import * as S from "./styles";
import { useLoaderContext } from "@/config/contexts/loader";

export const Loading = () => {
  const [loading, setLoading] = useState(true);
  const { onChangeLoading } = useLoaderContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev === 99) {
          clearInterval(interval);
          setLoading(false);
          onChangeLoading(true);
        }
        return prev + 1;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.Loading $isActive={loading}>
      <S.Container>
        <S.ProgressMensage>{progress}%</S.ProgressMensage>
      </S.Container>
    </S.Loading>
  );
};
