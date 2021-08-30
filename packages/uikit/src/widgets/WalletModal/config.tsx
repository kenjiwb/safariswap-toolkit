import Eth from "./icons/Eth";
import Pool from "./icons/Pool";
import BinanceChain from "./icons/BinanceChain";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Ethereum",
    icon: Eth,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Polygon",
    icon: Pool,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Binance Smart Chain",
    icon: BinanceChain,
    connectorId: ConnectorNames.Injected,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
