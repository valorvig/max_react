import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // check if the form should be displayed (normally after a button click)
  const [isEditing, setIsEditing] = useState(false);

  // name the parameter whatever you want, but this function expects enteredExpenseData
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // pull out all the object
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData); // the data passed from the child component will be shown in this component
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* name a function with "on" that runs when there is something happens inside this componenet */}
      {/* pass around a pointer at a function */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
