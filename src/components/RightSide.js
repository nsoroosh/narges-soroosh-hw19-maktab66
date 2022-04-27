import React, { useContext } from "react";
import { Context } from "./BottomSection";
import Show from "./Show";
import Edit from "./Edit";
import { Box } from "@mui/material";
import { ReferenceDataContext, ShowContext } from "../context/ContextFile";
export default function RightSide() {
  const { unicornTypes, setUnicornTypes } = useContext(ReferenceDataContext)
  const {show,setshow} = useContext(ShowContext)
   
  
  switch (true) {
    case unicornTypes:
      return <Edit/>
      break;
      case show:
        return <Show/>
        break;
    default:
      return (
            <Box sx={{minheight: 1000}}>
            <div>
              <h1>WELCOME!</h1>
              <span>Please select an exercise from the list on the left side</span>
            </div>
            </Box>
          );
      break;
  }
}

