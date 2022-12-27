import { Link } from "react-router-dom";

import Button from "../../components/Utils/Button";
import Input from "../../components/Utils/Input";

import { StyledLogin } from "./styles";

function Login() {
  return (
    <StyledLogin className="animeBottom">
      <div className="head">
        <h1>Login</h1>
        <p>Enter your account</p>
      </div>

      <div>
        <form>
          <Input
            placeholder="andreya@email.com"
            type="email"
            id="emailInput"
            label="Email"
          />
          <Input
            placeholder="a strong password"
            type="password"
            id="passwordInput"
            label="Password"
          />
          <Button
            onClick={() => console.log("oi")}
            height="50px"
            width="100%"
            text="Login"
            variant={true}
            type="submit"
          />
          <Button
            onClick={() => console.log("oi")}
            height="50px"
            width="100%"
            text="Login With Google"
            variant={false}
          />
          <Link to="/register">Create an account.</Link>
        </form>
      </div>
    </StyledLogin>
  );
}

export default Login;
