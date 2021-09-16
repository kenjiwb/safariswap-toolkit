import React from "react";
import styled from "styled-components";
import ModalActions from "./ModalActions";
import { Modal as DefaultModal } from "../Modal";
import { Button } from "../../components/Button";

interface Props {
  login: any;
  onDismiss?: () => void;
}

const Modal = styled(DefaultModal)`
  background: ${({ theme }) => theme.colors.safariGreen3};
`;

const DepositModal: React.FC<Props> = ({ onDismiss = () => null }) => (
  <Modal title="Deposit Your Tokens" onDismiss={onDismiss}>
    <ModalActions>
      <Button variant="secondary" onClick={onDismiss} width="100%">
        Cancel
      </Button>
      <Button width="100%">Confirm</Button>
    </ModalActions>
  </Modal>
);

export default DepositModal;
