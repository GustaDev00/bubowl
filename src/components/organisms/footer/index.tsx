import * as S from "./styles";
import useAnimation from "./animation";

export const Footer = () => {
  const { sectionRef } = useAnimation();
      
  return <S.Footer ref={sectionRef}></S.Footer>;
};
