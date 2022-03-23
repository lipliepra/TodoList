export type ITodoListProps = {
  list: ITodoItem[];
  sort: boolean;
  setImportant: (id: string, imp: boolean) => void;
  setComplete: (id: string, comp: boolean) => void;
  setDelete: (id: string) => void;
};

interface ITodoItem {
  id: string;
  number: string;
  description: string;
  isImportant: boolean;
  isComplete: boolean;
}
