using WebAPI.Domain;

namespace WebAPI.Repositories
{
    public interface IBookingRepository
    {
        List<Booking> GetAll();
        Booking GetById( int id );
        int Create(Booking booking );
        void Delete(Booking booking);
        int Update(Booking booking);
    }
}