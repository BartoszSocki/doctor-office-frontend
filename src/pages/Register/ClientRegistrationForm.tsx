import type ClientRegistrationFormData from "@Interfaces/ClientRegistrationFormData";
import { type SubmitHandler, useForm } from "react-hook-form";
import "./style.css";
import { postRequest } from "@Utils/FetchUtils";
import { useNavigate } from "react-router-dom";

const ClientRegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ClientRegistrationFormData>();
  const onSubmit: SubmitHandler<ClientRegistrationFormData> = async (data) => {
    console.log(data);
    await postRequest(`${import.meta.env.VITE_API_URL}/register/client`, data);
    navigate("/login");
  };

  return (
    <div className="registration-form-wrapper">
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Client Registration</h1>

        <section className="registration-form-section">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            {...register("username", {
              required: true,
              pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
          <div className="registration-form-error">
            {errors.username?.type === "required"
              ? "email is required"
              : errors.username?.type === "pattern"
              ? "invalid email"
              : ""}
          </div>
        </section>

        <section className="registration-form-section">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          <div className="registration-form-error">
            {errors.name?.type === "required" ? "name is required" : ""}
          </div>
        </section>

        <section className="registration-form-section">
          <label htmlFor="surname">surname</label>
          <input
            type="text"
            id="surname"
            {...register("surname", { required: true })}
          />
          <div className="registration-form-error">
            {errors.surname?.type === "required" ? "surname is required" : ""}
          </div>
        </section>

        <section className="registration-form-section">
          <label htmlFor="gender">gender</label>
          <select id="gender">
            <option value={"-"}>-</option>
            <option value={"M"}>M</option>
            <option value={"F"}>F</option>
          </select>
          <div className="registration-form-error">
            {errors.gender?.type === "required" ? "gender is required" : ""}
          </div>
        </section>

        <section className="registration-form-section">
          <label htmlFor="mobile">mobile</label>
          <input
            type="text"
            id="mobile"
            {...register("mobile", { required: true, pattern: /^\d{9}$/ })}
          />
          <div className="registration-form-error">
            {errors.mobile?.type === "required"
              ? "mobile number is required"
              : errors.mobile?.type === "pattern"
              ? "invalid mobile number"
              : ""}
          </div>
        </section>

        <section className="registration-form-section">
          <label htmlFor="dateOfBirth">date of birth</label>
          <input
            id="dateOfBirth"
            type="date"
            {...register("dateOfBirth", { required: true })}
          />
          <div className="registration-form-error">
            {errors.dateOfBirth?.type === "required"
              ? "date of birth is required"
              : ""}
          </div>
        </section>

        <section className="registration-form-section">
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
          <div className="registration-form-error">
            {errors.password?.type === "required" ? "password is required" : ""}
          </div>
        </section>

        <section className="registration-form-section">
          <label htmlFor="matchingPassword">matching password</label>
          <input
            id="matchingPassword"
            {...register("matchingPassword", {
              required: true,
              validate: (val: string) => {
                if (watch("password") !== val) {
                  return "passwords don't match";
                }
              },
            })}
            type="password"
          />
          <div className="registration-form-error">
            {errors.matchingPassword?.type === "required"
              ? "matching password is required"
              : errors.matchingPassword?.type === "validate"
              ? errors.matchingPassword.message
              : ""}
          </div>
        </section>

        <input type="submit" value="register" className="login-btn-login" />
      </form>
    </div>
  );
};

export default ClientRegistrationForm;
