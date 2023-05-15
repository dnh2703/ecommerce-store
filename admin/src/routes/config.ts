import { ReactNode } from "react";

export type RouteType = {
  element: JSX.Element;
  index?: boolean;
  path?: string;
  child?: RouteType[];
  sidebarProps?: {
    displayText: string;
    icon?: ReactNode;
  };
};
