using Microsoft.AspNetCore.Mvc;
using WebAPI.Dto;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route( "rest/{controller}")]
    public class VoucherController : ControllerBase
    {
        private readonly IVoucherService _voucherService;

        public VoucherController(IVoucherService voucherService)
        {
            _voucherService = voucherService;
        }

        [HttpGet]
        public IActionResult GetVouchers()
        {
            try
            {
                return Ok( _voucherService.GetVouchers()
                    .ConvertAll( v => v.ConvertToVoucherDto() ) );
            }
            catch ( Exception ex )
            {
                return BadRequest( ex.Message );
            }
        }

        [HttpGet]
        [Route( "{voucherId}" )]
        public IActionResult GetVoucherById( int voucherId )
        {
            try
            {
                return Ok( _voucherService.GetVoucherById(voucherId).ConvertToVoucherDto() );
            }
            catch (Exception ex)
            {
                return BadRequest( ex.Message );
            }
        }

        [HttpPost]
        [Route( "create" )]
        public IActionResult CreateVoucher( [FromBody] VoucherDto voucher )
        {
            try
            {
                return Ok( _voucherService.CreateVoucher(voucher) );
            }
            catch ( Exception ex )
            {
                return BadRequest( ex.Message );
            }
        }

        [HttpDelete]
        [Route( "{voucherId}/delete" )]
        public IActionResult DeleteVoucher( int voucherId )
        {
            try
            {
                _voucherService.DeleteVoucher(voucherId);
                return Ok();
            }
            catch ( Exception ex )
            {
                return BadRequest( ex.Message );
            }
        }

        [HttpPut]
        [Route("update")]
        public IActionResult UpdateVoucher([FromBody] VoucherDto voucher)
        {
            try
            {
                return Ok( _voucherService.UpdateVoucher(voucher));
            }
            catch ( Exception ex )
            {
                return BadRequest( ex.Message );
            }
        }
    }
}
