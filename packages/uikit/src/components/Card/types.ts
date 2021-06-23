import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";

export type CardTheme = {
  background: string;
  boxShadow: string;
  boxShadowActive: string;
  boxShadowSuccess: string;
  boxShadowWarning: string;
  cardHeaderBackground: {
    default: string;
    blue: string;
    bubblegum: string;
    violet: string;
    safari: string;
  };
  dropShadow: string;
};

export interface CardProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
  variant?: string;
}
