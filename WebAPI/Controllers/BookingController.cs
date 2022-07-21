using Microsoft.AspNetCore.Mvc;
using WebAPI.Dto;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route( "rest/{controller}")]
    public class BookingController : ControllerBase
    {
        private readonly IBookingService _bookingService;

        public BookingController(IBookingService bookingService)
        {
            _bookingService = bookingService;
        }

        [HttpGet]
        public IActionResult GetBookings()
        {
            try
            {
                return Ok( _bookingService.GetBookings()
                    .ConvertAll( t => t.ConvertToBookingDto() ) );
            }
            catch ( Exception ex )
            {
                return BadRequest( ex.Message );
            }
        }

        [HttpGet]
        [Route( "{bookingId}" )]
        public IActionResult GetBookingById( int bookingId )
        {
            try
            {
                return Ok( _bookingService.GetBookingById(bookingId).ConvertToBookingDto() );
            }
            catch (Exception ex)
            {
                return BadRequest( ex.Message );
            }
        }

        [HttpPost]
        [Route( "create" )]
        public IActionResult CreateBooking( [FromBody] BookingDto booking )
        {
            try
            {
                return Ok( _bookingService.CreateBooking(booking) );
            }
            catch ( Exception ex )
            {
                return BadRequest( ex.Message );
            }
        }

        [HttpDelete]
        [Route( "{bookingId}/delete" )]
        public IActionResult DeleteBooking( int bookingId )
        {
            try
            {
                _bookingService.DeleteBooking(bookingId);
                return Ok();
            }
            catch ( Exception ex )
            {
                return BadRequest( ex.Message );
            }
        }

        [HttpPut]
        [Route("update")]
        public IActionResult UpdateBooking([FromBody] BookingDto booking)
        {
            try
            {
                return Ok( _bookingService.UpdateBooking(booking));
            }
            catch ( Exception ex )
            {
                return BadRequest( ex.Message );
            }
        }
    }
}
