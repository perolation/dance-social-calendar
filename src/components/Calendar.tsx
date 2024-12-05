import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { DanceEvent } from "@/types/event";
import EventDetails from "./EventDetails";
import { Calendar as CalendarIcon, Circle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { format } from "date-fns";

interface CalendarProps {
  events: DanceEvent[];
}

const Calendar = ({ events }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<DanceEvent | null>(null);
  const [showDayView, setShowDayView] = useState(false);
  const isMobile = useIsMobile();

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const renderDayView = () => {
    const dayEvents = getEventsForDate(selectedDate);

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowDayView(false)}
            className="px-4 py-2 text-primary hover:text-secondary transition-colors"
          >
            Back to Calendar
          </button>
          <div className="text-lg font-semibold text-center">
            {format(selectedDate, "EEEE, MMMM d, yyyy")}
          </div>
        </div>
        {dayEvents.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No events scheduled for this day
          </div>
        ) : (
          <div className="space-y-2">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer animate-fade-in"
              >
                <div className="font-semibold text-primary">{event.title}</div>
                <div className="text-sm text-gray-600">
                  {event.startTime} - {event.endTime}
                </div>
                <div className="text-sm text-gray-500">{event.location}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedDate);
    const firstDay = getFirstDayOfMonth(selectedDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="h-24 md:h-32 border border-gray-200 bg-gray-50"
        ></div>
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        day
      );
      const dayEvents = getEventsForDate(currentDate);
      const hasEvents = dayEvents.length > 0;

      days.push(
        <div
          key={day}
          onClick={() => {
            setSelectedDate(currentDate);
            if (isMobile && hasEvents) {
              setShowDayView(true);
            }
          }}
          className={`h-24 md:h-32 border border-gray-200 p-2 overflow-y-auto hover:bg-gray-50 transition-colors cursor-pointer relative
            ${selectedDate.getDate() === day ? "bg-primary/10" : ""}`}
        >
          <div className="font-semibold mb-1">{day}</div>
          {isMobile ? (
            hasEvents && (
              <Circle className="h-2 w-2 absolute bottom-2 right-2 fill-primary text-primary" />
            )
          ) : (
            <div className="space-y-1">
              {dayEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(event);
                  }}
                  className="text-xs p-1 rounded bg-primary text-white cursor-pointer hover:bg-secondary transition-colors animate-fade-in"
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-[10px] opacity-90 flex items-center gap-1">
                    <span>{event.startTime}</span>
                    <span>|</span>
                    <div className="flex flex-wrap gap-1">
                      {event.danceType.map((type, index) => (
                        <span key={index}>
                          {type}
                          {index < event.danceType.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="container mx-auto p-4">
      {isMobile && showDayView ? (
        renderDayView()
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-800">
                {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setSelectedDate(
                    new Date(selectedDate.setMonth(selectedDate.getMonth() - 1))
                  )
                }
                className="px-4 py-2 rounded bg-primary text-white hover:bg-secondary transition-colors"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setSelectedDate(
                    new Date(selectedDate.setMonth(selectedDate.getMonth() + 1))
                  )
                }
                className="px-4 py-2 rounded bg-primary text-white hover:bg-secondary transition-colors"
              >
                Next
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-px mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-semibold py-2 bg-gray-100"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-px bg-white">
            {renderCalendar()}
          </div>
        </>
      )}

      {/* Dialog remains mounted independently */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        {selectedEvent && <EventDetails event={selectedEvent} />}
      </Dialog>
    </div>
  );
};

export default Calendar;