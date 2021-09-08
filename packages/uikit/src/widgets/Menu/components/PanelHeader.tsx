import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import LangSelector from "./LangSelector";

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
  padding: 0px 8px 0px;
`;

const SettingsBalanceEntry = styled.div`
  display: flex;
  padding: 0px 8px 8px;
`;

const PanelHeader: React.FC<Props> = ({ isPushed, pushNav, cakePriceUsd, currentLang, langs, setLang }) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }



const BalanceText = styled.div`
color: #ffffff;
padding-left: 32px;
`;

  return (
    <Container>
      <SettingsEntry>
        <CakePrice cakePriceUsd={cakePriceUsd} />
        <LangSelector position="bottom" currentLang={currentLang} langs={langs} setLang={setLang} />
      </SettingsEntry>
      <SettingsBalanceEntry>
      <BalanceText>Balance</BalanceText>
      </SettingsBalanceEntry>
    </Container>
  );
};

export default PanelHeader;
