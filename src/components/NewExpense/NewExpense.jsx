import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const { onAddExpenseData } = props;
	const [ expenseBtnClicked, setExpenseBtnClicked ] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		setExpenseBtnClicked((prevButton) => {
			return false;
		});

		onAddExpenseData(expenseData);
	};

	const expenseButtonClicked = () => {
		setExpenseBtnClicked(true);
	};

	const cancelButtonClicked = () => {
		setExpenseBtnClicked(false);
	};

	return (
		<div className="new-expense">
			{!expenseBtnClicked && <button onClick={expenseButtonClicked}>Add New Expense</button>}
			{expenseBtnClicked && (
				<ExpenseForm onCancelBtnClicked={cancelButtonClicked} onSaveExpenseData={saveExpenseDataHandler} />
			)}
		</div>
	);
};

export default NewExpense;
