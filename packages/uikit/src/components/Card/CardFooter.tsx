import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  ${space}
`;

CardFooter.defaultProps = {
  p: "10px 0 24px 0",
};

export default CardFooter;
