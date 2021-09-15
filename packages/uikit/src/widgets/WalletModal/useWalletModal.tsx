import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import NetworkModal from "./NetworkModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentConnectModalv2: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentConnectModalv2] = useModal(<NetworkModal login={login} />);
  return { onPresentConnectModal, onPresentConnectModalv2 };
};

export default useWalletModal;
