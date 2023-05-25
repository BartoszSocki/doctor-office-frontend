import type ScheduledVisitFormData from "@Interfaces/ScheduledVisitFormData";
import "./style.css";

import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import EditButton from "@Components/Buttons/EditButton";
import RemoveButton from "@Components/Buttons/RemoveButton";
import { DoctorAPI } from "@Utils/ApiUtils";

const DayVisitSchedulerForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScheduledVisitFormData>();
  const { day } = useParams();

  const onSubmit: SubmitHandler<ScheduledVisitFormData> = async (formData) => {
    formData.dayOfTheWeek = day as string;
    try {
      await DoctorAPI.post("/scheduled-visits", formData);
      navigate("/dashboard/doctor/scheduled-visits");
    } catch (e) {
      console.log(e);
    }
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    navigate("/dashboard/doctor/scheduled-visits");
  };

  return (
    <form
      className="day-visit-scheduler-form-wrapper"
      // onSubmit={handleSubmit(onSubmit)}
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
        <EditButton onClick={handleSubmit(onSubmit)}>save</EditButton>
        <RemoveButton onClick={handleCancel}>cancel</RemoveButton>

        {/* <input className="btn-edit" type="submit" value={"create"} />
        <input
          className="btn-remove"
          type="button"
          value={"cancel"}
          onClick={handleCancel}
        /> */}
      </div>
    </form>
  );
};

export default DayVisitSchedulerForm;
