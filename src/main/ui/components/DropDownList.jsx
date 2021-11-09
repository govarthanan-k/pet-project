import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDownList(props) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "100%" }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={props.value}
          onChange={props.handleChange}
          autoWidth={false}
          label="Status"
        >
          {props.items.map((item, index) => (
            <MenuItem sx={{ width: "100%" }} value={item} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
