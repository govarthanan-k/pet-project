import React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

function FormButton(props) {
  return (
    <FormControl sx={{ m: 1, minWidth: "100%" }}>
      <Button
        type={props.buttonType}
        fullWidth={true}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={props.disabled}
      >
        {props.label}
      </Button>
    </FormControl>
  );
}

export default FormButton;
