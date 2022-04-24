import { Grid, Box ,Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import React , {useState} from "react";
import Footer from "./Footer";
import BasicList from "./LeftSide";
import RightSide from "./RightSide";

export const Context = React.createContext();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height:600
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
 
}));

function ButtonSection() {
  const [context, setContext] = useState(false)
  return (
    <div>
      <Context.Provider value={[context, setContext]}>
      <Box sx={{ flexGrow: 1 }} >
        <Grid container>
          <Grid item xs={6} >
            <Item >
                  <BasicList/>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <RightSide/>
            </Item>
          </Grid>
          <Grid item xs={12}>
          <Item2 >
            <Footer/>
          </Item2>
          </Grid>
        </Grid>
      </Box>
      </Context.Provider>
    </div>
  );
}

export default ButtonSection;
