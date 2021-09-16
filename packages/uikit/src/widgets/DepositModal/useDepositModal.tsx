import React from "react";
import { useModal } from "../Modal";
import DepositModal from "./DepositModal";
import DepositModalv2 from "./DepositModalv2";

interface ReturnType {
  onPresentDepositModal: () => void;
  onPresentDepositModalv2: () => void;
}

const useDepositModal = (login: any): ReturnType => {
  const [onPresentDepositModal] = useModal(<DepositModal login={login} />);
  const [onPresentDepositModalv2] = useModal(<DepositModalv2 login={login} />);
  return { onPresentDepositModal, onPresentDepositModalv2 };
};

export default useDepositModal;
