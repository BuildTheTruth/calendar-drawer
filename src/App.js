import moment from "moment";
import { useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.scss";

const localizer = momentLocalizer(moment);

function App() {
  const data = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const defaultDate = params.get("defaultDate");
    const events = params.get("events");
    return {
      defaultDate: defaultDate ? new Date(defaultDate) : new Date(),
      events:
        JSON.parse(events)?.map(({ start, end }) => ({
          start: new Date(start),
          end: new Date(end),
        })) ?? [],
    };
  }, []);
  return (
    <div className="app">
      <Calendar
        defaultDate={data.defaultDate}
        localizer={localizer}
        events={data.events}
        style={{ height: 500, width: 800 }}
        showAllEvents
      />
    </div>
  );
}

export default App;
