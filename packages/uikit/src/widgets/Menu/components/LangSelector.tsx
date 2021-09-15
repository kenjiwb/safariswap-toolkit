import React from "react";
import {
  // SvgProps,
  TranslationOutlineIcon,
} from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { Position } from "../../../components/Dropdown/types";

import Button from "../../../components/Button/Button";
// import * as IconModule from "../icons";
import { Language } from "../types";
import MenuButton from "./MenuButton";

// const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
// const { LanguageIcon } = Icons;

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  position?: Position;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang, position }) => (
  <Dropdown
    position={position}
    target={
      <Button
        style={{ height: "unset" }}
        variant="text"
        startIcon={<TranslationOutlineIcon color="textSubtle" width="24px" />}
      >
        <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

LangSelector.defaultProps = {
  position: "top-right",
};

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
