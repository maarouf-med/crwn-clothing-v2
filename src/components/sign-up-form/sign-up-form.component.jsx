import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";
import { UserContext } from "../../contexts/user.context";

import "./sign-up-form.styles.scss";

import FormInput from "../Form-input/Form-input.component";
import Button from "../Button/Button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setDisplayName } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      setDisplayName(displayName);
      await createAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>don't have an account</h2>
      <p>sign up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
          label="Display Name"
        />
        <FormInput
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          label="Password"
        />
        <FormInput
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          label="Confirm Password"
        />

        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
