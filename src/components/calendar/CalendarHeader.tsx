import { CalendarIcon } from "lucide-react";

interface CalendarHeaderProps {
  currentMonth: string;
  currentYear: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader = ({
  currentMonth,
  currentYear,
  onPrevMonth,
  onNextMonth,
}: CalendarHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <CalendarIcon className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-gray-800">
          {currentMonth} {currentYear}
        </h2>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onPrevMonth}
          className="px-4 py-2 rounded bg-primary text-white hover:bg-secondary transition-colors"
        >
          Previous
        </button>
        <button
          onClick={onNextMonth}
          className="px-4 py-2 rounded bg-primary text-white hover:bg-secondary transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;