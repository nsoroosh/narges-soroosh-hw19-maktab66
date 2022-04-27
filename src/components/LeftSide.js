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
import { Data, ReferenceDataContext, ShowContext } from "../context/ContextFile";

export default function BasicList() {
  const { unicornTypes, setUnicornTypes } = useContext(ReferenceDataContext)
  const {show,setshow} = useContext(ShowContext)
  const {data , setdata } =  useContext(Data)
const  handleeditButton = ()=>{
      setUnicornTypes(true)
      setshow(false)
}
const handleshowButton = ()=>{
  setshow (true)
  setUnicornTypes(false)
}
const handledeleteButton = (e) => {
  
 };
 const filter = data.filter(res=>res.skills=="web design")
 
console.log(filter)
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      
      <Typography variant="h5" component="h2">
       WebDesign
      </Typography>
      <nav aria-label="main mailbox folders">
        
        <List>
        {filter.map(res=>{
        <ListItem  disablePadding>
        <ListItemButton >
          <ListItemText onClick={handleshowButton} primary={res.title} />
          <ListItemIcon>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
             onClick={handleeditButton}
            >
              <ModeEditIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={handledeleteButton}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      })}
          <ListItem  disablePadding>
            <ListItemButton >
              <ListItemText onClick={handleshowButton} primary="html" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                 onClick={handleeditButton}
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={handledeleteButton}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText onClick={handleshowButton} primary="css" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={handleeditButton}
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
              <ListItemText onClick={handleshowButton} primary="react" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                 onClick={handleeditButton}
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
              <ListItemText onClick={handleshowButton} primary="javascript" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={handleeditButton}
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
              <ListItemText onClick={handleshowButton} primary="node" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                 onClick={handleeditButton}
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
              <ListItemText onClick={handleshowButton} primary="mongodb" />
              <ListItemIcon>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={handleeditButton}
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
