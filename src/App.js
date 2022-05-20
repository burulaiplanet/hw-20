import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import React from 'react';
import './App.css';
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
 class App extends React.Component{
  
constructor(){
  super()
  this.state={
    array:expenses,
  }
}
addDataToArray = (objectWithId)=>{
  this.setState({array : expenses.concat(objectWithId)})
}
   render(){
  
    return (
      <div className="App">
        <NewExpense onAddDataToArray={this.addDataToArray} />
        <Expenses expenses={this.state.array} />
      </div>
    );
   }
 }

export default App;
