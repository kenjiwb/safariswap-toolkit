import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useSellCreditModal from "./useSellCreditModal";

export default {
  title: "Widgets/SellCreditModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const { onPresentSellCreditModal } = useSellCreditModal(() => null);
  return (
    <Flex>
      <Button onClick={onPresentSellCreditModal}>Open Sell Credit modal</Button>
    </Flex>
  );
};
