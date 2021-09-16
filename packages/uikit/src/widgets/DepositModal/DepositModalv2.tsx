import React from "react";
import styled from "styled-components";
import { Modal as DefaultModal } from "../Modal";
import ModalActions from "./ModalActions";
import { Button as DefaultButton } from "../../components/Button";

interface Props {
  login: any;
  onDismiss?: () => void;
}

const Modal = styled(DefaultModal)`
  background-image: linear-gradient(to right, #1fc7d4, rgba(248, 209, 47, 1));
  border: none;
  padding: 2px;
  border-radius: 0.625rem;

  border-radius: 0.75rem;
  max-width: 24rem;
  > :first-child {
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    background-color: rgba(22, 21, 34, 1);
    padding-top: 16px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e7e3eb;
    h2 {
      color: #cdc5df;
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  > :nth-child(2) {
    border-bottom-left-radius: 0.625rem;
    border-bottom-left-radius: 0.625rem;
    background-color: rgba(22, 21, 34, 1);
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    border-bottom: none;
  }
`;

const Button = styled(DefaultButton)`
  color: #ffffff;
  background-color: rgba(46, 51, 72, 1);
`;

const DepositModalv2: React.FC<Props> = ({ onDismiss = () => null }) => (
  <Modal title="Deposit Your Tokens" onDismiss={onDismiss}>
    <ModalActions>
      <Button style={{ borderColor: "rgba(46,51,72)" }} onClick={onDismiss} width="100%">
        Cancel
      </Button>
      <Button style={{ borderColor: "rgba(46,51,72)" }} width="100%">
        Confirm
      </Button>
    </ModalActions>
  </Modal>
);

export default DepositModalv2;
