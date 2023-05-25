import { isTokenValid } from "@Utils/TokenUtils";

const LoginSwitch = ({ ok, bad }: any) => {
  if (isTokenValid()) {
    return ok;
  }
  return bad;
};

export default LoginSwitch;
