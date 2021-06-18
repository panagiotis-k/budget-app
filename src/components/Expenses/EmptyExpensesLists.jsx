import './EmptyExpensesList.css';

const EmptyExpensesList = (props) => {
	return (
		<div>
			<p className="empty_message">Found no expenses</p>
		</div>
	);
};

export default EmptyExpensesList;
