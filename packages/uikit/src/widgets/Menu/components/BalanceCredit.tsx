import React from "react";
import styled from "styled-components";
import SafariSwapIcon from "../../../images/safariswap-coin.png";

interface Props {
  credit?: string;
}

const Balance = styled.div`
  color: #ffffff;
`;

const BalanceCredit: React.FC<Props> = ({ credit }) => {
  return (
    <>
      <img src={SafariSwapIcon} height="24" width="24" style={{ marginRight: 8 }} />
      <Balance>{credit}</Balance>
    </>
  );
};

export default BalanceCredit;
