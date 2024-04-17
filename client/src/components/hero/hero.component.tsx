import { Container } from "../UI/container";
import { Flex } from "../UI/flex";
import { StyledHero, StyledHeroButton, StyledHeroText, StyledHeroTitle } from "./hero.styled";


export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Flex
          align="center"
          direction="column"
          padding="300px 0 0 0"
          gap="15px"
        >
          <StyledHeroTitle>The chemical negatively charged</StyledHeroTitle>
          <StyledHeroText>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </StyledHeroText>
          <StyledHeroButton>Get Started</StyledHeroButton>
        </Flex>
      </Container>
    </StyledHero>
  );
}
