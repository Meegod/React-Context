import {createContext,useReducer} from 'react';

//The appreducer reacts to the program depending on the 
//action type

const  AppReducer=(state,action)=>{
  switch(action.type){
     case 'ADD_EXPENSE':
       return{
          ...state,
          expenses:[...state.expenses,action.payload],

       };
      case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
			case 'EDIT_EXPENSE':
			return {
				...state,
				budget: action.payload,
			};

       default:
         return state;
  }
};


const initialState={
   budget:9000,
   expenses:[
   {id:12, name:'shopping', cost:40},
   {id:13, name:'holiday',cost:40},
   {id:14, name:'Thinking',cost:100},
],
};

export const AppContext=createContext();

export const AppProvider=(props)=>{
  const[state,dispatch]=useReducer(AppReducer,initialState);

  return(<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);

};