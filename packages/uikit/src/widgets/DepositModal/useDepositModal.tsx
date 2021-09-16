import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./DepositModal";
import NetworkModal from "./DepositModalv2";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentConnectModalv2: () => void;
}

const useDepositModal = (login: any): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentConnectModalv2] = useModal(<NetworkModal login={login} />);
  return { onPresentConnectModal, onPresentConnectModalv2 };
};

export default useDepositModal;
