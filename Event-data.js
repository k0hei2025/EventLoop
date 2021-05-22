const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'images/tokyo-shibuya.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Osaka Heart-Warm Walk',
    description:
      "In this Event we walk the Osaka City in phenomenal Heart warming cloudy smile weather and try to acheive more places at that cloudy weather ",
    location: 'Osaka City, Osaka , Japan',
    date: '2021-05-30',
    image: 'images/Osaka-heart-warm-walk.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Anime City Walk',
    description:
      "In this event we walk through the japan's Most Intresting And Amazing Town Akiabara which is famous for Anime And Games we walk through the Akiabara where we see lots of Amazing stuff  ",
    location: 'Akihabara, Tokyo , Japan',
    date: '2022-04-10',
    image: 'images/Akiabara.jpg',
    isFeatured: true,
  },
];const eventList =()=>{
 
}
export default eventList

export const getFeaturedEvents=()=> {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}