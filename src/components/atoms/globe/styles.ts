import styled from "styled-components";

export const Canvas = styled.canvas`
  position: absolute;
  right: -28rem;
  top: 0;
  width: 130rem;
  height: 130rem;
  max-width: 100%;
  aspect-ratio: 1;
  cursor: grab;
  transition: opacity 1s ease;
`;
