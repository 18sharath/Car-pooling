import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const useRideActions = () => {
  const { token } = useAuth();

  const updateBookingStatus = async (
    bookingId: string,
    status: 'confirmed' | 'cancelled'
  ) => {
    try {
      console.log("calling api");
      console.log(`${import.meta.env.VITE_API_URL}/bookings/683289c2e0ae3d815d626e55/status`);
      const response = await axios.put(
        //`${import.meta.env.VITE_API_URL}/bookings/${bookingId}/status`,
        `${import.meta.env.VITE_API_URL}/bookings/683289c2e0ae3d815d626e55/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      toast.success(`Booking ${status}`);
      return true;

    } catch (error) {
      toast.error('Failed to update booking status');
      return false;
    }
  };

  return { updateBookingStatus };
};