import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Utils/Button";
import Input from "../../components/Utils/Input";

import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../../config/Firebase";

import { StyledRegister } from "./styles";

import { emailValidation } from "../../utils/regexValidation";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (user) {
      setLoading(false);
      return navigate("/");
    }
    setLoading(false);
  }, [user]);

  const [wrongCredentials, setWrongCredentials] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateFields = () => {
    let hasErrors = false;

    if (!emailValidation(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email" }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Invalid password",
      }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }

    return !hasErrors;
  };

  const createPrimitiveUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateFields()) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userRes) => {
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          setLoading(false);
          setWrongCredentials("Credentials not allowed or already exists");
        });
    }
  };

  const createWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userRes) => console.log(userRes))
      .catch((err) => console.log(err));
  };

  if (loading) return null;

  return (
    <StyledRegister className="animeBottom">
      <div className="head">
        <h1>Register</h1>
        <p>Register your new account</p>
      </div>

      <div>
        <form onSubmit={createPrimitiveUser}>
          <Input
            placeholder="andreya@email.com"
            type="email"
            id="emailInput"
            label="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            error={errors.email}
          />
          <Input
            placeholder="a strong password"
            type="password"
            id="passwordInput"
            label="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            error={errors.password}
          />
          <Button
            height="50px"
            width="100%"
            text="Register"
            variant={true}
            type="submit"
          />
          <Button
            onClick={createWithGoogle}
            height="50px"
            width="100%"
            text="Register With Google"
            variant={false}
          />
          {wrongCredentials && <p className="errorMsg">{wrongCredentials}</p>}
          <Link to="/login">Login on your account.</Link>
        </form>
      </div>
    </StyledRegister>
  );
}

export default Register;
