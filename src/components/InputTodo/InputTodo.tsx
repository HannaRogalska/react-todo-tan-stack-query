import { addTodo } from "../../services/todoApi";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { FormValues } from "../../types/formType";

const InputTodo = () => {
 const saveInputData = addTodo()
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const saveData: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    saveInputData.mutate(data.title)
    reset()
  };
  console.log(handleSubmit);
  
  
  return (
    <form onSubmit={handleSubmit(saveData)}>
      <input {...register("title", { required: true, maxLength: 20 })} />

      <input type="submit" />
    </form>
  );
};

export default InputTodo;
