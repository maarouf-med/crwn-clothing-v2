const FormButton = ({ children, color, type, ...otherPops }) => {
  return (
    <div>
      <button
        style={{ width: "350px", marginBottom: "15px" }}
        type={type}
        className={`button ${color} `}
        {...otherPops}
      >
        {children}
      </button>
    </div>
  );
};

export default FormButton;
