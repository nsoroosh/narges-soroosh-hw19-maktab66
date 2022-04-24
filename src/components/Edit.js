import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, MenuItem, NativeSelect, InputLabel , Button} from "@mui/material";
export default function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-multiline-flexible"
          label="title"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="standard"
        />
        <br></br>
        <FormControl sx={{ minWidth: "25ch" }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            skills
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>web design</option>
            <option value={20}>front-end </option>
            <option value={30}>back-end</option>
          </NativeSelect>
        </FormControl>
        <br></br>
        <TextField
          id="standard-multiline-static"
          label="description"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </div>
      <Button variant="text">Edit</Button>
    </Box>
  );
}
