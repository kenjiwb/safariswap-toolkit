export interface Language {
  code: string;
  language: string;
  locale: string;
  flag?: string;
}

export const EN: Language = {
  locale: "en-US",
  language: "English",
  code: "en",
  flag: "https://flaglane.com/download/british-flag/british-flag.svg",
};
export const ZHCN: Language = {
  locale: "zh-CN",
  language: "简体中文",
  code: "zh-cn",
  flag: "https://flaglane.com/download/chinese-flag/chinese-flag.svg",
};
export const ZHTW: Language = {
  locale: "zh-TW",
  language: "繁體中文",
  code: "zh-tw",
  flag: "https://flaglane.com/download/chinese-flag/chinese-flag.svg",
};

export const languages = {
  "en-US": EN,
  "zh-CN": ZHCN,
  "zh-TW": ZHTW,
};

export const languageList = Object.values(languages);
