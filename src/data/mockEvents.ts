import { DanceEvent } from "../types/event";

export const mockEvents: DanceEvent[] = [
  {
    id: "1",
    title: "Salsa Night",
    danceType: "Salsa",
    date: new Date(2024, 3, 15),
    startTime: "20:00",
    endTime: "23:00",
    location: "Dance Studio 54",
    price: "$15",
    description: "Join us for a night of energetic salsa dancing! All levels welcome.",
  },
  {
    id: "2",
    title: "Bachata Social",
    danceType: "Bachata",
    date: new Date(2024, 3, 15),
    startTime: "19:00",
    endTime: "22:00",
    location: "Rhythm Room",
    price: "$12",
    description: "Experience the romance of bachata with great music and friendly people.",
  },
  {
    id: "3",
    title: "Swing Dance Party",
    danceType: "Swing",
    date: new Date(2024, 3, 17),
    startTime: "19:30",
    endTime: "22:30",
    location: "The Vintage Ballroom",
    price: "$10",
    description: "Step back in time with our swing dance social. Beginners welcome!",
  },
];