import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useDepositModal from "./useDepositModal";

export default {
  title: "Widgets/DepositModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const { onPresentConnectModal, onPresentConnectModalv2 } = useDepositModal(
    () => null,
    () => null,
    "0xbdda50183d817c3289f895a4472eb475967dc980"
  );
  return (
    <Flex>
      <Button onClick={onPresentConnectModal}>Open deposit modal</Button>
      <Button onClick={onPresentConnectModalv2}>Open deposit modal v2.0</Button>
    </Flex>
  );
};
