import { useState } from "react";
import {
  signInWithGoogle,
  signInWithFacebook,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase";

import "./sign-in-form.styles.scss";

import FormInput from "../Form-input/Form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSingInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSingInWithFacebook = async () => {
    try {
      await signInWithFacebook();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignInWithEmailAndPassword = async (e) => {
    e.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for this email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.error(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>i already have an account</h2>
      <p>sing in with your email and password</p>

      <form onSubmit={handleSignInWithEmailAndPassword}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
        />
        <Button type="submit">Sign In</Button>
      </form>

      <div className="buttons-container">
        <Button
          type="button"
          btnType={BUTTON_TYPE_CLASSES.google}
          onClick={handleSingInWithGoogle}
        >
          Google Sing In{" "}
          <i
            style={{ paddingLeft: "10px" }}
            className="fa-brands fa-google"
          ></i>
        </Button>
        <Button
          type="button"
          btnType={BUTTON_TYPE_CLASSES.facebook}
          onClick={handleSingInWithFacebook}
        >
          Facebook Sign In{" "}
          <i
            style={{ paddingLeft: "10px" }}
            className="fa-brands fa-facebook-f"
          ></i>
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;
