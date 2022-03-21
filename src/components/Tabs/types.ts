export type ITabsProps = {
  tabs: ITab[];
};

interface ITab {
  text: string;
  onClick: () => void;
}
