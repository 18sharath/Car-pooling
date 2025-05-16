
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

const OfferRide = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    time: "",
    pricePerSeat: "",
    totalSeats: "4",
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.from.trim()) {
      newErrors.from = "Starting location is required";
    }
    
    if (!formData.to.trim()) {
      newErrors.to = "Destination is required";
    }
    
    if (!date) {
      newErrors.date = "Date is required";
    }
    
    if (!formData.time.trim()) {
      newErrors.time = "Time is required";
    }
    
    if (!formData.pricePerSeat.trim()) {
      newErrors.pricePerSeat = "Price per seat is required";
    } else if (isNaN(Number(formData.pricePerSeat)) || Number(formData.pricePerSeat) <= 0) {
      newErrors.pricePerSeat = "Price must be a positive number";
    }
    
    if (!formData.totalSeats.trim()) {
      newErrors.totalSeats = "Total seats is required";
    } else if (isNaN(Number(formData.totalSeats)) || Number(formData.totalSeats) <= 0) {
      newErrors.totalSeats = "Total seats must be a positive number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real app, you would submit the trip data to your backend
      console.log("Trip created:", {
        ...formData,
        date,
        availableSeats: formData.totalSeats, // Initially all seats are available
      });
      
      // Show success toast
      toast.success("Your ride has been offered successfully!");
      
      // Reset form
      setFormData({
        from: "",
        to: "",
        time: "",
        pricePerSeat: "",
        totalSeats: "4",
      });
      setDate(new Date());
      
      // In a real app, you would redirect to the driver dashboard
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-navy-500 mb-6 text-center">
              Offer a Ride
            </h1>
            
            <Card>
              <CardHeader>
                <CardTitle>Trip Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* From */}
                    <div className="space-y-2">
                      <Label htmlFor="from">From</Label>
                      <Input
                        id="from"
                        name="from"
                        placeholder="Starting location"
                        value={formData.from}
                        onChange={handleInputChange}
                        className={errors.from ? "border-red-500" : ""}
                      />
                      {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from}</p>}
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
                        className={errors.to ? "border-red-500" : ""}
                      />
                      {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to}</p>}
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
                              !date && "text-muted-foreground",
                              errors.date && "border-red-500"
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
                      {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                    </div>
                    
                    {/* Time */}
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={errors.time ? "border-red-500" : ""}
                      />
                      {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                    </div>
                    
                    {/* Price Per Seat */}
                    <div className="space-y-2">
                      <Label htmlFor="pricePerSeat">Price Per Seat ($)</Label>
                      <Input
                        id="pricePerSeat"
                        name="pricePerSeat"
                        type="number"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        value={formData.pricePerSeat}
                        onChange={handleInputChange}
                        className={errors.pricePerSeat ? "border-red-500" : ""}
                      />
                      {errors.pricePerSeat && <p className="text-red-500 text-sm mt-1">{errors.pricePerSeat}</p>}
                    </div>
                    
                    {/* Total Seats */}
                    <div className="space-y-2">
                      <Label htmlFor="totalSeats">Total Seats</Label>
                      <Input
                        id="totalSeats"
                        name="totalSeats"
                        type="number"
                        min="1"
                        max="8"
                        value={formData.totalSeats}
                        onChange={handleInputChange}
                        className={errors.totalSeats ? "border-red-500" : ""}
                      />
                      {errors.totalSeats && <p className="text-red-500 text-sm mt-1">{errors.totalSeats}</p>}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
                      Offer Ride
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OfferRide;
