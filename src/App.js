import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.scss";
import moment from "moment";
import { useEffect, useMemo } from "react";
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
        JSON.parse(events)?.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        })) ?? [],
      width: width ?? "500px",
      height: height ?? "300px",
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const containers = document.getElementsByClassName(
        "rbc-row-content-scroll-container"
      );
      const rows = document.getElementsByClassName("rbc-row");
      const eventWrappers = Array.from([...containers, ...rows]);
      const width = `${Number(data.width.slice(0, -2)) - 32}px`;
      eventWrappers.forEach((wrapper) => (wrapper.style["width"] = width));

      const cells = document.querySelectorAll(
        ".rbc-date-cell:not(.rbc-off-range)"
      );
      data.events.forEach(({ start, end, color }) => {
        const startDate = start.getDate();
        const endDate = end.getDate();
        for (
          let i = startDate > endDate ? 0 : startDate - 1;
          i < endDate;
          i++
        ) {
          cells[i]
            .querySelector(".rbc-button-link")
            .setAttribute("style", `color:${color ?? "#000"}`);
        }
      });
    });
  }, [data]);

  return (
    <div className="app" style={{ width: data.width }}>
      <Calendar
        defaultDate={data.defaultDate}
        localizer={localizer}
        events={data.events}
        style={{ height: data.height, width: data.width }}
        showAllEvents
        components={{ toolbar: Toolbar }}
        formats={{
          dateFormat: (date, culture, localizer) =>
            localizer.format(date, "D", culture),
        }}
        eventPropGetter={(event) => {
          return {
            style: {
              backgroundColor: event.bgColor,
              padding: "10px",
              borderRadius: "10px",
            },
          };
        }}
      />
      <div className="event-label-group" style={{ width: data.width }}>
        {data.events.map((event) => (
          <div key={event.label} className="event-label">
            <span
              className="event-present"
              style={{ backgroundColor: event.bgColor }}
            ></span>
            <span className="event-text">{event.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
