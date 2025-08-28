import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, removeTodo } from "../hooks/queryHooks/queryHooks";
import type { Todo } from "../types/todoType";

export const getTodos = () => {
  const { data, isLoading, isError } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  return { data, isLoading, isError };
};

export const deleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
