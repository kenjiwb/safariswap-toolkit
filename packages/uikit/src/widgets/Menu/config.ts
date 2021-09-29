import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "NFT Market",
    icon: "NFTMarketIcon",
    href: "/nft-market",
  },
  {
    label: "Your NFT",
    icon: "YourNFTIcon",
    href: "/your-nft",
  },
  {
    label: "Lootbox",
    icon: "LootboxIcon",
    href: "/lootbox",
  },
  {
    label: "Claim Prize",
    icon: "ClaimPrizeIcon",
    href: "/claim-prize",
  },
  {
    label: "Beginner Guide",
    icon: "BeginnerGuideIcon",
    href: "/beginner-guide",
  },
  {
    label: "ELP Token Conversion",
    icon: "ELPTokenConversionIcon",
    href: "/elp-token-conversion",
  },
  {
    label: "Sell Credit",
    icon: "QuestionMarkIcon",
    href: "/create-to-nature",
  },
  {
    label: "Upgrade",
    icon: "QuestionMarkIcon",
    href: "/upgrade",
  },
  {
    label: "Swap",
    icon: "QuestionMarkIcon",
    href: "/swap",
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/pancakeswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/PancakeSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/PancakeSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/PancakeSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/pancakeswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/pancakeswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/pancakeswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/PancakeSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/PancakeswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/pancakeswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/pancakeswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/PancakeSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/PancakeSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/pancakeswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
