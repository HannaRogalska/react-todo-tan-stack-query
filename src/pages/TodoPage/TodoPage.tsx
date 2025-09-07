import InputTodo from "../../components/InputTodo/InputTodo"
import ListItemsTodo from "../../components/listitems/ListItemsTodo"


const TodoPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Your Todo</h1>
      <InputTodo />
      <ListItemsTodo />
    </div>
  );
}

export default TodoPage
