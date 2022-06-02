import { useForm } from "react-hook-form";
// import Input from "./Input";

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
      {/* <Input name="lastName" /> */}
      <input
        type="text"
        {...register("firstName", { required: true, maxLength: 10 })}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
