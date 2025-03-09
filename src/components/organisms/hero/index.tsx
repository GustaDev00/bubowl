import * as S from "./styles";
import useAnimation from "./animation";
import type { HeroProps } from "./props";
import { FC } from "react";

export const Hero: FC<HeroProps> = ({ content, globe, ...props }) => {
  const { sectionRef } = useAnimation();
  const { text, title, description, button } = content;

  return (
    <S.Hero ref={sectionRef} {...props}>
      <S.Wrapper>
        <S.Content>
          <S.Text>{text}</S.Text>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Button {...button} />
        </S.Content>
        {globe?.active ? <S.Globe {...globe} /> : null}
      </S.Wrapper>
    </S.Hero>
  );
};
