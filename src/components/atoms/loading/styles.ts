import styled from "styled-components";

export const Loading = styled.div<{ $isActive: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ff5119;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;

export const Container = styled.div`
  position: relative;
  border: 0.3rem solid #000;
  padding: 5rem;
  border-radius: 50%;
`;

export const ProgressMensage = styled.p`
  position: absolute;
  color: #000;
  left: 50%;
  margin-top: -1rem;
  transform: translateX(-50%);
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
  font-style: italic;
`;
