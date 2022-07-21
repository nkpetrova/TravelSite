using WebAPI.Domain;

namespace WebAPI.Dto
{
    public static class VoucherDtoExtensions
    {
        public static Voucher ConvertToVoucher(this VoucherDto voucherDto )
        {
            return new Voucher
            (
                voucherDto.Id,
                voucherDto.Sanatorium,
                voucherDto.Address,
                voucherDto.Price,
                voucherDto.Quantity
            );
        }

        public static VoucherDto ConvertToVoucherDto( this Voucher voucher )
        {
            return new VoucherDto
            {
                Id = voucher.Id,
                Sanatorium = voucher.Sanatorium,
                Address = voucher.Address,
                Price = voucher.Price,
                Quantity = voucher.Quantity
            };
        }
    }
}