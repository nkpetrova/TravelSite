namespace WebAPI.Dto
{
    public class VoucherDto
    {
        public int Id { get;  set; }
        public string Sanatorium { get;  set; }
        public string Address { get;  set; }
        public int Price { get;  set; }
        public int Quantity { get;  set; }
    }
}