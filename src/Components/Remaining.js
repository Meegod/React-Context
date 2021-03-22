import ExpenseItem from './ExpenseItem';
import React,{useContext} from 'react';
import {AppContext} from '../Context/AppContext';



function Remaining() {
	   const{expenses,budget}=useContext(AppContext);
	   //console.log(budget+expenses);

	   const totalExpenses=expenses.reduce((total,item)=>{
           return(total=total + item.cost);
	   },0);
	   //console.log(typeof totalExpenses);
	   //console.log(typeof budget);

	 const alertType=totalExpenses > budget ? 'alert-danger':'alert-success';
	 //parseInt

   //const Remaining= budget - totalExpenses;
   //console.log(Remaining);

   //const RenderRemaining=totalExpenses > budget? totalExpenses - budget :budget -totalExpenses;







  return (
    <div className={`alert ${alertType}`}>
     <span>Remaining: #{budget -  totalExpenses}</span>

    </div>
  );
}

export default Remaining;
