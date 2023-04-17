import "./button.styles.jsx";

import {
  BaseButton,
  GoogleSignInButton,
  FacebookSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  facebook: "facebook-sign-in",
  incerted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.facebook]: FacebookSignInButton,
    [BUTTON_TYPE_CLASSES.incerted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, btnType, ...otherProps }) => {
  const CostomButton = getButton(btnType);
  return <CostomButton {...otherProps}>{children}</CostomButton>;
};

export default Button;
