import * as S from "./styles";
import useAnimation from "./animation";
import type { ButtonProps } from "./props";
import { FC } from "react";

export const Button: FC<ButtonProps> = ({ title, href, ...props }) => {
  const { sectionRef } = useAnimation();

  return (
    <S.Button
      ref={sectionRef}
      title={title}
      href={href}
      target="_blank"
      data-fs-link="hover"
      {...props}
    >
      {title}
    </S.Button>
  );
};
