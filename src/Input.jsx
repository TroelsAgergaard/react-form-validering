const Input = ({ register, label, required }) => {
  return <input {...register(label, {required})}/>;
};

export default Input; 
