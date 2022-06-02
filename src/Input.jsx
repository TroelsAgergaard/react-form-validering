import { useForm } from "react-hook-form";

const Input = ({ name }) => {
  const { register } = useForm();

  return (
    <>
      <input
        type="text"
        {...register(name, { required: true, maxLength: 10 })}
      />
    </>
  );
};

export default Input;
