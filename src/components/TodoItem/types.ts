export type ITodoItemProps = {
  item: ITodoItem;
  setImportant: (id: string, imp: boolean) => void;
  setComplete: (id: string, comp: boolean) => void;
  setDelete: (id: string) => void;
};

interface ITodoItem {
  id: string;
  title: string;
  description: string;
  isImportant: boolean;
  isComplete: boolean;
}
