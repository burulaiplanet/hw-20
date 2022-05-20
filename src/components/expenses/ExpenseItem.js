import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


class ExpenseItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:this.props.text
        }
    }

   clickHandler = () => {
        this.state('Update!');
      };
    
     render(){
        return (
            <Card className="expense-item">
              <ExpenseDate date={this.props.date} />
              <div className="expense-item__description">
                <h2>{this.state.title}</h2>
                <div className="expense-item__price">{this.props.price}</div>
              </div>
              <button onClick={this.clickHandler}>Change Title</button>
            </Card>
          );
     }
}

export default ExpenseItem;