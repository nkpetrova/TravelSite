namespace WebAPI.Domain
{
    public class TurFirma
    {
        public int Id_t { get;  set; }
        public string Name { get;  set; }
        public string Address_t { get;  set; }
        public int Commission { get;  set; }

        public TurFirma(int id_t, string name, string address_t, int commission)
        {
            Id_t = id_t;
            Name = name;
            Address_t = address_t;
            Commission = commission;
        }
    }
}