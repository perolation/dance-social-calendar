export interface DanceEvent {
  id: string;
  title: string;
  danceType: string[];  // Changed from string to string[]
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  price: string;
  description: string;
}