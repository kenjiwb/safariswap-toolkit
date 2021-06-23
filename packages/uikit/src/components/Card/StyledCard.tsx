import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

const StyledCard = styled.div<StyledCardProps>`
  background: ${({ theme }) => theme.card.cardHeaderBackground["safari"]};
  border: ${({ theme }) => theme.card.boxShadow};
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: ${({ theme }) => theme.card.boxShadow};
  color: ${({ theme }) => theme.colors["text"]};
  overflow: hidden;
  position: relative;

  ${space}
`;

StyledCard.defaultProps = {};

export default StyledCard;
