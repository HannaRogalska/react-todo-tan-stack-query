import { useForm, type SubmitHandler } from "react-hook-form";
import type { FormValues } from "../../types/formType";
import { useAppDispatch } from "../../hooks/reduxHooks/reduxHooks";
import {addOpinion} from '../../features/form/formSlice'

const Form = () => {
    const { register, handleSubmit, reset } = useForm<FormValues>();
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
      dispatch(addOpinion(data));
      reset()
    };
    return (
      <form
        className="flex gap-1 flex-col items-center w-[450px] border border-solid rounded-lg p-4"
        onSubmit={handleSubmit(onSubmit)}
        aria-label="feedback form"
      >
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          {...register("firstName")}
          className="text-center w-[150px] border border-solid rounded-lg outline-none "
        />
        <label htmlFor="gender">Gender Selection</label>
        <select
          id="gender"
          className="text-center w-[150px] border border-solid rounded-lg outline-none "
          {...register("gender")}
        >
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <label htmlFor="yourOpinion">Your Feedback</label>
        <textarea
          id="yourOpinion"
          className="w-[350px] border border-solid rounded-lg outline-none p-2"
          {...register("opinion")}
        />
        <input
          type="submit"
          className="w-[350px] border border-solid rounded-lg outline-none p-2"
        />
      </form>
    );
};

export default Form;
