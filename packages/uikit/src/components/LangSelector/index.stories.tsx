import React, { useState } from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import LangSelector from "./LangSelector";
import { languageList, Language } from "./types";

export default {
  title: "Components/LangSelector",
  component: LangSelector,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    locale: "en-US",
    language: "English",
    code: "en",
    flag: "https://flaglane.com/download/chinese-flag/chinese-flag.svg",
  });

  const setLanguage = async (language: Language) => {
    setCurrentLanguage(language);
  };

  return (
    <div style={{ padding: "32px", width: "400px" }}>
      <LangSelector
        position="bottom"
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        flagUrl={currentLanguage.flag}
      />
    </div>
  );
};
