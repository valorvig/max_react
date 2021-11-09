import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import "./Expenses.css";

const Expenses = (props) => {
  // Expenses component manages this filters
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  // restrict how many items are going to be displayed by using the filter
  const filteredExpenses = props.items.filter((expense) => {
    // filter the year that matches our stored filteredYear (in string)
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* Expenses component controld this ExpensesFulter */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* name React components start with uppercase character */}
        {/* pass key-value pairs in the props object */}
        {/*
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          />
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          />
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          />
        */}
        
        {/* short-hand (1) && (2) - if (1) is true, proceed to (2) */}
        {/*
          {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 && 
          // {props.items.map((expense) => (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              // should always use key when mapping out lists of items
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        */}

        {/* use this (conditional) approach when only a part of JSX snippet changes */}
        {/* {expensesContent} */}

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );

};

export default Expenses;
