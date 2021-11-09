import React from 'react';

import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
  /*
  // use this (conditional) approach when only a part of JSX snippet changes

  // store jsx content in a variable
  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        // should always use key when mapping out lists of items
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  */
  
  // there are 2 conditional returns in this case where the component returns different JSX codes?
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return <ul className="expenses-list">
    {/* use this (conditional) approach when the component's return changes emtirely */}
    {props.items.map((expense) => (
      <ExpenseItem
        // should always use key when mapping out lists of items
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};

export default ExpenseList;