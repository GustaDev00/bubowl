import styled from "styled-components";
import _Link from "next/link";
import { LazyImage } from "../lazy-image";

export const Link = styled(_Link)`
  display: flex;
  gap: 0.8rem;
  align-items: center;
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
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
`;
