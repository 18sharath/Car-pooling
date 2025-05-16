
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Clock, MapPin, Users, Shield, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-navy-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">How Commuter Connect Works</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We connect drivers with empty seats to passengers heading the same way,
              making commuting more affordable, efficient, and environmentally friendly.
            </p>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-500 text-center mb-12">
                Simple Steps to Start Carpooling
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* For Passengers */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-center mb-6">
                    <div className="bg-teal-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-500">For Passengers</h3>
                  </div>
                  
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-teal-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">1</span>
                      <span>Create an account and set up your profile</span>
                    </li>
                    <li className="flex">
                      <span className="bg-teal-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">2</span>
                      <span>Search for rides that match your route and schedule</span>
                    </li>
                    <li className="flex">
                      <span className="bg-teal-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">3</span>
                      <span>Book your seat and make payment</span>
                    </li>
                    <li className="flex">
                      <span className="bg-teal-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">4</span>
                      <span>Meet your driver at the pickup location</span>
                    </li>
                    <li className="flex">
                      <span className="bg-teal-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">5</span>
                      <span>Enjoy your ride and rate your experience</span>
                    </li>
                  </ol>
                  
                  <div className="mt-8 text-center">
                    <Link to="/search-trips">
                      <Button className="bg-teal-500 hover:bg-teal-600">Find a Ride</Button>
                    </Link>
                  </div>
                </div>
                
                {/* For Drivers */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-center mb-6">
                    <div className="bg-orange-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-500">For Drivers</h3>
                  </div>
                  
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-orange-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">1</span>
                      <span>Create an account and verify your driver profile</span>
                    </li>
                    <li className="flex">
                      <span className="bg-orange-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">2</span>
                      <span>Post your rides with route, time and available seats</span>
                    </li>
                    <li className="flex">
                      <span className="bg-orange-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">3</span>
                      <span>Get booking requests from passengers</span>
                    </li>
                    <li className="flex">
                      <span className="bg-orange-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">4</span>
                      <span>Pick up passengers at agreed locations</span>
                    </li>
                    <li className="flex">
                      <span className="bg-orange-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mr-3">5</span>
                      <span>Complete the journey and receive payment</span>
                    </li>
                  </ol>
                  
                  <div className="mt-8 text-center">
                    <Link to="/offer-ride">
                      <Button className="bg-orange-500 hover:bg-orange-600">Offer a Ride</Button>
                    </Link>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-center mb-6">
                    <div className="bg-navy-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-navy-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-500">Safety & Benefits</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span>Verified user profiles and ratings</span>
                    </li>
                    <li className="flex">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span>Secure in-app messaging system</span>
                    </li>
                    <li className="flex">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span>Share trip details with friends/family</span>
                    </li>
                    <li className="flex">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span>Save money on transportation costs</span>
                    </li>
                    <li className="flex">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span>Reduce carbon footprint</span>
                    </li>
                    <li className="flex">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span>24/7 customer support</span>
                    </li>
                    <li className="flex">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span>Easy and transparent payment system</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 text-center">
                    <Link to="/register">
                      <Button className="bg-navy-500 hover:bg-navy-600">Sign Up Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-500 text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-navy-500 mb-2">
                    How is payment handled?
                  </h3>
                  <p className="text-gray-600">
                    Passengers can choose to pay via the app using a credit card or pay the driver directly in cash.
                    All online payments are processed securely, and drivers receive their earnings weekly.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-navy-500 mb-2">
                    What happens if a ride is cancelled?
                  </h3>
                  <p className="text-gray-600">
                    If a driver cancels more than 24 hours before the ride, passengers receive a full refund.
                    For cancellations less than 24 hours before, passengers receive a full refund plus a credit for their next ride.
                    If a passenger cancels more than 24 hours before, they receive a full refund minus a small service fee.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-navy-500 mb-2">
                    How do I communicate with my driver/passenger?
                  </h3>
                  <p className="text-gray-600">
                    Once a booking is confirmed, you'll have access to our in-app messaging system to communicate
                    with your driver or passenger. Phone numbers are only shared when necessary for pickup coordination.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-navy-500 mb-2">
                    Is my personal information secure?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we take data security very seriously. We only share the minimum information necessary
                    between riders and drivers, and all personal data is encrypted and stored securely following
                    industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-teal-500 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Sharing Rides?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of commuters already enjoying more affordable, eco-friendly transportation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/search-trips">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-600">
                  Find a Ride
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
