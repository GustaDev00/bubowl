import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import * as S from "./styles";

interface CursorProps {
  children: ReactNode;
  smoothFactor?: number;
  refreshRate?: number;
  cursorText?: string;
}

export const Cursor: FC<CursorProps> = ({
  children,
  smoothFactor = 9,
  refreshRate = 0.016,
  cursorText = "Mehr",
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [linkType, setLinkType] = useState<string | null>(null);

  // Event handler para delegação de eventos
  const handleMouseInteraction = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (event.type === "mouseenter" || event.type === "mouseover") {
      if (target.tagName === "A" || target.tagName === "BUTTON") {
        setLinkType("hover");
      } else if (target.tagName === "DIV" && target.hasAttribute("data-fs-link")) {
        setLinkType(target.getAttribute("data-fs-link"));
      }
    } else if (event.type === "mouseleave" || event.type === "mouseout") {
      setLinkType(null);
    }
  }, []);

  useEffect(() => {
    let animationInstance: gsap.core.Tween;

    // Variáveis para a posição do cursor
    let posX = 0,
      posY = 0;
    let mouseX = 0,
      mouseY = 0;

    // Event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Event delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        (target.tagName === "DIV" && target.hasAttribute("data-fs-link"))
      ) {
        handleMouseInteraction(e);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        (target.tagName === "DIV" && target.hasAttribute("data-fs-link"))
      ) {
        handleMouseInteraction(e);
      }
    };

    // eslint-disable-next-line prefer-const
    animationInstance = gsap.to(
      {},
      {
        duration: refreshRate,
        repeat: -1,
        onRepeat: () => {
          posX += (mouseX - posX) / smoothFactor;
          posY += (mouseY - posY) / smoothFactor;

          if (cursorRef.current) {
            gsap.set(cursorRef.current, {
              css: {
                left: posX,
                top: posY,
              },
            });
          }
        },
      },
    );

    // Adiciona event listeners usando delegação de eventos
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      // Limpa animação e event listeners
      animationInstance.kill();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseInteraction, smoothFactor, refreshRate]);

  return (
    <>
      {children}
      <S.Cursor ref={cursorRef} $type={linkType}>
        <S.Text>{cursorText}</S.Text>
      </S.Cursor>
    </>
  );
};
