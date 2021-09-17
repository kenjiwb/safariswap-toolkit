import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import LangSelector from "./LangSelector";
import BalanceCredit from "./BalanceCredit";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: transparent;
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 8px;
`;

const BalanceText = styled.div`
  color: #ffffff;
  font-size: 12px;
`;

const PanelHeader: React.FC<Props> = ({ isPushed, pushNav, cakePriceUsd, credit, currentLang, langs, setLang }) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SettingsEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
        <LangSelector position="bottom" currentLang={currentLang} langs={langs} setLang={setLang} />
      </SettingsEntry>
      <SettingsEntry>
        <BalanceText>Balance Credit</BalanceText>
      </SettingsEntry>
      <SettingsEntry style={{ justifyContent: "flex-start" }}>
        <BalanceCredit credit={credit} />
      </SettingsEntry>
    </Container>
  );
};

export default PanelHeader;
