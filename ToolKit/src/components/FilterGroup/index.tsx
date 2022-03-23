import React from "react";

import Tabs from "../Tabs";
import Sort from "../Sort";

import { IFilterGroupProps } from "./types";
import "./styles.scss";

const FilterGroup: React.FC<IFilterGroupProps> = ({
  tabs,
  currentType,
  setType,
  sort,
  setSort,
}) => {
  return (
    <div className="filterGroup">
      <Tabs tabs={tabs} currentType={currentType} setType={setType} />
      <Sort sort={sort} setSort={setSort} />
    </div>
  );
};

export default FilterGroup;
