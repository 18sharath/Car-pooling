
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Car, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-teal-500" />
              <span className="ml-2 text-xl font-bold text-navy-500">Commuter Connect</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-teal-500' : 'text-gray-600 hover:text-teal-500'}`}>
              Home
            </Link>
            <Link to="/search-trips" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/search-trips') ? 'text-teal-500' : 'text-gray-600 hover:text-teal-500'}`}>
              Find a Ride
            </Link>
            <Link to="/offer-ride" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/offer-ride') ? 'text-teal-500' : 'text-gray-600 hover:text-teal-500'}`}>
              Offer a Ride
            </Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-teal-500' : 'text-gray-600 hover:text-teal-500'}`}>
              How It Works
            </Link>
            
            <div className="ml-4 flex items-center">
              <Link to="/login">
                <Button variant="ghost" className="text-navy-500 hover:text-teal-500">
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="ml-2 bg-teal-500 hover:bg-teal-600 text-white">
                  Register
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-teal-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-teal-500 bg-gray-50' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/search-trips" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/search-trips') ? 'text-teal-500 bg-gray-50' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              Find a Ride
            </Link>
            <Link 
              to="/offer-ride" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/offer-ride') ? 'text-teal-500 bg-gray-50' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              Offer a Ride
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-teal-500 bg-gray-50' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-50'}`}
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="ghost" className="w-full justify-center text-navy-500 hover:text-teal-500">
                  Sign In
                </Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
