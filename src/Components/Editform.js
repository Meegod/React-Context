
import React,{useContext,useState} from 'react';
import {AppContext} from '../Context/AppContext';
import  './Editform.css';
import { v4 as uuidv4 } from 'uuid';





function Editform(){


const {budget,dispatch}=useContext(AppContext);
const[initialBudget,setInitialBudget]=useState(budget);
const[newBudget,setnewBudget]=useState('');


const onSubmit=(event)=>{
event.preventDefault();
   //console.log(event.target.value);
}
const UpdateBtn=(event)=>{

	console.log(newBudget);
	setInitialBudget(newBudget);
	console.log(initialBudget);
	console.log(typeof setInitialBudget);

	// const bupdate={
 //     	id:uuidv4(),
 //     	budget:newBudget,
 //     	//cost:parseInt(cost),
 //     };

 dispatch({
    type:'EDIT_EXPENSE',
    payload:initialBudget,

   });






}


	return(
<div className="Editform">

<form onSubmit={onSubmit}>
  <div className="row">
   
   <div className='col-sm'>
    <label for="cost">Old Budget</label>
   <input required='required'
   type='text' className='form-control'
 value={initialBudget}
   ></input>
   <label for="cost">Enter  new Budget </label>
   <input required='required'
   type='text' className='form-control'
 value={newBudget}
onChange={(event) => setnewBudget(event.target.value)}
   ></input>
   <button className="btn btn-primary mt-4 ml-2 btn-sm "
   onClick={UpdateBtn} 
   >Update</button>
   </div>
</div>
  
  </form>


</div>



		)
}

export default Editform;




 