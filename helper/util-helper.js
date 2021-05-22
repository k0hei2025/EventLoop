export const apiData=async()=>{

  const data = await fetch('https://next-jsdemo-default-rtdb.firebaseio.com/events.json');
  
  const resData = await data.json()
 
  const eventData = [];
  for (const key in resData){
    eventData.push({
      id:key,
     ...resData[key]
    })
  }
  return eventData; 
}

export const useFunc=async()=>{
               const allEvents =  await apiData();
               return  allEvents.filter((event)=>event.isFeatured);
            }
export const getEventById=async(id)=> {
             const allEvents = await apiData();
               return allEvents.find((event) => event.id === id);
             }


export async function getFilteredEvents(dateFilter) {
  
   
  const { year, month } = dateFilter;

  const allEvents  = await apiData();  


  let filteredEvents =allEvents.filter((event) => {
   
    const eventDate = new Date(event.date);
    return eventDate. getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
