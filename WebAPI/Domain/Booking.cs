namespace WebAPI.Domain
{
    public class Booking
    {
        public int Id_b { get;  set; }
        public string Date { get;  set; }
        public int Turfirma_id { get;  set; }
        public int Voucher_id { get;  set; }
        public int Quantity_b { get;  set; }
        public int Price_b { get;  set; }

        public Booking(int id_b, string date, int turfirma_id, int voucher_id, int quantity_b, int price_b)
        {
            Id_b = id_b;
            Date = date;
            Turfirma_id = turfirma_id;
            Voucher_id = voucher_id;
            Quantity_b = quantity_b;
            Price_b = price_b;
        }
    }
}