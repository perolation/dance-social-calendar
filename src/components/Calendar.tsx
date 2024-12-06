import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { DanceEvent } from "@/types/event";
import EventDetails from "./EventDetails";
import { useIsMobile } from "@/hooks/use-mobile";
import { format } from "date-fns";
import CalendarHeader from "./calendar/CalendarHeader";
import DayCell from "./calendar/DayCell";
import EventCard from "./calendar/EventCard";

interface CalendarProps {
  events: DanceEvent[];
}

const Calendar = ({ events }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<DanceEvent | null>(null);
  const [showDayView, setShowDayView] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const [displayedDate, setDisplayedDate] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get unique tags from all events
  const availableTags = Array.from(
    new Set(events.flatMap((event) => event.danceType))
  ).sort();

  const filteredEvents = selectedTag
    ? events.filter((event) => event.danceType.includes(selectedTag))
    : events;

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: Date) => {
    return filteredEvents.filter(
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dayEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(displayedDate);
    const firstDay = getFirstDayOfMonth(displayedDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="min-h-[150px] border border-gray-200 bg-gray-50"
        />
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(
        displayedDate.getFullYear(),
        displayedDate.getMonth(),
        day
      );
      const dayEvents = getEventsForDate(currentDate);
      const isSelectedDate =
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === displayedDate.getMonth() &&
        selectedDate.getFullYear() === displayedDate.getFullYear();

      days.push(
        <DayCell
          key={day}
          day={day}
          events={dayEvents}
          isSelected={isSelectedDate}
          isMobile={isMobile}
          onDayClick={() => {
            setSelectedDate(currentDate);
            if (isMobile && dayEvents.length > 0) {
              setShowDayView(true);
            }
          }}
          onEventClick={(event) => setSelectedEvent(event)}
        />
      );
    }

    return days;
  };

  return (
    <div className="container mx-auto p-4">
      {isMobile && showDayView ? (
        renderDayView()
      ) : (
        <>
          <CalendarHeader
            currentMonth={monthNames[displayedDate.getMonth()]}
            currentYear={displayedDate.getFullYear()}
            onPrevMonth={() =>
              setDisplayedDate(
                new Date(
                  displayedDate.getFullYear(),
                  displayedDate.getMonth() - 1,
                  1
                )
              )
            }
            onNextMonth={() =>
              setDisplayedDate(
                new Date(
                  displayedDate.getFullYear(),
                  displayedDate.getMonth() + 1,
                  1
                )
              )
            }
            selectedTag={selectedTag}
            onTagSelect={setSelectedTag}
            availableTags={availableTags}
            events={events}
            onEventSelect={setSelectedEvent}
          />
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

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        {selectedEvent && <EventDetails event={selectedEvent} />}
      </Dialog>
    </div>
  );
};

export default Calendar;