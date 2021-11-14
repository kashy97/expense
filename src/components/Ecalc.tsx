import React, {useState,useContext} from 'react';
import { AppContext } from '../context/Context';

const Calc = () => {
  const {expense,setExpense} = useContext(AppContext);
  const[amount,setAmount]=useState(0);
  const[total,setTotal]=useState(0);
  /*
  const addTotal =({amount}) => {
    const newTotal=[...total, { amount }];
    setTotal(newTotal);
  } 
  const removeTotal =(index: number) => {
    const newTotal=[...total];
    newTotal.splice(index,1);
    setTotal(newTotal);
  } */
  const addTotal = (amount:any) => {
      if (amount > 0) {
        setExpense([...expense, amount])
        setTotal(total+parseFloat(amount))
        setAmount(0)
      } else {
        console.log('Invalid expense name or the amount')
      }
    }
  const removeTotal = (amount:any) => {
    if (amount > 0) {
      setExpense([...expense, amount])
      setTotal(total-parseFloat(amount))
      setAmount(0)
    } else {
      console.log('Invalid expense name or the amount')
    }
  }
  
  return (
    <div className="Box1">
      <div className="balance">Balance: {total}</div>
      <input type="number" value={amount} onChange={(e: any) => setAmount(e.target.value)} placeholder="Enter the amount" />
      <div className="button">
        <button onClick={() => addTotal(amount)}>Add</button>
        <button onClick={() => removeTotal(amount)}>Remove</button>
      </div>
    </div>
  );
}

export default Calc;
