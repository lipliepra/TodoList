export type IFilterGroupProps = {
  tabs: ITab[];
  currentType: string;
  setType: (value: string) => void;
  sort: boolean;
  setSort: (value: boolean) => void;
};

interface ITab {
  text: string;
  value: string;
}
