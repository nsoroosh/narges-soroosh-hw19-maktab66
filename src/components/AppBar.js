import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Container,
  Modal,
  TextField,
  FormControl,
  NativeSelect,
  InputLabel,
} from "@mui/material";
import { textAlign } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { orange, purple } from "@mui/material/colors";
import { Data } from "../context/ContextFile";
import { useContext } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  borderRadius: "50%",
  height: 60,
}));

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openmodal, setOpenmodal] = React.useState(false);
  const handleOpenmodal = () => setOpenmodal(true);
  const handleClosemodal = () => setOpenmodal(false);
  const [value, setValue] = React.useState();
  const {data , setdata } =  useContext(Data)
 

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleInput = evt => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setValue({...value, [name]: newValue });
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setdata([...data,value])
    setValue()
  }
  console.log(value)
  console.log(data)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>login</MenuItem>
            <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          </Menu>
          <Container sx={{ flexGrow: 1, textAlign: "center" }}>
            <Typography variant="h7" component="h6">
              my skills within
            </Typography>
            <Typography variant="h4" component="h6">
              Material UI
            </Typography>
          </Container>
          <ColorButton onClick={handleOpenmodal} variant="contained">
            <AddIcon />
          </ColorButton>
        </Toolbar>
      </AppBar>
      <Modal
        open={openmodal}
        onClose={handleClosemodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create new skills
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please fill out the form below.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField id="standard-basic" name="title" label="title" variant="standard" onChange={handleInput} />
              <br></br>
              <FormControl sx={{ minWidth: "25ch" }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  skills
                </InputLabel>
                <NativeSelect
                  defaultValue={"web"}
                  inputProps={{
                    name: "skills",
                    id: "uncontrolled-native",
                    
                  }}
                  
                  onChange={handleInput}
                >
                  <option value={"web design"}>web design</option>
                  <option value={"front-end"}>front-end </option>
                  <option value={"back-end"}>back-end</option>
                </NativeSelect>
              </FormControl>
              <br></br>
              <TextField
                id="standard-textarea"
                label="description"
                placeholder=""
                multiline
                rows={4}
                variant="standard"
                onChange={handleInput}
                name="description"
              />
            </div>
            <Button type="submit"
            variant="contained">create</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
