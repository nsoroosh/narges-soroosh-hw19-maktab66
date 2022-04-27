
import { createContext, useState } from "react";





export const ReferenceDataContext = createContext();
export const ShowContext = createContext();
export const Data = createContext()

export const ReferenceDataContextProvider = ({ children }) => {
  const [unicornTypes, setUnicornTypes] = useState(false);
  const [show, setshow] = useState(false);
  const [data , setdata] = useState([
    {titles:"html" , skills:"web design" , description:"hchvchakjchqkhfkcjkcheivuqgeifug"},
    {titles:"css" , skills:"web design" , description:"hchvchakjchqkhfkcjkcheivuqgeifug"},
    {titles:"react" , skills:"front-end" , description:"hchvchakjchqkhfkcjkcheivuqgeifug"},
    {titles:"javascript" , skills:" front-end" , description:"hchvchakjchqkhfkcjkcheivuqgeifug"},
    {titles:"node" , skills:"back-end" , description:"hchvchakjchqkhfkcjkcheivuqgeifug"},
    {titles:"mongodb" , skills:"back-end" , description:"hchvchakjchqkhfkcjkcheivuqgeifug"},


  ])
  console.log(data)
  return (

    <ReferenceDataContext.Provider value={{ unicornTypes, setUnicornTypes }}>
    <ShowContext.Provider value={{show,setshow}}>
      <Data.Provider value={{data , setdata}}>
      {children}
      </Data.Provider>
      </ShowContext.Provider>
    </ReferenceDataContext.Provider>

  );

};


// export { ReferenceDataContext, ReferenceDataContextProvider };