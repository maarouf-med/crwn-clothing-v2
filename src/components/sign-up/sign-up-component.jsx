import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utils";

import FormInput from "../form-input/form-input-component";
import FormButton from "../form-button/form-button-component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="column">
      <h2>I do not have an account</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder="Name"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          type="text"
          label="Name"
        />

        <FormInput
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
          type="email"
          label="Email"
        />

        <FormInput
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
          type="password"
          label="Password"
        />
        <FormInput
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          type="password"
          label="Password"
        />

        <FormButton type="submit" color="is-dark">
          Sing Up
        </FormButton>
      </form>
    </div>
  );
};

export default SignUp;
