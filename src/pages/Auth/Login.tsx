import useAuth from "hooks/useAuth";

const LoginPage = () => {
  const { login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      <button onClick={() => login("", "")}>login</button>
      <button onClick={() => logout()}>logout</button>
      <div>{isAuthenticated ? "ok" : ":("}</div>
    </div>
  );
};

export default LoginPage;
