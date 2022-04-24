import  React ,{ useContext } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
// import Context from "@mui/base/TabsUnstyled/TabsContext";
import Context from "./BottomSection";
export default function BasicList() {
    // const {context, setContext} = useContext(Context)
// const  handleeditButton = ()=>{
//       setContext(true)
// }
// console.log(context)
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Typography variant="h5" component="h2">
       WebDesign
      </Typography>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="html" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                //  onClick={handleeditButton()}
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="css" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Typography variant="h5" component="h2">
       front-end
      </Typography>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="react" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                //  onClick={handleeditButton()}
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="javascript" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Typography variant="h5" component="h2">
       back-end
      </Typography>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="node" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                //  onClick={handleeditButton()}
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="mongodb" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
