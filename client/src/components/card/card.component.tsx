import { Grid } from "../UI/grid"
import { Props } from "./card.props"
import { StyledCard, StyledCardDescription, StyledCardImg, StyledCardText, StyledCardTitle } from "./card.styled"

export const Card = ({img, title, price, yard, sold, ticket, days}: Props) => {
  return <StyledCard>
    <div>
      <StyledCardImg src={img}/>
    </div>
    <StyledCardDescription>
      <StyledCardTitle>{title}</StyledCardTitle>
      <Grid columns="repeat(3, 1fr)" gap="5px">
        <StyledCardText>
          {price} Dhs
        </StyledCardText>
        <StyledCardText>
        Yield {yard}%
        </StyledCardText>
        <StyledCardText>
          Sold {sold}% 
        </StyledCardText>
        <StyledCardText >
        Ticket - {ticket} Dhs
        </StyledCardText>
        <StyledCardText>
        Days left {days}
        </StyledCardText>
      </Grid>
    </StyledCardDescription>
  </StyledCard>
}
