import { useForm } from "react-hook-form";

interface VisitModalPropsInterface {
  initState?: any;
}

const VisitModal = ({ initState }: VisitModalPropsInterface) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form>
        <input defaultValue="" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired != null && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default VisitModal;
