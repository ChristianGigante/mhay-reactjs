import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
function MeetupList(props) {
  return (
    <div>
      <ul className={classes.card}>
        {props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default MeetupList;
