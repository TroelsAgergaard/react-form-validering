import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    // firstName: yup.string().required(), default message...
    firstName: yup.string().required("Venligst udfyld feltet..."),
  })
  .required();

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.firstName?.message}
      <input
        type="text"
        {...register("firstName", { required: true, maxLength: 10 })}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
