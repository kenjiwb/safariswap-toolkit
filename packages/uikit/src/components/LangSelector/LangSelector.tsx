import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import { Position } from "../Dropdown/types";

import ImageIcon from "./ImageIcon";
import Button from "../Button/Button";
import { Language } from "./types";
import MenuButton from "./MenuButton";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  position?: Position;
  color?: string;
  flagUrl: string;
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang, position, color, flagUrl }) => (
  <Dropdown
    position={position}
    target={
      <Button variant="text" startIcon={<ImageIcon src={flagUrl} alt={currentLang} />}>
        <Text color={color}>{currentLang?.toUpperCase()}</Text>
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
        <ImageIcon src={lang.flag} alt={lang.language} />
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

LangSelector.defaultProps = {
  position: "top-right",
  color: "black",
};

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
