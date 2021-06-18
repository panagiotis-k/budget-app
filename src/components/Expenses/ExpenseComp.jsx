import './ExpenseComp.css';
import DateComp from './DateComp';
import Card from '../UI/Card';

const ExpenseComp = (props) => {
	return (
		<Card className="expense-item">
			<DateComp {...props} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount} </div>
			</div>
		</Card>
	);
};

export default ExpenseComp;
