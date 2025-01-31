import Card from "../components/Card/Card";
import Input from "../components/FormElements/Input";
import Button from "../components/FormElements/Button";
import { useForm } from "../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validators";
import classes from "./Default.module.css";
import { useContext } from "react";
import { AuthContext } from "../shared/context/auth-context";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    authCtx.login();

    navigate("/");
  };

  return (
    <div className={classes['auth-container']}>
      <Card className={classes.authentication}>
        <h2>Login</h2>
        <hr />

        <form onSubmit={authSubmitHandler}>
          <Input
            id="email"
            type="email"
            element="input"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
            errorText="Please enter a valid email"
          />
          <Input
            id="password"
            type="password"
            element="input"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            onInput={inputHandler}
            errorText="Please enter a valid password"
          />
          <Button type="submit" disabled={!formState.isValid}>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}
