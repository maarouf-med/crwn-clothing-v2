import SignIn from "../sign-in/sign-in-component";
import SignUp from "../sign-up/sign-up-component";

import "./authentication-styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <div className="container">
        <div className="columns">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
