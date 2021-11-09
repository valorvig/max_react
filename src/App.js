// import ExpenseItem from "./components/ExpenseItem"; // looking for this file
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";

// initialization
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  /*
  // imperative declaration - cumbersome & complex
  const para = document.getElementById('p');
  para.textContent = 'This is also visible2!!';
  document.getElementById('root').append(para);
  */

  /*
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  */

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('In App.js');
    // console.log(expense);

    // setExpenses([expense, ...expenses]);
    // use a function inside as a conventional approach and ouput the data dynamically this way
    setExpenses((prevExpenses) => {
      // put the new expense above the previous ones
      return [expense, ...prevExpenses];
    });
  };

  /*
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!");
    React.createElement(Expenses, {items: expenses})
  );
  */

  return (
    // return can only have one element, so wrap all with the dic tag
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
