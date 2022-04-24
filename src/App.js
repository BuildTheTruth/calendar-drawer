import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.scss";
import moment from "moment";
import { useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "moment/locale/ko";
import Toolbar from "./Toolbar";

moment.locale("ko-KR");
const localizer = momentLocalizer(moment);

function App() {
  const data = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const defaultDate = params.get("defaultDate");
    const events = params.get("events");
    const width = params.get("width");
    const height = params.get("height");

    return {
      defaultDate: defaultDate ? new Date(defaultDate) : new Date(),
      events:
        JSON.parse(events)?.map(({ start, end }) => ({
          start: new Date(start),
          end: new Date(end),
        })) ?? [],
      width,
      height,
    };
  }, []);

  return (
    <div className="app">
      <Calendar
        defaultDate={data.defaultDate}
        localizer={localizer}
        events={data.events}
        style={{ height: data.height ?? "300px", width: data.width ?? "500px" }}
        showAllEvents
        components={{ toolbar: Toolbar }}
      />
    </div>
  );
}

export default App;
