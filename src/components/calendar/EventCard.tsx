import { DanceEvent } from "@/types/event";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";

interface EventCardProps {
  event: DanceEvent;
  onClick: () => void;
}

const defaultImage = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";

const EventCard = ({ event, onClick }: EventCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer animate-fade-in overflow-hidden"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={event.image || defaultImage}
          alt={event.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg text-primary">{event.title}</h3>
        
        <div className="flex flex-wrap gap-2">
          {event.danceType.map((type, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="rounded-full bg-accent/20 text-accent-foreground"
            >
              {type}
            </Badge>
          ))}
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{event.startTime} - {event.endTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            <span>{event.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;