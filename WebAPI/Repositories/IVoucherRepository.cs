using WebAPI.Domain;

namespace WebAPI.Repositories
{
    public interface IVoucherRepository
    {
        List<Voucher> GetAll();
        Voucher GetById( int id );
        int Create(Voucher voucher );
        void Delete(Voucher voucher);
        int Update(Voucher voucher);
    }
}