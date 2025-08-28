import axios from "axios";
import type { Todo } from "../types/todoType";

export const fetchTodos = async ():Promise<Todo[]> => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  if (!res) throw new Error("Fetch error");
  return res.data;
};
