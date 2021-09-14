import React from "react";
import styled from "styled-components";
import { EthIcon } from "../../../components/Svg";

interface Props {
  value?: number;
}

const Balance = styled.div`
  color: #ffffff;
`;

const BalanceValue: React.FC<Props> = ({ value }) => {
  return (
    <>
      <EthIcon height="24px" width="24px" mr="8px" />
      <Balance>{value}</Balance>
    </>
  );
};

export default BalanceValue;
