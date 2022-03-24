export type ITodoListProps = {
  list: ITodoItem[];
  sort: boolean;
  setComplete: (id: string) => void;
  setDelete: (id: string) => void;
};

interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
}
