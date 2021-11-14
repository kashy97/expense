import React, { useState,createContext } from 'react';
//import AppContext from '.';

export const AppContext = createContext({});
const AppProvider = ( props:any ) => {
  const [expense, setExpense] = useState([] as any)

  return (
    <AppContext.Provider value={ {expense: [expense,setExpense],} }> 
      {props.children}
    </AppContext.Provider>
  );
}
export default AppProvider;