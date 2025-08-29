import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchTodos,
  removeTodo,
  toggleTodo,
} from "../hooks/queryHooks/queryHooks";
import type { Todo } from "../types/todoType";

export const getTodos = () => {
  return useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export const deleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeTodo,
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);
      queryClient.setQueryData(["todos"], (old: Todo[]) =>
        old?.filter((t) => t.id !== id)
      );
      return { previousTodos };
    },
    onError(error, id, context) {
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
export const toggleTodoItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleTodo,
    onMutate: async (data: Todo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);
      queryClient.setQueryData(["todos"], (oldData:Todo[]) =>
        oldData?.map((t) =>
          t.id === data.id ? { ...t, completed: !t.completed } : t
        )
      );
      return { previousTodos };
    },
    onError(error, variables, context) {
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
    onSettled() {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
