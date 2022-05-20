import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

class NewExpense extends React.Component{

    AddData = (data) => {
        const objectWithId = {
          ...data,
          id: Math.random().toString(),
        };
    
        this.props.onAddDataToArray(objectWithId)
      };
    render(){
        return (
            <div className="new-expense">
              <ExpenseForm onAddData={this.AddData} />
            </div>
          );
    }
}

export default NewExpense;