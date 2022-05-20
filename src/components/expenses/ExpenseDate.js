import React from 'react'
import './ExpenseDate.css'
class ExpenseDate extends React.Component {
	render() {
		let month = this.props.date.toLocaleString('en-US', { month: 'long' })
		let day = this.props.date.toLocaleString('en-US', { day: '2-digit' })
		let year = this.props.date.getFullYear()
		return (
			<div className='expense-date'>
				<div className='expense-date__month'>{month}</div>
				<div className='expense-date__day'>{day}</div>
				<div className='expense-date__year'>{year}</div>
			</div>
		)
	}
}

export default ExpenseDate
