import React from "react";
import cn from "classnames";

import { ITabsProps } from "./types";
import "./styles.scss";

const Tabs: React.FC<ITabsProps> = ({ tabs, currentType, setType }) => {
  return (
    <div className="tabs">
      {tabs.map((tab, idx) => {
        const { text, value } = tab;
        const isCurrentType = currentType === value;
        return (
          <button
            key={idx}
            className={cn(
              "tabs__button",
              isCurrentType && "tabs__button-active"
            )}
            onClick={() => {
              setType(value);
            }}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
