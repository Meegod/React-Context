import React,{useContext,useState} from 'react';
import {AppContext} from '../Context/AppContext';
import Editform from './Editform';
import  './Editform.css';




function Budget() {
	//we are tryna get vaue partaning the budget in the use context
const {budget}=useContext(AppContext);
//console.log(typeof budget);
const[initialBudget,setInitialBudget]=useState(budget);
const[cost,setCost]=useState('');

 //This state is for show form when the edit button is clicked
 //By default it is set to false
 const[showResults,setShowResults]=useState(false);

const Editbtn=()=>{
   //console.log('you clicked to edit me');
   setShowResults(true);
   //setInitialBudget('');
  //  setTimeout(() => {
  // //console.log('Hello, World!')
  //    setShowResults(false);

//}, 9000);


}
const onSubmit=()=>{


}



  return (

   <div className="Budget">

    <div className="alert alert-secondary">
    {showResults ? <Editform/>:<span>Budget:#{budget}</span>}
    {/*A bug for now*/}
   <button className="btn btn-primary ml-2 mb-2 mt-4 btn-sm display-none" type="submit"
   onClick={Editbtn}>Edit Budget</button>
   
 </div>

    

</div>

      

   
  );
}

export default Budget;
