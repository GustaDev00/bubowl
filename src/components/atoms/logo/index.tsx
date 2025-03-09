import * as S from "./styles";
import useAnimation from "./animation";

export const Logo = ({ className }: { className?: string }) => {
  const { logoRef, textRef } = useAnimation();
  return (
    <S.Link href="/" className={className}>
      <S.Image>
        <S.Shadow src="/imgs/logo/shadow.svg" alt="Logo Sombra" />
        <S.Logo src="/imgs/logo/logo.svg" alt="Logo" ref={logoRef} />
      </S.Image>
      <S.Text ref={textRef} />
    </S.Link>
  );
};
