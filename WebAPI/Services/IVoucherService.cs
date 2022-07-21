using WebAPI.Domain;
using WebAPI.Dto;

namespace WebAPI.Services
{
    public interface IVoucherService
    {
        List<Voucher> GetVouchers();
        Voucher GetVoucherById( int voucherId );
        int CreateVoucher(VoucherDto voucherDto );
        void DeleteVoucher( int voucherId);
        int UpdateVoucher(VoucherDto voucherDto);
    }
}