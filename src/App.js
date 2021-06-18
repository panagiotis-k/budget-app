import './App.css';
import * as React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { expenses as DUMMY_EXPENSES } from './Expenses';

const App = () => {
	const { useState } = React;

	const [ expenses, setExpenses ] = useState(DUMMY_EXPENSES);

	const addExpense = (expense) => {
		setExpenses((prevExpenses) => {
			return [ expense, ...prevExpenses ];
		});
	};

	return (
		<div className="App">
			<NewExpense onAddExpenseData={addExpense} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
