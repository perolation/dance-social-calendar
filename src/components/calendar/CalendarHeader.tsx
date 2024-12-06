import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CalendarHeaderProps {
  currentMonth: string;
  currentYear: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
  availableTags: string[];
}

const CalendarHeader = ({
  currentMonth,
  currentYear,
  onPrevMonth,
  onNextMonth,
  selectedTag,
  onTagSelect,
  availableTags,
}: CalendarHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
      <div className="flex items-center gap-2">
        <CalendarIcon className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-gray-800">
          {currentMonth} {currentYear}
        </h2>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <Badge
          variant={selectedTag === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => onTagSelect(null)}
        >
          All
        </Badge>
        {availableTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => onTagSelect(tag)}
          >
            {tag}
          </Badge>
        ))}
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