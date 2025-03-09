import { Logo as _Logo } from "@/components/atoms/logo";
import { Navigation } from "@/components/molecules/navigation";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 5rem;
  padding: 0 8.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(_Logo)``;

export const Nav = styled(Navigation)``;
