import InputTodo from "../../components/InputTodo/InputTodo"
import ListItemsTodo from "../../components/listitems/ListItemsTodo"


const TodoPage = () => {
  return (
    <>
      <h1>Your Todo</h1>
      <InputTodo />
      <ListItemsTodo />
    </>
  );
}

export default TodoPage
