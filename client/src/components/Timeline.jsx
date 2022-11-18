import { Eventcalendar, getJson, toast, localeKo, Page, Input, formatDate, setOptions } from '@mobiscroll/react';
import React from 'react'
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
/* import "@mobiscroll/react/dist/css/mobiscroll.css"; */

setOptions({
    locale: localeKo,
    /* theme: 'material', */
    theme: 'windows',
    themeVariant: 'light'
});

function Timeline() {
    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const onEventClick = React.useCallback((event) => {
        toast({
            message:  event.event.title
                
                
        });
    }, []);
    
    const view = React.useMemo(() => {
        return {
            // calendar: { popover: true, count: true }
            calendar: { type: 'week' },
            agenda: { type: 'day' } // day,week,month 옵션있음
        };
    }, []);

    

    return (
        <Eventcalendar

            clickToCreate={true}
            dragToCreate={true}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            locale={localeKo}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
            
            // colors={[
            //     { start: new Date(2022, 12, 5), end: new Date(2022, 12, 7), background: 'red' }
            // ]}
            
           //// 
       />
    ); 
}


export default Timeline
