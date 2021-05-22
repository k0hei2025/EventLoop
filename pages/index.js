import { useFunc} from '../helper/util-helper'
import EventList from '../Components/event-list'
import Head from 'next/head'

 const homePage =(props)=>{
  
  const {eventProps}  = props
  
  console.log(eventProps)
 return (
 
   <div> 
   <Head> 
   <title>eventLoop</title>

   <meta 
   name='discription'
   content='events'
    />
   </Head>
   <EventList items={eventProps} />
   </div>
 )
 }

 export const getStaticProps =async()=>{
  

  
  const eve = await useFunc();
    return {
     props:{
        eventProps : eve
     }
    }   
    
  }

 

 export default homePage