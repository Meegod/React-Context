import ExpenseItem from './ExpenseItem';
import React,{useContext} from 'react';
import {AppContext} from '../Context/AppContext';



function ExpenseList() {
 const {expenses}=useContext(AppContext);


 //This hardcoded item now comes directly from contect

 //    const expenses=[
 //   {is:1231232,name:"shopping", cost:50},
 //   {is:1231232,name:"Holiday", cost:300},
 //   {is:1231232,name:"Transportation", cost:50},
 //   {is:1231232,name:"Fuel", cost:40},
 //   {is:1231232,name:"Child Care", cost:50},
 // ];


  return (
   <ul className="list-group">
   {
expenses.map((expens,id)=>(
  <ExpenseItem 
 key={id}
  id={expens.id}
   name={expens.name}
   cost={expens.cost}
/>
	))}


   </ul>



  );
}

export default ExpenseList;
