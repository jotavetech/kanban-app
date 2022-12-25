import { Link } from "react-router-dom";

import Button from "../../components/Utils/Button";
import Input from "../../components/Utils/Input";

import { StyledRegister } from "./styles";

function Login() {
  return (
    <StyledRegister>
      <div className="head">
        <h1>Register</h1>
        <p>Register your new account</p>
      </div>

      <div>
        <form>
          <Input
            placeholder="Andreya123"
            type="text"
            id="usernameInput"
            label="Username"
          />
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
            text="Register"
            variant={true}
            type="submit"
          />
          <Button
            onClick={() => console.log("oi")}
            height="50px"
            width="100%"
            text="Register With Google"
            variant={false}
          />
          <Link to="/login">Login on your account.</Link>
        </form>
      </div>
    </StyledRegister>
  );
}

export default Login;
