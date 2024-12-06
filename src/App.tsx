import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import FindSchool from "./pages/FindSchool";
import Contact from "./pages/Contact";

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

const PlaceholderContactPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gray-50 py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {title}
      </h1>
      <p className="text-center text-gray-600">Diego-José Rodriguez Vasquez @and_his_name_was_dee_jay</p>
      <a href="https://latin-dance-montreal.notion.site" </a>
    </div>
  </div>
);

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    {children}
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/announcements" element={<PlaceholderPage title="Announcements" />} />
            <Route path="/dance-teams" element={<PlaceholderPage title="Dance Teams" />} />
            <Route path="/find-school" element={<FindSchool />} />
            <Route path="/contact" element={<PlaceholderContactPage title="Contact" />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
