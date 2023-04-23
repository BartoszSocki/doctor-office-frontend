import { useForm, type SubmitHandler } from "react-hook-form";
import "./style.css";

interface VisitModalPropsInterface {
  initState?: any;
}

interface Inputs {
  begTime: string;
  endTime: string;
  visitType: string;
  price: string;
  officeLocalization: string;
}

const VisitModal = ({ initState }: VisitModalPropsInterface) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
  };

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className="visit-modal-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="visit-modal-actions">
        <div className="visit-modal-beg-time visit-modal-two-elem-vert">
          <label htmlFor="begTime">beg time</label>
          <input
            type="time"
            className="visit-modal-input visit-modal-input--small"
            {...register("begTime", { required: true })}
          />
          <span
            className={`visit-modal-error ${
              errors.begTime != null
                ? "visit-modal-error--visible"
                : "visit-modal-error--hidden"
            }`}
          >
            This field is required
          </span>
        </div>

        <div className="visit-modal-end-time visit-modal-two-elem-vert">
          <label htmlFor="endTime">end time</label>
          <input type="time" {...register("endTime", { required: true })} />
          <span
            className={`visit-modal-error ${
              errors.endTime != null
                ? "visit-modal-error--visible"
                : "visit-modal-error--hidden"
            }`}
          >
            This field is required
          </span>
        </div>
      </div>

      <div className="visit-modal-localization visit-modal-two-elem-vert">
        <label htmlFor="officeLocalization">office localization</label>
        <input
          type="text"
          {...register("officeLocalization", { required: true, minLength: 1 })}
        />
        <span
          className={`visit-modal-error ${
            errors.officeLocalization != null
              ? "visit-modal-error--visible"
              : "visit-modal-error--hidden"
          }`}
        >
          This field is required
        </span>
      </div>

      <div className="visit-modal-visit-type visit-modal-two-elem-vert">
        <label htmlFor="visitType">type of visit</label>
        <input
          type="text"
          {...register("visitType", { required: true, minLength: 1 })}
        />
        <span
          className={`visit-modal-error ${
            errors.visitType != null
              ? "visit-modal-error--visible"
              : "visit-modal-error--hidden"
          }`}
        >
          This field is required
        </span>
      </div>

      <div className="visit-modal-price visit-modal-two-elem-vert">
        <label htmlFor="price">price</label>
        <input type="text" {...register("price", { required: true })} />
        <span
          className={`visit-modal-error ${
            errors.price != null
              ? "visit-modal-error--visible"
              : "visit-modal-error--hidden"
          }`}
        >
          This field is required
        </span>
      </div>

      <div className="visit-modal-actions">
        <button type="button">cancel</button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default VisitModal;
