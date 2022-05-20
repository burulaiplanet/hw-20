import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
import React from 'react';

class  Expenses extends React.Component{
constructor(){
    super()
    this.state={
        filteredYear:'2022',
    }
}
filterChangeHandler = (selectedYear) => {
    this.setState({filteredYear:selectedYear});
  };

 
     render(){
        const filteredExpenses = this.props.expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === this.state.filteredYear;
          });
 return (
    <Card className="expenses">
      <ExpensesFilter selected={this.state.filteredYear} onChangeFilter={this.filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
     }
}

export default Expenses;