import Calendar from "@/components/Calendar";
import { mockEvents } from "@/data/mockEvents";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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