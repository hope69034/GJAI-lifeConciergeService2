import React,{useEffect, useState}from 'react';
import { Eventcalendar, toast, getJson } from '@mobiscroll/react';
import axios from 'axios'
import {useSelector} from'react-redux';

/* import { localeEn,Eventcalendar, localeKo,getJson, toast,setOptions, CalendarNav, Button, CalendarToday, SegmentedGroup, SegmentedItem } from '@mobiscroll/react';
import "@mobiscroll/react/dist/css/mobiscroll.min.css"; */


function Calendar() {
    const [myEvents, setEvents] = useState([]);
    const email = useSelector(state=>(state.session.email));

    useEffect(() => {
      axios.post("/lifeConcierge/api/showDailyEvent", {email})
      .then(res=>{
        console.log(res.data);
        setEvents(res.data)
      })
      .catch(err=>{console.log(err)});
    }, []);    
    

/*     React.useEffect(() => {
      getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
          setEvents(events);
      }, 'jsonp');
  }, []);   */


    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
          calendar: { type: 'month' },
          /*  agenda: { type: 'month' }   */ 
        };
    }, []);

    return (
      <>
        <Eventcalendar
            theme="windows" 
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
       <button onClick={()=>{console.log(myEvents)}}></button>
      </>
    ); 
}

export default Calendar;