import React from "react";
import styled from "styled-components";
import CustomButton from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
  isSelected?: boolean;
}

interface CustomButtonProps {
  isSelected?: boolean;
}
const Button = styled(CustomButton)<CustomButtonProps>`
  background: #384038;
`;

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb, isSelected }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      isSelected={isSelected}
      width="100%"
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      style={{ justifyContent: "space-between" }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon mr="8px" width="20px" height="20px" />
      <Text bold color="primary">
        {title}
      </Text>
    </Button>
  );
};

export default WalletCard;
