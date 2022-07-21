using WebAPI.Repositories;
using WebAPI.Services;

var builder = WebApplication.CreateBuilder( args );

builder.Services.AddControllers();
builder.Services.AddScoped<ITurfirmaRepository>( s =>
    new TurfirmaRepository( builder.Configuration.GetValue<string>( "DefaultConnection" ) ) );
builder.Services.AddScoped<ITurfirmaService, TurfirmaService>();

builder.Services.AddScoped<IVoucherRepository>( s =>
    new VoucherRepository( builder.Configuration.GetValue<string>( "DefaultConnection" ) ) );
builder.Services.AddScoped<IVoucherService, VoucherService>();

builder.Services.AddScoped<IBookingRepository>( s =>
    new BookingRepository( builder.Configuration.GetValue<string>( "DefaultConnection" ) ) );
builder.Services.AddScoped<IBookingService, BookingService>();

var app = builder.Build();
app.MapControllers();
app.Run();