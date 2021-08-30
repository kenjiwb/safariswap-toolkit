import React from "react";
import styled from "styled-components";
import { HelpIcon } from "../../components/Svg";
import { Modal as DefaultModal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const Modal = styled(DefaultModal)`
background-color :#341762;
border-radius: .75rem;
max-width: 24rem;
  > :first-child {
    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 0px;
    border-bottom: none;
    h2 {
      color: #cdc5df;
      font-size: 1.25rem;
      font-weight: 700;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: #fff;
      opacity: 0.5;
    }

    button {
      height: 30px;
    }
  }

  > :nth-child(2) {
    padding-top: 0px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    border-bottom: none;

    p:first-child {
      font-size: 1.125rem;
      color: #cdc5df;
      margin-bottom: 1rem;
      line-height: 1.5;
      font-weight: 300;
    }

    p:last-child {
      font-size: .75rem;
      color: #ffffff;
      b {
        color: #e61b1b;
        margin-left:4px;
      }
    }

    button {
      padding-top: .5rem;
      padding-bottom: .5rem;
      background-color: #290b5a;
      border-color: #290b5a;
      border-width: 1px;
      border-style: solid;

      border-radius: .25rem;
      justify-content: center !important;
      display: flex;
      margin-bottom: 1rem;
      transition: all .2s ease-out;
    
      div {
        color: #ffffff;
        font-weight: 400 ;
      }
      &:hover {
        border-color: #4c249f;
        opacity: 1 !important;
      }
      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

    }
  
  }

`;

const NetworkModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Choose a Network" onDismiss={onDismiss}>
    <p>Select a network to switch to in MetaMask.</p>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        isSelected={entry.title === 'Binance Smart Chain' ? true : false}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
    <p>Currently connected to: <b>Bsc-testnet</b></p>
  </Modal>
);

export default NetworkModal;
