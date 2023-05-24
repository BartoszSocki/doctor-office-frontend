import type ScheduledVisitFormData from "@Interfaces/ScheduledVisitFormData";
import { postRequest } from "@Utils/FetchUtils";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const DayVisitSchedulerForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScheduledVisitFormData>();
  const { day } = useParams();

  const onSubmit: SubmitHandler<ScheduledVisitFormData> = async (data) => {
    data.dayOfTheWeek = day as string;
    try {
      await postRequest(
        `${import.meta.env.VITE_API_URL}/api/doctor/scheduled-visits`,
        data
      );
      navigate(-1);
    } catch (e) {
      console.log("error");
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <form
      className="day-visit-scheduler-form-wrapper"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="clients-header">Visit Data</h1>
      <section className="day-visit-scheduler-form-section">
        <label htmlFor="visit-beg">visit beginning</label>
        <input
          type="time"
          id="visit-beg"
          {...register("visitBegTime", { required: true })}
        />
        <div className="registration-form-error">
          {errors.visitBegTime?.type === "required"
            ? "visit beginning is required"
            : ""}
        </div>
      </section>

      <section className="day-visit-scheduler-form-section">
        <label htmlFor="visit-end">visit end</label>
        <input
          type="time"
          id="visit-end"
          {...register("visitEndTime", { required: true })}
        />
        <div className="registration-form-error">
          {errors.visitEndTime?.type === "required"
            ? "visit end is required"
            : ""}
        </div>
      </section>

      <section className="day-visit-scheduler-form-section">
        <label htmlFor="price">price</label>
        <input
          type="text"
          id="price"
          {...register("price", { required: true })}
        />
        <div className="registration-form-error">
          {errors.price?.type === "required" ? "price is required" : ""}
        </div>
      </section>

      <section className="day-visit-scheduler-form-section">
        <label htmlFor="type">type</label>
        <input
          type="text"
          id="type"
          {...register("type", { required: true })}
        />
        <div className="registration-form-error">
          {errors.type?.type === "required" ? "type is required" : ""}
        </div>
      </section>

      <section className="day-visit-scheduler-form-section">
        <label htmlFor="country">country</label>
        <input
          type="text"
          id="country"
          {...register("address.country", { required: false })}
        />
        <div className="registration-form-error"></div>
      </section>

      <section className="day-visit-scheduler-form-section">
        <label htmlFor="city">city</label>
        <input
          type="text"
          id="city"
          {...register("address.city", { required: true })}
        />
        <div className="registration-form-error">
          {errors.type?.type === "required" ? "city is required" : ""}
        </div>
      </section>

      <section className="day-visit-scheduler-form-section">
        <label htmlFor="zip-code">zip code</label>
        <input
          type="text"
          id="zip-code"
          {...register("address.zipCode", { required: false })}
        />
        <div className="registration-form-error"></div>
      </section>

      <section className="day-visit-scheduler-form-section">
        <label htmlFor="street">street</label>
        <input
          type="text"
          id="street"
          {...register("address.street", { required: true })}
        />
        <div className="registration-form-error">
          {errors.type?.type === "required" ? "street is required" : ""}
        </div>
      </section>

      <div className="day-visit-scheduler-form-actions">
        <input className="btn-edit" type="submit" value={"create"} />
        <input
          className="btn-remove"
          type="button"
          value={"cancel"}
          onClick={handleCancel}
        />
      </div>
    </form>
  );
};

export default DayVisitSchedulerForm;
