import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (yearData) => {
    setFilteredYear(yearData)
  }

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear
  })

  // let expensesContent = <p>No expenses found</p>

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((item) => (
  //     <ExpenseItem
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //       key={item.id}
  //     />
  //   ))
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList item={filteredExpenses} />

      {/* {expensesContent} */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        ))
      )} */}
    </Card>
  )
}

export default Expenses
