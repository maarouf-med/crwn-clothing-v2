import * as React from "react";

import TextField from "@mui/material/TextField";

const FormInput = ({ label, validation, ...otherProps }) => {
  return (
    <div className="block">
      <TextField
        required
        id="standard-basic"
        label={label}
        variant="standard"
        error={validation && "true"}
        {...otherProps}
        style={{ width: "350px", marginLeft: "0", marginBottom: "10px" }}
      />
    </div>
  );
};

export default FormInput;

// ;
