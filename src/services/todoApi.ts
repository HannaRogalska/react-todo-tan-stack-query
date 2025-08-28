import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./fetchTodos";
import type { Todo } from "../types/todoType";

export const getTodos = () => {
  const { data, isLoading, isError } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
    return { data, isLoading, isError };
};
