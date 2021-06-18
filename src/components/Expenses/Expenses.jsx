import ExpenseComp from './ExpenseComp';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import EmptyExpensesList from './EmptyExpensesLists';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [ filteredYear, setFilteredYear ] = useState('2020');
	const { items } = props;

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = items.filter((expense) => {
		if (filteredYear === 'ALL') {
			return true;
		}
		return filteredYear === expense.date.getFullYear().toString();
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter onChangeFilter={filterChangeHandler} defaultFilteredYear={filteredYear} />
				<ExpensesChart expenses={filteredExpenses} />
				{filteredExpenses.length === 0 && <EmptyExpensesList />}
				{filteredExpenses.length > 0 &&
					filteredExpenses.map((expense) => <ExpenseComp key={expense.id} {...expense} />)}
			</Card>
		</div>
	);
};

export default Expenses;
