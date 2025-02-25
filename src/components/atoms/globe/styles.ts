import styled from "styled-components";

export const Canvas = styled.canvas`
  width: 600px;
  height: 600px;
  max-width: 100%;
  aspect-ratio: 1;
  cursor: grab;
  contain: "layout paint size";
  transition: opacity 1s ease;
`;
