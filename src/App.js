
import AddExpense from './addExpense'
import ExpenseList from './expenseList'
import './App.css';
import { useState } from 'react';

function App() {

  const [expense, setExpense] = useState([])


  return (
    <div className="App">
      <header>Money Tracking App</header>
      <AddExpense expense={expense} setExpense={setExpense} />
      {expense.length>0 ? (
        <ExpenseList expense={expense} setExpense={setExpense}/>
      ): (<></>)}
    </div>
  );
}

export default App;
