import axios from "axios";
import type { Todo } from "../../types/todoType";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  if (!res) throw new Error("Fetch error");
  return res.data;
};
export const removeTodo = async (id: number): Promise<void> => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
};
export const toggleTodo = async (data: Todo): Promise<Todo> => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/todos/${data.id}`,
    {
      completed: !data.completed,
    }
  );
  return res.data;
};
export const postTodo = async (data: string): Promise<Todo[]> => {
  const res = await axios.post(
    `https://jsonplaceholder.typicode.com/todos`,
    {
      userId: Date.now(),
      id: Date.now(),
      title: data,
      completed: false,
    }
  );
  return res.data;
};