import './Card.css';

function Card(props) {
  // Nifty! So things to note here -
  // Custom React elements do not just display content between their opening and closing tags by default, you have to
  // call props.children, as well as append together classes passed along for styling.
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;