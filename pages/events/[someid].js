import {Fragment} from 'react'
import {useRouter} from 'next/router'
import {getEventById , apiData} from '../../helper/util-helper'
import Typography from '@material-ui/core/Typography'

import EventSumary from '../../Components/event-detail/event-summary'
import EventLogisitcs from '../../Components/event-detail/event-logistics'
import EventContent from '../../Components/event-detail/event-content'
import Comments from '../../Components/input/comments'

const someId=(props)=>{
   

  

  const route = useRouter();

  console.log( 'someId', someId);
 

    const {idValue} = props;
    console.log(idValue);        

            const event = props.selectedEvent;
              if (!event){
                        return  <Typography>Page not found</Typography>
             }

 return (
                <Fragment>
                <EventSumary title={event.title}  />
                <EventLogisitcs 
                date={event.date}
                 image={event.image}
                  address={event.location}
                   imageAlt={event.title}/>
                <EventContent>
                             <p>{event.description}</p>  
                  </EventContent>
                <Comments eventId={event.id}  />
                </Fragment>
                                  
                                
                
 )
}

export async function getStaticProps(context) {
  const eventId = context.params.someid;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  };
}



export const getStaticPaths=async()=>{

  const events = await apiData();
 const paths = events.map((event) =>

   ( {
  params:{
      someid : event.id
    }
  }))
   
 return {
   paths:paths,
   fallback : 'blocking'
 };
}
export default someId
