export type ITabsProps = {
  tabs: ITab[];
  currentType: string;
  setType: (value: string) => void;
};

interface ITab {
  text: string;
  value: string;
}
