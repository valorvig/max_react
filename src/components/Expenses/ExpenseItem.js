// A component should be independent, and its internal data should be dynamic
// Use props to pass data and make compoenents configurable and reusable

import React, {useState} from 'react'; // useState is one of React Hook

import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
import Card from '../UI/Card';

// React component must be named in uppercase letter
// to avoid a confusion with the built-in ones
// only declare the state (begin with "use") within the component function and not the nested function, e.g. titleChangeHandler
// return an array of (1) a pointer at the managed value and (2) an updating function. Name them anything.
// the first element is always the current state value, and the second element is to update it.
const ExpenseItem = (props) => {
  // we longer need a value assignment here, and it won't be renedered anyway
  // title = 'Updated';

  // be called only inside React component functions and not inside nested functions
  // changes will lead to the component functions where they stays to be called again
  const [title, setTitle] = useState(props.title); // return an 2-element array; 
  console.log('ExpenseItem evaluated by React');

  // let title = props.title;

  // name it with 'handler' - not called by us but a funcitoned attached to an event listener
  const clickHandler = () => {
    // no longer use = but a function instead
    // title = 'Updated!';

    // no matter how often this comp func executes, this state is stored and survives, and it helps the rendering
    // update a new value with this, and its compoennt also get executed/re-evaluated again 
    setTitle('Updated!'); // pass value
    
    // this one won't be updated right away - schedule
    console.log(title); 
  };

  // looks like html but it's javascript
  // we want to call this automatically again when the state is updated
  return (
    <li>
      <Card className='expense-item'>
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
