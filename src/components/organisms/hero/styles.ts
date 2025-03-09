import styled from "styled-components";
import { Globe as _Globe } from "@/components/atoms/globe";
import { Wrapper as _Wrapper } from "@/components/atoms/wrapper";
import { Button as _Button } from "@/components/atoms/button";

export const Hero = styled.section`
  position: relative;
  height: var(--full-height);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("/imgs/bg.png") no-repeat;
    background-size: cover;
  }
`;

export const Wrapper = styled(_Wrapper)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.article``;

export const Text = styled.p`
  color: #fff;
  font-size: 2rem;
  font-style: italic;
  font-weight: 400;
  line-height: 3.7rem;

  span {
    color: #ff5119;
  }
`;

export const Title = styled.h1`
  color: #ececec;
  font-size: 6.2rem;
  font-style: italic;
  font-weight: 700;
  line-height: 8rem;
  margin: 2.2rem 0 3.9rem;
`;

export const Description = styled.p`
  color: #ececec;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.7rem;
  margin-bottom: 2.8rem;
  opacity: 0.52;
`;

export const Button = styled(_Button)``;

export const Container = styled.div``;

export const Globe = styled(_Globe)``;
