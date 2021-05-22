import EventItem from "./Event-item"
import Container from '@material-ui/core/Container'
import classes from './eventList.module.css'

const EventList=(props)=>{

               const {items} = props;

  return(
                 
                 <ul className={classes.list}>
                 {items.map((val)=>{
                  return ( 
                    
                     <EventItem 
                     key={val.id}
                     id={val.id}
                     title={val.title}
                     location={val.location}
                     date={val.date}
                     image={val.image}
                     />
                       )
                 })}
                 </ul>
                 
  ) 
}

export default EventList