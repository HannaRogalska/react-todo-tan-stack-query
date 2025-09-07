import { addTodo } from "../../services/todoApi";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { TodoValues } from "../../types/formType";

const InputTodo = () => {
 const saveInputData = addTodo()
  const { register, handleSubmit, reset } = useForm<TodoValues>();
  const saveData: SubmitHandler<TodoValues> = (data) => {
    console.log(data);
    saveInputData.mutate(data.title);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(saveData)}>
      <input
        {...register("title", { required: true, maxLength: 20 })}
        className="text-center w-[350px] border border-solid rounded-lg outline-none mr-2 "
      />

      <input
        type="submit"
        className="text-center w-[100px] border border-solid rounded-lg outline-none "
      />
    </form>
  );
};

export default InputTodo;
