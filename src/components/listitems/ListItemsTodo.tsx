import { getTodos } from '../../services/todoApi'


const ListItemsTodo = () => {
  const todos = getTodos();
  if (todos.isLoading) return <h1>Loading...</h1>
  if (todos.isError) return <h1>Error...</h1>;
  console.log(todos);
  
  return (
    <ul>
      {todos.data?.map((todo) => {
        return <li key={todo.id}>{ todo.title}</li>
      })}
      
    </ul>
  )
}

export default ListItemsTodo

