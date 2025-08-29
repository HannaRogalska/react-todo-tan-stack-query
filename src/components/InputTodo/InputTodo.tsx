import { useState, type ChangeEvent } from "react"
import {addTodo} from "../../services/todoApi"

const InputTodo = () => {
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue);
    const addNewTodo = addTodo()
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      ></input>
          <button onClick={() => addNewTodo.mutate( inputValue)}>Add todo</button>
    </div>
  );
}

export default InputTodo
