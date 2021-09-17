import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useNFTModal from "./useNFTModal";

export default {
  title: "Widgets/NFTModal",
  argTypes: {},
};

export const Wallet: React.FC = () => {
  const { onPresentNFTModal } = useNFTModal(() => null);
  return (
    <Flex>
      <Button onClick={onPresentNFTModal}>Open NFT modal</Button>
    </Flex>
  );
};
