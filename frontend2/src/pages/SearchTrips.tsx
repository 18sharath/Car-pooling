
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon, Search, User, Clock, Car, CreditCard, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock data - in a real app, this would come from your API
const mockTrips = [
  {
    id: "trip1",
    driver: {
      id: "user1",
      name: "John Smith",
      rating: 4.8
    },
    from: "San Francisco, CA",
    to: "San Jose, CA",
    date: addDays(new Date(), 1),
    time: "08:30",
    pricePerSeat: 15,
    availableSeats: 3,
    totalSeats: 4
  },
  {
    id: "trip2",
    driver: {
      id: "user2",
      name: "Sarah Johnson",
      rating: 4.9
    },
    from: "Oakland, CA",
    to: "San Francisco, CA",
    date: addDays(new Date(), 1),
    time: "09:15",
    pricePerSeat: 12,
    availableSeats: 2,
    totalSeats: 3
  },
  {
    id: "trip3",
    driver: {
      id: "user3",
      name: "Michael Lee",
      rating: 4.7
    },
    from: "San Francisco, CA",
    to: "Mountain View, CA",
    date: addDays(new Date(), 2),
    time: "17:30",
    pricePerSeat: 18,
    availableSeats: 4,
    totalSeats: 4
  }
];

const SearchTrips = () => {
  const [date, setDate] = useState<Date | undefined>(addDays(new Date(), 1));
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    seats: "1",
  });
  
  const [searching, setSearching] = useState(false);
  const [trips, setTrips] = useState<typeof mockTrips>([]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    
    // Simulate API search delay
    setTimeout(() => {
      // In a real app, you would make an API call with the search criteria
      setTrips(mockTrips);
      setSearching(false);
    }, 1000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-navy-500 mb-6 text-center">
            Find a Ride
          </h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Search Form */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Search for trips</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* From */}
                    <div className="space-y-2">
                      <Label htmlFor="from">From</Label>
                      <Input
                        id="from"
                        name="from"
                        placeholder="Starting location"
                        value={formData.from}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    {/* To */}
                    <div className="space-y-2">
                      <Label htmlFor="to">To</Label>
                      <Input
                        id="to"
                        name="to"
                        placeholder="Destination"
                        value={formData.to}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    {/* Date */}
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    {/* Seats */}
                    <div className="space-y-2">
                      <Label htmlFor="seats">Seats</Label>
                      <Input
                        id="seats"
                        name="seats"
                        type="number"
                        min="1"
                        max="8"
                        value={formData.seats}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-center pt-4">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-teal-500 hover:bg-teal-600"
                      disabled={searching}
                    >
                      {searching ? (
                        <>Searching...</>
                      ) : (
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          Search Rides
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Search Results */}
            {trips.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-navy-500">Available Rides</h2>
                
                {trips.map((trip) => (
                  <Card key={trip.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      {/* Trip Info */}
                      <div className="p-6 md:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                              <User className="h-6 w-6 text-navy-500" />
                            </div>
                            <div className="ml-3">
                              <p className="font-medium">{trip.driver.name}</p>
                              <div className="flex items-center">
                                <span className="text-sm text-yellow-500">★</span>
                                <span className="text-sm text-gray-600 ml-1">{trip.driver.rating}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-teal-500">
                            ${trip.pricePerSeat} per seat
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-1 flex justify-center">
                              <div className="h-full flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                                <div className="w-0.5 h-full bg-gray-200 my-1"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                              </div>
                            </div>
                            <div className="col-span-11">
                              <div className="mb-3">
                                <p className="font-medium">{trip.from}</p>
                              </div>
                              <div>
                                <p className="font-medium">{trip.to}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="mr-2 h-4 w-4 text-teal-500" />
                            <span>{format(trip.date, "EEE, MMM d")} • {trip.time}</span>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-600">
                            <Car className="mr-2 h-4 w-4 text-teal-500" />
                            <span>{trip.availableSeats} seat{trip.availableSeats !== 1 && 's'} available</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Panel */}
                      <div className="bg-gray-50 p-6 flex flex-col justify-center border-t md:border-t-0 md:border-l">
                        <div className="text-center mb-4">
                          <div className="text-xl font-bold text-navy-500">${trip.pricePerSeat}</div>
                          <div className="text-sm text-gray-600">per seat</div>
                        </div>
                        
                        <div className="flex items-center justify-center text-sm mb-4">
                          <Users className="h-4 w-4 text-gray-500 mr-1" /> 
                          <span>{trip.availableSeats}/{trip.totalSeats} seats left</span>
                        </div>
                        
                        <Button className="w-full bg-teal-500 hover:bg-teal-600">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            {searching && (
              <div className="text-center py-12">
                <div className="animate-pulse">
                  <p className="text-lg text-gray-600">Searching for available rides...</p>
                </div>
              </div>
            )}
            
            {!searching && trips.length === 0 && (
              <div className="text-center py-12 border rounded-lg bg-white">
                <Car className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">No rides found</h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or check back later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchTrips;
