import styled from "styled-components";
import background from "../../assets/hero-image.png";
export const StyledHero = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;

  position: relative;
  &::before {
    position: absolute;
    content: "";
    background: rgba(23, 34, 52, 0.6);
    width: 100%;
    height: 100%;
  }
`;

export const StyledHeroTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  z-index: 2;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
`;
export const StyledHeroText = styled.p`
  font-family: Lato;
  font-size: 24px;
  line-height: 32px;
  max-width: 822px;
  font-weight: 400;
  z-index: 2;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const StyledHeroButton = styled.button`
  font-family: "Merriweather", serif;
  font-weight: 700;
  cursor:pointer;
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 20px;
  line-height: 34px;
  background: transparent;
  z-index: 2;
  transition: scale, 0.3s ease-in;

  @media (hover: hover) {
    &:hover {
      scale: 1.1;
    }
  }
  @media (max-width: 500px) {
    padding: 11px 25px;
  }
`;
