import { v4 as uuidv4 } from "uuid";

export const testData = [
  {
    id: uuidv4(),
    number: "Task 1",
    description: "Create TodoApp",
    isImportant: true,
    isComplete: false,
  },
  {
    id: uuidv4(),
    number: "Task 2",
    description: "Drink coffee",
    isImportant: false,
    isComplete: false,
  },
  {
    id: uuidv4(),
    number: "Task 3",
    description: "Play with Pusha",
    isImportant: false,
    isComplete: true,
  },
];
