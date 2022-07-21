using WebAPI.Domain;

namespace WebAPI.Dto
{
    public static class TurfirmaDtoExtensions
    {
        public static TurFirma ConvertToTurfirma(this TurfirmaDto turfirmaDto )
        {
            return new TurFirma
            (
                turfirmaDto.Id_t,
                turfirmaDto.Name,
                turfirmaDto.Address_t,
                turfirmaDto.Commission

            );
        }

        public static TurfirmaDto ConvertToTurfirmaDto( this TurFirma turfirma )
        {
            return new TurfirmaDto
            {
                Id_t = turfirma.Id_t,
                Name = turfirma.Name,
                Address_t = turfirma.Address_t,
                Commission = turfirma.Commission
            };
        }
    }
}
