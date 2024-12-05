import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gray-50 py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {title}
      </h1>
      <p className="text-center text-gray-600">Coming soon...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/announcements" element={<PlaceholderPage title="Announcements" />} />
          <Route path="/dance-teams" element={<PlaceholderPage title="Dance Teams" />} />
          <Route path="/find-school" element={<PlaceholderPage title="Find a School" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
          <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;