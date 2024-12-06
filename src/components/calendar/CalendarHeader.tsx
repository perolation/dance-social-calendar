import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { DanceEvent } from "@/types/event";
import { startOfDay, isAfter, isEqual } from "date-fns";

interface CalendarHeaderProps {
  currentMonth: string;
  currentYear: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
  availableTags: string[];
  events: DanceEvent[];
  onEventSelect: (event: DanceEvent) => void;
}

const CalendarHeader = ({
  currentMonth,
  currentYear,
  onPrevMonth,
  onNextMonth,
  selectedTag,
  onTagSelect,
  availableTags,
  events,
  onEventSelect,
}: CalendarHeaderProps) => {
  const [open, setOpen] = useState(false);
  const today = startOfDay(new Date());

  // Filter events to only show today and future events
  const futureEvents = events.filter((event) => 
    isAfter(startOfDay(event.date), today) || isEqual(startOfDay(event.date), today)
  );

  return (
    <div className="space-y-4 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
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

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="w-full md:w-96">
          <Command className="rounded-lg border shadow-md">
            <CommandInput 
              placeholder="Search events..." 
              onFocus={() => setOpen(true)}
            />
          </Command>

          <CommandDialog 
            open={open} 
            onOpenChange={setOpen}
          >
            <div className="fixed inset-0 z-[100] bg-white md:relative md:inset-auto md:bg-transparent">
              <div className="relative h-[100dvh] md:h-auto">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 p-2 md:hidden"
                >
                  ✕
                </button>
                <CommandInput 
                  placeholder="Search events..."
                  className="h-14 md:h-auto"
                />
                <CommandList className="h-[calc(100dvh-60px)] md:h-[300px] overflow-y-auto">
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Upcoming Events">
                    {futureEvents.map((event) => (
                      <CommandItem
                        key={event.id}
                        onSelect={() => {
                          onEventSelect(event);
                          setOpen(false);
                        }}
                        className="cursor-pointer"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium">{event.title}</span>
                          <span className="text-sm text-gray-500">
                            {event.location} • {event.price}
                          </span>
                          <div className="flex gap-1 mt-1">
                            {event.danceType.map((type) => (
                              <Badge key={type} variant="secondary" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </div>
            </div>
          </CommandDialog>
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
      </div>
    </div>
  );
};

export default CalendarHeader;