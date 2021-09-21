import React from "react";
import { useModal } from "../Modal";
import SellCreditModal from "./SellCreditModal";

interface ReturnType {
  onPresentSellCreditModal: () => void;
}

const useSellCreditModal = (): ReturnType => {
  const [onPresentSellCreditModal] = useModal(<SellCreditModal />);
  return { onPresentSellCreditModal };
};

export default useSellCreditModal;
