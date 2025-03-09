import * as S from "./styles";
import useAnimation from "./animation";
import { useLanguageContext } from "@/config/contexts/language";
import { useCallback, useState } from "react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { menuRef } = useAnimation();
  const { navigation } = useLanguageContext().data;

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <S.Navigation>
      <S.Menu onClick={handleClick} ref={menuRef} data-fs-link="hover">
        <S.Line data-fs-gsap="line" data-fs-link="hover" />
        <S.Line data-fs-gsap="line" data-fs-link="hover" />
        <S.Circle data-fs-gsap="circle" data-fs-link="hover" />
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
                {navigation.content.map((item: { href: string; title: string }) => {
                  if (item.href && item.title) {
                    const { title, href } = item;

                    return (
                      <S.Item key={title} href={href} data-fs-link="hover">
                        {title}
                      </S.Item>
                    );
                  }
                  return null;
                })}
              </S.List>
            </S.MainModal>
            <S.FooterModal>
              a
              {/* {social_share.content.map(({ title, link }) => (
                <S.Social key={title} href={link} target="_blank" data-fs-link="hover"></S.Social>
              ))} */}
            </S.FooterModal>
          </S.WrapperModal>
        </S.Modal>
        <S.Black onClick={handleClick} />
      </S.Overlay>
    </S.Navigation>
  );
};
