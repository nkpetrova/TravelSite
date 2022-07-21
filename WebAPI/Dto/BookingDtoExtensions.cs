using WebAPI.Domain;

namespace WebAPI.Dto
{
    public static class BookingDtoExtensions
    {
        public static Booking ConvertToBooking(this BookingDto bookingDto )
        {
            return new Booking
            (
                bookingDto.Id_b,
                bookingDto.Date,
                bookingDto.Turfirma_id,
                bookingDto.Voucher_id,
                bookingDto.Quantity_b,
                bookingDto.Price_b
            );
        }

        public static BookingDto ConvertToBookingDto( this Booking booking )
        {
            return new BookingDto
            {
                Id_b = booking.Id_b,
                Date = booking.Date,
                Turfirma_id = booking.Turfirma_id,
                Voucher_id = booking.Voucher_id,
                Quantity_b = booking.Quantity_b,
                Price_b = booking.Price_b
            };
        }
    }
}