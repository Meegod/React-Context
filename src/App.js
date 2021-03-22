import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Budget from './Components/Budget';
import  Remaining from './Components/Remaining';
import  Expense from './Components/Expense';
import  ExpenseList from './Components/ExpenseList';
import  AddExpense from './Components/AddExpense';
import  {AppProvider} from './Context/AppContext';

 // import  Remaining  from './Components/ Remaining';

function App() {
  return (
    <AppProvider>
      <div className="container">
    <h1 className="mt-3">
    My Budget Planner</h1>
    <div className="row mt-3">
     <div className="col-sm">
  <Budget/>
     </div>
     <div className="col-sm">
     <Remaining/>
     </div>
     <div className="col-sm">
     <Expense/>
     </div>
    </div>
   <h3 className="mt-3">Expenses</h3>
<div className="row mt-3">
  <div className="col-sm">
   <ExpenseList/>
  </div>
</div>
<h3 className='mt-3'>Add Expense</h3>
<div className="row">
   <div className="mt-3">
<div className="col-sm">
<AddExpense/>

</div>

   </div>
</div>


    </div>

    </AppProvider>

    
  );
}

export default App;

