import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
  // let expensesContent = <p>No expenses found</p>

  // if (filteredExpenses.length > 0) {
  //   expensesContent = f

  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }
  return (
    <ul className="expenses-list">
      {props.item.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
    </ul>
  )
}

export default ExpensesList
