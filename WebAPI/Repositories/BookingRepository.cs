using System.Data;
using System.Data.SqlClient;
using WebAPI.Domain;

namespace WebAPI.Repositories
{
    public class BookingRepository : IBookingRepository
    {
        private readonly string _connectionString;

        public BookingRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Booking> GetAll()
        {
            var result = new List<Booking>();

            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "select [Id], [Date], [Turfirma_id], [Voucher_id], [Quantity], [Price] from [Booking]";

            using SqlDataReader reader = sqlCommand.ExecuteReader();
            while (reader.Read())
            {
                result.Add(new Booking(
                    Convert.ToInt32(reader["Id"]),
                    Convert.ToString(reader["Date"]),
                    Convert.ToInt32(reader["Turfirma_id"]),
                    Convert.ToInt32(reader["Voucher_id"]),
                    Convert.ToInt32(reader["Quantity"]),
                    Convert.ToInt32(reader["Price"])
                ));
            }

            return result;
        }

        public int Create(Booking booking)
        {
            if (booking == null)
            {
                throw new ArgumentNullException(nameof(booking));
            }

            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "INSERT INTO [Booking] VALUES (@date, @turfirma_id, @voucher_id, @quantity, @price)";

            sqlCommand.Parameters.Add("@date", SqlDbType.NVarChar, 100).Value = booking.Date;
            sqlCommand.Parameters.Add("@turfirma_id", SqlDbType.Int).Value = booking.Turfirma_id;
            sqlCommand.Parameters.Add("@voucher_id", SqlDbType.Int).Value = booking.Voucher_id;
            sqlCommand.Parameters.Add("@quantity", SqlDbType.Int).Value = booking.Quantity_b;
            sqlCommand.Parameters.Add("@price", SqlDbType.Int).Value = booking.Price_b;

            return Convert.ToInt32(sqlCommand.ExecuteScalar());
        }

        public void Delete(Booking booking)
        {
            if (booking == null)
            {
                throw new ArgumentNullException(nameof(booking));
            }

            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "delete [Booking] where [Id] = @id";
            sqlCommand.Parameters.Add("@id", SqlDbType.Int).Value = booking.Id_b;

            sqlCommand.ExecuteNonQuery();
        }

        public Booking GetById(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "select [Id], [Date], [Turfirma_id], [Voucher_id], [Quantity], [Price] from [Booking] where [Id] = @id";
            sqlCommand.Parameters.Add("@id", SqlDbType.Int).Value = id;

            using SqlDataReader reader = sqlCommand.ExecuteReader();
            if (reader.Read())
            {
                return new Booking(
                    Convert.ToInt32(reader["Id"]),
                    Convert.ToString(reader["Date"]),
                    Convert.ToInt32(reader["Turfirma_id"]),
                    Convert.ToInt32(reader["Voucher_id"]),
                    Convert.ToInt32(reader["Quantity"]),
                    Convert.ToInt32(reader["Price"])
                    );
            }
            else
            {
                return null;
            }
        }

        public int Update(Booking booking)
        {
            if (booking == null)
            {
                throw new ArgumentNullException(nameof(booking));
            }

            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "update [Booking] set [Date] = @date, [Turfirma_id] = @turfirma_id, [Voucher_id] = " +
                "@voucher_id, [Quantity] = @quantity, [Price] = @price where [Id] = @id";

            sqlCommand.Parameters.Add("@date", SqlDbType.NVarChar, 100).Value = booking.Date;
            sqlCommand.Parameters.Add("@turfirma_id", SqlDbType.Int).Value = booking.Turfirma_id;
            sqlCommand.Parameters.Add("@voucher_id", SqlDbType.Int).Value = booking.Voucher_id;
            sqlCommand.Parameters.Add("@quantity", SqlDbType.Int).Value = booking.Quantity_b;
            sqlCommand.Parameters.Add("@price", SqlDbType.Int).Value = booking.Price_b;
            sqlCommand.Parameters.Add("@id", SqlDbType.Int).Value = booking.Id_b;

            return Convert.ToInt32(sqlCommand.ExecuteScalar());
        }
    }
}