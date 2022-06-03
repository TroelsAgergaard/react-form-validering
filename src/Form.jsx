import { useForm } from "react-hook-form";
import Input from "./Input";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.firstName?.type === "required" && "First name is required!... "}
      <br />
      <Input label="firstName" register={register} required />
      <input type="submit" />
    </form>
  );
};

export default Form;
