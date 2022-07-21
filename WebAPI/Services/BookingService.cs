using WebAPI.Domain;
using WebAPI.Dto;
using WebAPI.Repositories;

namespace WebAPI.Services
{
    public class BookingService : IBookingService
    {
        private readonly IBookingRepository _bookingRepository;

        public BookingService(IBookingRepository bookingRepository)
        {
            _bookingRepository = bookingRepository;
        }

        public List<Booking> GetBookings()
        {
            return _bookingRepository.GetAll();
        }

        public int CreateBooking( BookingDto booking )
        {
            if (booking == null )
            {
                throw new Exception( $"{nameof( Booking )} is not found!" );
            }

            Booking bookingEntity = booking.ConvertToBooking();

            return _bookingRepository.Create(bookingEntity);
        }

        public void DeleteBooking( int bookingId )
        {
            Booking booking = _bookingRepository.GetById( bookingId );
            if (booking == null )
            {
                throw new Exception( $"{nameof(Booking)} not found, #Id - {bookingId}" );
            }

            _bookingRepository.Delete(booking);
        }

        public Booking GetBookingById( int bookingId )
        {
            Booking booking = _bookingRepository.GetById(bookingId);
            if (booking == null )
            {
                throw new Exception( $"{nameof(Booking)} not found, #Id - {bookingId}" );
            }

            return booking;
        }

        public int UpdateBooking(BookingDto booking)
        {
            if (booking == null)
            {
                throw new Exception($"{nameof(Booking)} is not found!");
            }
            return _bookingRepository.Update(booking.ConvertToBooking());
        }

    }
}