import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Input from "./Input";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const default_value = 1;
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        defaultValue={default_value}
        name="field_name_product"
        render={({ field: { onChange, value, ref } }) => (
          <Select
            inputRef={ref}
            options={options}
            value={options.find((c) => c.value === value)}
            onChange={(val) => onChange(val)}
          />
        )}
      />
      {/* <input type="text" {...register("lastName") }/> */}
      <Input label="lastName" register={register} required />
      <input type="submit" />
    </form>
  );
};

export default Form;
