import {
  Eventcalendar,
  getJson,
  toast,
  localeKo,
  Page,
  Input,
  formatDate,
  setOptions,
} from "@mobiscroll/react";
import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
/* import "@mobiscroll/react/dist/css/mobiscroll.css"; */



/* mui css에 css파일을 오버라이딩 하기 위한*/
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
const cache = createCache({
  key: 'css',
  prepend: true,
});



setOptions({
  /* 한국어버전 */
  locale: localeKo,
   /* theme: 'material', */  
    /*    theme: "ios",   */
         theme: "windows",   
   /*  theme: "android",  */
  themeVariant: "light",
});

function Timeline() {
  const [myEvents, setEvents] = React.useState([]);

  React.useEffect(() => {
    getJson(
      "https://trial.mobiscroll.com/events/?vers=5",
      (events) => {
        setEvents(events);
      },
      "jsonp"
    );
  }, []);

  const onEventClick = React.useCallback((event) => {
    toast({
      message: event.event.title,
    });
  }, []);

  const view = React.useMemo(() => {
    return {
      // calendar: { popover: true, count: true }
      calendar: { type: "week" },
      agenda: { type: "day" }, // day,week,month 옵션있음
    };
  }, []);


  return (

     <div>
     {/* mui css에 css파일을 오버라이딩 하기 위한 */}
        <CacheProvider value={cache}>


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
     
   

     </CacheProvider>
     </div>
    
  );
}

export default Timeline;





