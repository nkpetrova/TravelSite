using WebAPI.Domain;
using WebAPI.Dto;

namespace WebAPI.Services
{
    public interface IBookingService
    {
        List<Booking> GetBookings();
        Booking GetBookingById( int bookingId );
        int CreateBooking(BookingDto bookingDto );
        void DeleteBooking( int bookingId);
        int UpdateBooking(BookingDto booking);
    }
}