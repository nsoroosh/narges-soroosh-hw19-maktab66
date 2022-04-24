import React, { useContext } from "react";
import { Context } from "./BottomSection";
import Show from "./Show";
import Edit from "./Edit";
import { Box } from "@mui/material";
function RightSide() {
  const { context, setContext } = useContext(Context);
  if (context) {
    return (
      <Box sx={{minheight: 1000}}>
      <div>
        <h1>WELCOME!</h1>
        <span>Please select an exercise from the list on the left side</span>
      </div>
      </Box>
    );
  }
  return <div>{!context ? <Edit /> : <Show />}</div>;
}

export default RightSide;
