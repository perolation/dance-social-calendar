import Calendar from "@/components/Calendar";
import Navigation from "@/components/Navigation";
import { mockEvents } from "@/data/mockEvents";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Dance Socials Calendar
          </h1>
          <Calendar events={mockEvents} />
        </div>
      </div>
    </div>
  );
};

export default Index;