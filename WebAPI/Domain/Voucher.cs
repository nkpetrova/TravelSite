namespace WebAPI.Domain
{
    public class Voucher
    {
        public int Id { get;  set; }
        public string Sanatorium { get;  set; }
        public string Address { get;  set; }
        public int Price { get;  set; }
        public int Quantity { get;  set; }

        public Voucher(int id, string sanatorium, string address, int price, int quantity)
        {
            Id = id;
            Sanatorium = sanatorium;
            Address = address;
            Price = price;
            Quantity = quantity;
        }
    }
}