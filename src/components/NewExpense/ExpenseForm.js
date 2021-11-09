import React, { useState } from "react";
import "./ExpenseForm.css";
// import ExpenseDate from './../Expenses/ExpenseDate';

// no props since there is no data passed
const ExpenseForm = (props) => {
  // multiple indepedent states (more preferable than the object update)
  const [enteredTitle, setEnteredTitle] = useState(""); // no inital value for the first time
  const [enteredAmount, setEnteredAmount] = useState(""); // use string because it'll always be string even for a number
  const [enteredDate, setEnteredDate] = useState("");

  // get the value from the event generated automatically, and let's name it a handler
  const titleChangeHandler = (event) => {
    // console.log(event.target.value); // event is an obj
    setEnteredTitle(event.target.value); // the input we read always be the string
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // passing an object instead of duplicating the states 3 times, but you have to update their values at the same time
  /*
  const [userInput, serUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  */

  /*
  const titleChangeHandler = (event) => {
    // **depending on previous states could be disadvantageous in some cases
    // by using this approach, there is no guarantee you might get outdated states by a missed schedule
    setUserInput({
      // **depending on previous states could be disadvantageous in some cases

      // only this will be updated while the other values are dumped
      // React wull simply replace states with new values and not merge the old ones

      // have to copy their existing values too
      // eneteredAmount: '',
      // enteredDate: ''
      ...userInput, 

      setEnteredTitle: event.target.value, // overwrite the value with this line
    });
    

    // do it like this and pass in a function
    // this func will be automtically executed by React and receive the previous state snapshot (prevState) when calling
    // this approach is guranteed that React gives you the latest state snapshot
    setUserInput((prevState) => {
      // return the object and overwrite the one we wanted to update
      return {...prevState, enteredTitle: event.target.value};
    });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   setEnteredAmount: event.target.value,
    // })
  };
  
  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   setEnteredDate: event.target.value,
    // })
  };
  */

  const submitHandler = (event) => {
    // cancels the event if it is cancelable, e.g. clicking on a "Submit" button,
    //prevent it from submitting a form and reload the page
    event.preventDefault();

    const expenseData = {
      // these point to the states above
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    // pass the data as the parameter/argument to the parent component - communicate up to the parent component
    props.onSaveExpenseData(expenseData); 
    // overwrite/clear the form to its initial state after the fomr has been submitted
    setEnteredTitle(""); 
    setEnteredAmount(""); 
    setEnteredDate(""); 
  };

  // two-way binding - not only react to changes but also feed the value to the input via "input"

  return (
    // self-closing tag
    // normally, when click submit, the page sends a request to the one hosting it (the development server), and the page gets reloaded - we don't want this
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            // a prop named onChange
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
