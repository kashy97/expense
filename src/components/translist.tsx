import React,{useContext} from 'react';
import { AppContext } from '../context/Context';

export const TList = () => {
  const date=Date.now();
  const {expense} = useContext(AppContext);
  return (
    <div className="Box3">
        <ul>
          {
            expense.map((expense)=>(
              <li>
                <div>
                  {date.toISOString()}-{expense}
                </div> 
              </li>
            ))
          }
        </ul>
    </div>
  );
}


