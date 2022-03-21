import React, { useState } from "react";
import cn from "classnames";

import { ITabsProps } from "./types";
import "./styles.scss";

const Tabs: React.FC<ITabsProps> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState("All");
  return (
    <div className="tabs">
      {tabs.map((tab, idx) => {
        const { text, onClick } = tab;
        const isCurrentType = currentTab === text;
        return (
          <button
            key={idx}
            className={cn(
              "tabs__button",
              isCurrentType && "tabs__button-active"
            )}
            onClick={() => {
              onClick();
              setCurrentTab(text);
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
