import styled from "styled-components";
import { Logo as _Logo } from "@/components/atoms/logo";
import { Navigation } from "@/components/molecules/navigation";
import { mediaMaxWidth } from "@/config/utils/media-query";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 5rem;
  padding: 0 8.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 0 3.2rem;
    top: 3.2rem;
  `}
`;

export const Logo = styled(_Logo)``;

export const Nav = styled(Navigation)``;
