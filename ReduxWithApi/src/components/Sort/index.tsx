import React from "react";
import cn from "classnames";

import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

import { ISortProps } from "./types";
import "./styles.scss";

const Sort: React.FC<ISortProps> = ({ sort, setSort }) => {
  return (
    <div className="sort">
      <button
        className={cn("sort__button", sort && "sort__button-active")}
        onClick={() => {
          setSort(true);
        }}
      >
        <ArrowDownward fontSize="small" />
      </button>
      <button
        className={cn("sort__button", !sort && "sort__button-active")}
        onClick={() => {
          setSort(false);
        }}
      >
        <ArrowUpward fontSize="small" />
      </button>
    </div>
  );
};

export default Sort;
