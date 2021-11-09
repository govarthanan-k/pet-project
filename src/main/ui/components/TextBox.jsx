import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function TextBox(props) {
  let [error, setError] = useState(false);

  const updateAndValidate = (e) => {
    props.handleChange(e);
    if (props.validate) setError(!props.validate(e.target.value));
    else setError(false);
  };

  return (
    <TextField
      label={props.label}
      variant={props.variant ?? "outlined"}
      value={props.value}
      onChange={updateAndValidate}
      onBlur={updateAndValidate}
      required={props.required}
      error={error}
      helperText={error ? props.errorText : ""}
      fullWidth
    />
  );
}
