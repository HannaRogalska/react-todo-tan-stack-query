import { getTodos, deleteTodo, toggleTodoItem } from "../../services/todoApi";


const ListItemsTodo = () => {
  const {data, isLoading, isError} = getTodos();
  const deleteT = deleteTodo()
  const checkFn = toggleTodoItem()
  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>Error...</h1>;
  
  return (
    <ol className="list-decimal list-inside flex flex-col gap-2">
      {data?.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              className="mx-2"
              onChange={() => checkFn.mutate(todo)}
            />
            <button onClick={() => deleteT.mutate(todo.id)} className="border rounded-2xl px-2">
              {deleteT.isPending ? "Deleting..." : "Delete"}
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default ListItemsTodo

