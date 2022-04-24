

import React from 'react'
import { useState } from 'react'
export const Context = React.createContext();
export default function ContextFile({children}) {
    const [context, setContext] = useState(false)
  return (
    <>
     <Context.Provider value={[context, setContext]}>
         {children}
     </Context.Provider>
    </>
  )
}
