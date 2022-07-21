using WebAPI.Domain;
using WebAPI.Dto;
using WebAPI.Repositories;

namespace WebAPI.Services
{
    public class VoucherService : IVoucherService
    {
        private readonly IVoucherRepository _voucherRepository;

        public VoucherService(IVoucherRepository voucherRepository)
        {
            _voucherRepository = voucherRepository;
        }

        public List<Voucher> GetVouchers()
        {
            return _voucherRepository.GetAll();
        }

        public int CreateVoucher(VoucherDto voucher )
        {
            if (voucher == null )
            {
                throw new Exception( $"{nameof( Voucher )} is not found!" );
            }

            Voucher voucherEntity = voucher.ConvertToVoucher();

            return _voucherRepository.Create(voucherEntity);
        }

        public void DeleteVoucher( int voucherId )
        {
            Voucher voucher = _voucherRepository.GetById( voucherId );
            if (voucher == null )
            {
                throw new Exception( $"{nameof(Voucher)} not found, #Id - {voucherId}" );
            }

            _voucherRepository.Delete(voucher);
        }

        public Voucher GetVoucherById( int voucherId )
        {
            Voucher voucher = _voucherRepository.GetById(voucherId);
            if (voucher == null )
            {
                throw new Exception( $"{nameof(Voucher)} not found, #Id - {voucherId}" );
            }
            return voucher;
        }


        public int UpdateVoucher(VoucherDto voucher)
        {
            if (voucher == null)
            {
                throw new Exception($"{nameof(Voucher)} is not found!");
            }

            return _voucherRepository.Update(voucher.ConvertToVoucher());
        }

    }
}