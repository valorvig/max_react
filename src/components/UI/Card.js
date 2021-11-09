import './Card.css';

const Card = (props) => {
  // to make sure that both classes work
  const classes = 'card ' + props.className; // add className received from the outside
  // the children is the content between the opening tags
  return <div className={classes}>{props.children}</div>;
}

export default Card;