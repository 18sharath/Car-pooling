
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Users, Clock, CreditCard, TrendingDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Share Your Commute, Save the Planet and Your Wallet
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Connect with fellow travelers going your way. Reduce traffic, emissions, 
              and commuting costs while building community.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link to="/search-trips">
                <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100">
                  Find a Ride
                </Button>
              </Link>
              <Link to="/offer-ride">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Offer a Ride
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
              alt="People carpooling"
              className="rounded-lg shadow-xl max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-500">How It Works</h2>
            <p className="text-gray-600 mt-2">Simple steps to start carpooling today</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-navy-500 mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Create your account and set up your profile as a driver or passenger.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-4">
                <Car className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-navy-500 mb-2">Find or Offer Rides</h3>
              <p className="text-gray-600">
                Search for available rides or create ride offers along your route.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold text-navy-500 mb-2">Connect & Go</h3>
              <p className="text-gray-600">
                Book your seat, meet at the designated spot, and enjoy the shared ride.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-500">Why Choose Commuter Connect</h2>
            <p className="text-gray-600 mt-2">Benefits that make carpooling the smarter choice</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full inline-flex mb-4">
                <CreditCard className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-500 mb-2">Save Money</h3>
              <p className="text-gray-600">
                Share fuel and toll costs to significantly reduce your commuting expenses.
              </p>
            </div>
            
            <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full inline-flex mb-4">
                <TrendingDown className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-500 mb-2">Reduce Emissions</h3>
              <p className="text-gray-600">
                Lower your carbon footprint by sharing rides instead of driving alone.
              </p>
            </div>
            
            <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full inline-flex mb-4">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-500 mb-2">Build Community</h3>
              <p className="text-gray-600">
                Meet like-minded people and make new connections in your area.
              </p>
            </div>
            
            <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full inline-flex mb-4">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-navy-500 mb-2">Save Time</h3>
              <p className="text-gray-600">
                Access carpool lanes to avoid traffic and reduce commute times.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-teal-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sharing Rides?</h2>
          <p className="text-teal-100 text-lg mb-8">
            Join thousands of commuters already saving time, money, and the planet.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-600">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
