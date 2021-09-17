import React from "react";
import { useModal } from "../Modal";
import NFTModal from "./NFTModal";
import NFTInventory from "./nft-inventory";

interface ReturnType {
  onPresentNFTModal: () => void;
}

const useNFTModal = (login: any): ReturnType => {
  const [onPresentNFTModal] = useModal(<NFTModal totalNFT={NFTInventory.length} NFTInventory={NFTInventory} />);
  return { onPresentNFTModal };
};

export default useNFTModal;
