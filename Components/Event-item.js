import Link from 'next/link'
import Image from 'next/image'
import {blueGrey , grey , teal} from "@material-ui/core/colors"
import {makeStyles} from '@material-ui/styles'
import Typography from "@material-ui/core/Typography"
import classes from './eventItem.module.css'
import Button from '@material-ui/core/Button'
import {DateIco , LocationIco , RightArrowIco} from '../UI/Icons'

const useStyles = makeStyles({
  button:{
    backgroundColor: teal[500]
  }
})

const EventItem=(props)=>{

const {id , image , location , title , date} = props
        
// date work
const humanReadableDate   = new Date(date).toLocaleDateString('en-US',
{day : 'numeric',
month : 'long',
year: 'numeric'
})   


// location work
const eventLocation = location.replace(', ', '\n');

// link work
 const link = `/events/${id}`;

 const dateIco = DateIco();
 const locationIco = LocationIco();
 const rightArrowIco = RightArrowIco();

 console.log(dateIco);

 console.log(locationIco);
 console.log(rightArrowIco);

const classesHm = useStyles();

  return(  
           
           <li className={classes.item}>
                          <Image  src={'/'+image} alt={title} width={320} height={160}/> 
                 <div className={classes.content}>
                        <div className={classes.summary}>
                                   <Typography variant='h5'>{title}</Typography> 
                        </div>
                         <div className={classes.date} >
                       {dateIco}
                                       <time>{humanReadableDate}</time>  
                         </div>
                         
                         <div className={classes.address}>
                         {locationIco}
                                        <address>{eventLocation}</address>  
                         </div>
                         <div className={classes.actions}>
                                     <Button className={classesHm.button} variant='contained'> <Link href={link} ><Typography className={classes.col}>Event Link</Typography></Link> {rightArrowIco} </Button>
                        
                        
                        
                         </div>

               
                 </div>
                 </li>

  )
}
export default EventItem