import { mediaMaxWidth } from "@/config/utils/media-query";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 12rem 6.4rem;
  z-index: 2;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 3.5rem 4rem;
    flex-direction: column;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 3.6rem 2.2rem;
  `}
`;
