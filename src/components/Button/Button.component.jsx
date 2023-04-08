import "./button.styles.scss";

const Button = ({ children, btnType, ...otherProps }) => {
  return (
    <button className={`button-container ${btnType}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
