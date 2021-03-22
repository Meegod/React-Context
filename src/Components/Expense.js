import React,{useContext,useState} from 'react';
import {AppContext} from '../Context/AppContext';



function Expense() {
const{expenses}=useContext(AppContext);

const totalExpenses=expenses.reduce((total,item)=>{
    return(total = total + item.cost);

},0);


  return (
    <div className="alert alert-primary">
    <span>Spent so far :#{totalExpenses}</span>
      

    </div>
  );
}

export default Expense;
