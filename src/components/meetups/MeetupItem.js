import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.card}>
      <div>
        <img className={classes.image} src={props.image} alt={props.title} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button className={classes.btnToFav}>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
