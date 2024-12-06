import { DanceEvent } from "@/types/event";
import { Circle } from "lucide-react";
import EventCard from "./EventCard";

interface DayCellProps {
  day: number;
  events: DanceEvent[];
  isSelected: boolean;
  isMobile: boolean;
  onDayClick: () => void;
  onEventClick: (event: DanceEvent) => void;
}

const DayCell = ({
  day,
  events,
  isSelected,
  isMobile,
  onDayClick,
  onEventClick,
}: DayCellProps) => {
  return (
    <div
      onClick={onDayClick}
      className={`min-h-[150px] border border-gray-200 p-2 overflow-y-auto hover:bg-gray-50 transition-colors cursor-pointer relative
        ${isSelected ? "bg-primary/10" : ""}`}
    >
      <div className="font-semibold mb-1">{day}</div>
      {isMobile ? (
        events.length > 0 && (
          <Circle className="h-2 w-2 absolute bottom-2 right-2 fill-primary text-primary" />
        )
      ) : (
        <div className="space-y-2">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={(e) => {
                e.stopPropagation();
                onEventClick(event);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DayCell;