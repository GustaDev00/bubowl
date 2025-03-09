import styled from "styled-components";
import _Link from "next/link";
import { LazyImage } from "../lazy-image";

export const Link = styled(_Link)`
  position: relative;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
    z-index: 4;
  }
`;

export const Image = styled.div`
  position: relative;
  z-index: 2;
`;

export const Shadow = styled(LazyImage)`
  position: absolute;
  width: 27.773px;
  height: 27.182px;
  object-fit: contain;
`;

export const Logo = styled(LazyImage)`
  position: relative;
  width: 27.182px;
  height: 27.182px;
  object-fit: contain;
`;

export const Text = styled.p`
  color: #ececec;
  font-family: var(--poppins);
  font-size: 16px;
  font-weight: 600;
`;
