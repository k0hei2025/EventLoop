import {useRouter} from 'next/router'
import {apiData} from '../../helper/util-helper'

import EventList from '../../Components/event-list'
import EventSearch from '../../Components/event-detail/event-search'
import Newsletter from '../../Components/input/newsletter-registration'

const events =(props)=>{

   const {events} = props

               const route = useRouter();

              const valueTakeHandler=(year , month)=>{
                    const url = `/events/${year}/${month}`
                    console.log(url);
                       route.push(url);
               }

return (
               <div>
               
               <EventSearch onSearch={valueTakeHandler} />
                              <EventList items={events} /> 
               <Newsletter/>
               </div>
)
}

export const getStaticProps=async()=>{

      const events = await apiData()

      return {
            props: {
              events : events,
            
            },
            revalidate : 1800
      }
}

export default events