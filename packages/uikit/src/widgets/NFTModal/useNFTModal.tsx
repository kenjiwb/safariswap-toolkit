import React from "react";
import { useModal } from "../Modal";
import NFTModal from "./NFTModal";

interface ReturnType {
  onPresentNFTModal: () => void;
}

const useNFTModal = (NFTInventory: any, onDismiss: any): ReturnType => {
  const [onPresentNFTModal] = useModal(
    <NFTModal totalNFT={NFTInventory.length} NFTInventory={NFTInventory} onDismiss={onDismiss} />
  );
  return { onPresentNFTModal };
};

export default useNFTModal;
