import { isTokenValid } from "@Utils/TokenUtils";
import { Navigate } from "react-router-dom";

const LoginGuard = ({ children, ...rest }: any) => {
  if (!isTokenValid()) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default LoginGuard;
