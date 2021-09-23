import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useDepositModal from "./useDepositModal";

export default {
  title: "Widgets/DepositModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const { onPresentDepositModal, onPresentDepositModalv2 } = useDepositModal(
    () => null,
    () => null
  );
  return (
    <Flex>
      <Button onClick={onPresentDepositModal}>Open deposit modal</Button>
      <Button onClick={onPresentDepositModalv2}>Open deposit modal v2.0</Button>
    </Flex>
  );
};
