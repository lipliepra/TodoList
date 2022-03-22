export type ITabsProps = {
  tabs: ITab[];
  currentType: string;
  onClick: (value: string) => void;
};

interface ITab {
  text: string;
  value: string;
}
