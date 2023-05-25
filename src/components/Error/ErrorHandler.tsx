import { Navigate, useRouteError } from "react-router-dom";

const ErrorHandler = () => {
  const error = useRouteError() as any;

  if (error.response.status === 401) {
    return <Navigate to={"/login"} />;
  }

  return <div>error {error.response.status}</div>;
};

export default ErrorHandler;
