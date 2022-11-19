
import { localeEn,Eventcalendar, localeKo,getJson, toast,setOptions, CalendarNav, Button, CalendarToday, SegmentedGroup, SegmentedItem } from '@mobiscroll/react';
import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
 
 

function Calender() {

    const [myEvents, setEvents] = React.useState([]);
    
    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
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
    ); 
}
export default Calender