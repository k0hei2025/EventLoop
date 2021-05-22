  import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../helper/util-helper';

import Link from  'next/link'
import EventList from '../../Components/event-list';
import ResultsTitle from '../../Components/event-detail/results-title';
import Button from '@material-ui/core/Button';
import ErrorAlert from '../../Components/ui/error-alert';

function FilteredEventsPage(props) {
 
  const filteredEvents = props.filterEvents
 
  

  if (props.hasError){
  return (
    <Fragment>
      <ErrorAlert>
        <p>Invalid filter. Please adjust your values!</p>
      </ErrorAlert>
      <div className='center'>
        <Button variant='contained' color='primary' ><Link href="/events">Show All Events</Link></Button>
      </div>
    </Fragment>
  );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button variant='contained' color='primary' ><Link href='/events' >Show All Events</Link></Button>
        </div>
      </Fragment>
    );
  }



  const date = new Date(props.date.year, props.date.month - 1);


  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export const getServerSideProps=async(context)=>{

    const {params} = context;


  const filterData = params.slug;
  console.log(filterData) 

  // if (!filterData) {
  //   return <p className='center'>Loading...</p>;
  //   console.log(filterData)
  // }

  const filteredYear = filterData[0];
  console.log(filteredYear)
  const filteredMonth = filterData[1];
  console.log(filteredMonth)

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props:{
        hasError : true
      }
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });




  return {
    props:{
         filterEvents : filteredEvents,
         
         date:{
          year : numYear,
          month : numMonth
        }
 
    },
    
  }
}


export default FilteredEventsPage;