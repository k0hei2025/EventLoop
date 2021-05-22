import {Fragment} from 'react'
import {useRouter} from 'next/router'
import {getEventById , apiData} from '../../helper/util-helper'
import Typography from '@material-ui/core/Typography'

import EventSumary from '../../Components/event-detail/event-summary'
import EventLogisitcs from '../../Components/event-detail/event-logistics'
import EventContent from '../../Components/event-detail/event-content'



const someId=(props)=>{

    const {idValue} = props;
    console.log(idValue);        
    //    const route = useRouter();
            //    console.log(route.pathname);            
            //   //const {someid} = route.query;
            //  console.log(someid);
    
            const event = idValue;
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

                </Fragment>
                                  
                                
                
 )
}

export const getStaticProps=async(context)=>{
   const eventId = context.params.eventId;
  
  const idData = await getEventById(eventId);

  return {
    props:{
      idValue : idData
    }
  }
}


export const getStaticPaths=async()=>{
 const events = await apiData();

 const pathsi = events.map((event) =>{
  return ( {
  params:{
      eventId : event.id
    }
  })
  });
   
 return {
   paths:pathsi,
   fallback : false
 };
}
export default someId
