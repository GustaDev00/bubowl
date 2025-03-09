import * as S from "./styles";
import useAnimation from "./animation";
import { useLanguageContext } from "@/config/contexts/language";
import { useCallback, useState } from "react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { sectionRef } = useAnimation();
  const { navigation, social_share } = useLanguageContext().data;

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <S.Navigation ref={sectionRef}>
      <S.Menu onClick={handleClick} data-fs-link="hover">
        <S.Line />
        <S.Line />
      </S.Menu>

      <S.Overlay $open={open}>
        <S.Modal>
          <S.WrapperModal>
            <S.HeaderModal>
              <S.TextMenu>Menu</S.TextMenu>
              <S.ButtonClose onClick={handleClick} data-fs-link="hover" />
            </S.HeaderModal>
            <S.MainModal>
              <S.List>
                {navigation.content.map(({ title, href }) => (
                  <S.Item key={title} href={href} data-fs-link="hover">
                    {title}
                  </S.Item>
                ))}
              </S.List>
            </S.MainModal>
            <S.FooterModal>
              {social_share.content.map(({ title, link }) => (
                <S.Social key={title} href={link} target="_blank" data-fs-link="hover">
                  {/* <Icon /> */}
                </S.Social>
              ))}
            </S.FooterModal>
          </S.WrapperModal>
        </S.Modal>
        <S.Black onClick={handleClick} />
      </S.Overlay>
    </S.Navigation>
  );
};
