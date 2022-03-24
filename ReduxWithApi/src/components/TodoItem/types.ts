export type ITodoItemProps = {
  item: ITodoItem;
  setComplete: (id: string) => void;
  setDelete: (id: string) => void;
};

interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
}
