import { DanceEvent } from "@/types/event";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock, MapPin, DollarSign } from "lucide-react";

interface EventDetailsProps {
  event: DanceEvent;
}

const EventDetails = ({ event }: EventDetailsProps) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-primary">
          {event.title}
        </DialogTitle>
      </DialogHeader>
      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="h-5 w-5" />
          <span>
            {event.startTime} - {event.endTime}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="h-5 w-5" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <DollarSign className="h-5 w-5" />
          <span>{event.price}</span>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Dance Type</h3>
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground">
            {event.danceType}
          </span>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Description</h3>
          <p className="text-gray-600">{event.description}</p>
        </div>
      </div>
    </DialogContent>
  );
};

export default EventDetails;