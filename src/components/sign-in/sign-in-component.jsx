import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithFacebookPopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-utils";

import FormInput from "../form-input/form-input-component";
import FormButton from "../form-button/form-button-component";

import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPassworValidation] = useState(false);

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const { user } = await signInWithFacebookPopup();
      createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setEmailValidation(false);
      setPassworValidation(false);

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setEmailValidation(!emailValidation);
      } else if (error.code === "auth/wrong-password") {
        setPassworValidation(!passwordValidation);
      }
    }
  };

  return (
    <div className="column" style={{ width: "380px" }}>
      <h2> I already aave an account </h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          validation={emailValidation}
        />

        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          validation={passwordValidation}
        />

        <FormButton type="submit" color="is-dark">
          Sing In
        </FormButton>
      </form>

      <FormButton type="buttom" color="is-danger" onClick={signInWithGoogle}>
        Sign In With Google
      </FormButton>

      <FormButton type="buttom" color="is-link" onClick={signInWithFacebook}>
        Sign In With facebook
      </FormButton>
    </div>
  );
};

export default SignIn;
