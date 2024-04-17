import { Card } from "../card/card.component";
import { Container } from "../UI/container";
import { Grid } from "../UI/grid";
import { StyledCards, StyledCardsTitle, StyledPrompt } from "./cards.styled";
import { useGetCardsQuery } from "../../redux/user-api.slice";
import { ICard } from "../../types";
import { useAppSelector } from "../../redux/hooks";

export const Cards = () => {
  const { token } = useAppSelector((state) => state.auth);
  const { data: cards } = useGetCardsQuery(
    void {
      skip: !token,
    }
  );

  return (
    <StyledCards>
      <Container>
        {token ? (
          <>
            <StyledCardsTitle>Open Deals</StyledCardsTitle>
            <Grid
              padding="20px"
              gap="20px"
              columns="repeat(2, 1fr)"
              columnsmobile="none"
              justify="center"
            >
              {cards?.data.map((card: ICard) => (
                <Card
                  img={card.img}
                  key={card.id}
                  title={card.title}
                  price={card.price}
                  ticket={card.ticket}
                  yard={card.yield}
                  days={card.days}
                  sold={card.sold}
                />
              ))}
            </Grid>
          </>
        ) : (
          <StyledPrompt>Please log in to see the open deals</StyledPrompt>
        )}
      </Container>
    </StyledCards>
  );
};
