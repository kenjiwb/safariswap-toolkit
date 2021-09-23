import React from "react";
import styled from "styled-components";
import { Modal as DefaultModal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const Modal = styled(DefaultModal)`
  ::after {
    content: "";
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(to right, #1fc7d4, rgba(248, 209, 47, 1)) !important;
  }

  background: #718353;
  position: relative;

  > :first-child {
    border-bottom: none;
  }

  svg {
    fill: rgb(254, 239, 3);
  }
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
  </Modal>
);

export default ConnectModal;
