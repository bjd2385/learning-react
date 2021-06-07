import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  // Handle a variable-length list of expenses passed along as properties.
  const expenseList = props.expenses.map(expense =>
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  );

  return (
    <Card className="expenses">
      {expenseList}
    </Card>
  );
}

export default Expenses;