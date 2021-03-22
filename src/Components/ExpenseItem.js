import React,{useContext} from 'react';
import {AppContext} from '../Context/AppContext';
import {TiDelete} from 'react-icons/ti';

   

function ExpenseItem({name,cost,id}) {


	const{dispatch}=useContext(AppContext);

   const handleDeleteExpense=()=>{
   	//console.log('i clicked');
       dispatch({
          type:'DELETE_EXPENSE',
          payload:id,
});

   };

  return (
  	<div className="expense">
     <li className="list-group-item d-flex justify-content-between align-items-center">
{name}
<div>
	<span className='badge badge-primary badge-pill mr-3'>
		#{cost}
	</span>
	<TiDelete sie='1.5em'
   onClick={handleDeleteExpense}
	></TiDelete>

</div>
     	
</li>
</div>









  );
}

export default ExpenseItem;
