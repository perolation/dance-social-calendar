import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Dance Social
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="px-4 py-2 text-sm text-gray-700 hover:text-primary transition-colors">
                  Social Calendar
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/announcements" className="px-4 py-2 text-sm text-gray-700 hover:text-primary transition-colors">
                  Announcements
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/dance-teams" className="px-4 py-2 text-sm text-gray-700 hover:text-primary transition-colors">
                  Dance Teams
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/find-school" className="px-4 py-2 text-sm text-gray-700 hover:text-primary transition-colors">
                  Find a School
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className="px-4 py-2 text-sm text-gray-700 hover:text-primary transition-colors">
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/faq" className="px-4 py-2 text-sm text-gray-700 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;