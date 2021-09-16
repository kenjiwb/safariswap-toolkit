import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import NetworkModal from "./NetworkModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentConnectModalv2: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentConnectModalv2] = useModal(<NetworkModal login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} />);
  return { onPresentConnectModal, onPresentAccountModal, onPresentConnectModalv2 };
};

export default useWalletModal;
