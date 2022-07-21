using System.Data;
using System.Data.SqlClient;
using WebAPI.Domain;

namespace WebAPI.Repositories
{
    public class VoucherRepository : IVoucherRepository
    {
        private readonly string _connectionString;

        public VoucherRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Voucher> GetAll()
        {
            var result = new List<Voucher>();

            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "select [Id], [Sanatorium], [Address], [Price], [Quantity] from [Voucher]";

            using SqlDataReader reader = sqlCommand.ExecuteReader();
            while (reader.Read())
            {
                result.Add(new Voucher(
                    Convert.ToInt32(reader["Id"]),
                    Convert.ToString(reader["Sanatorium"]),
                    Convert.ToString(reader["Address"]),
                    Convert.ToInt32(reader["Price"]),
                    Convert.ToInt32(reader["Quantity"])
                ));
            }
            return result;
        }

        public int Create(Voucher voucher)
        {
            if (voucher == null)
            {
                throw new ArgumentNullException(nameof(voucher));
            }

            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "INSERT INTO [Voucher] VALUES (@sanatorium, @address, @price, @quantity)";

            sqlCommand.Parameters.Add("@sanatorium", SqlDbType.NVarChar, 100).Value = voucher.Sanatorium;
            sqlCommand.Parameters.Add("@address", SqlDbType.NVarChar, 100).Value = voucher.Address;
            sqlCommand.Parameters.Add("@price", SqlDbType.Int).Value = voucher.Price;
            sqlCommand.Parameters.Add("@quantity", SqlDbType.Int).Value = voucher.Quantity;
            return Convert.ToInt32(sqlCommand.ExecuteScalar());
        }

        public void Delete(Voucher voucher)
        {
            if (voucher == null)
            {
                throw new ArgumentNullException(nameof(voucher));
            }

            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "delete [Voucher] where [Id] = @id";
            sqlCommand.Parameters.Add("@id", SqlDbType.Int).Value = voucher.Id;

            sqlCommand.ExecuteNonQuery();
        }

        public Voucher GetById(int id)
        {
            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "select [Id], [Sanatorium], [Address], [Price], [Quantity] from [Voucher] where [Id] = @id";
            sqlCommand.Parameters.Add("@id", SqlDbType.Int).Value = id;

            using SqlDataReader reader = sqlCommand.ExecuteReader();
            if (reader.Read())
            {
                return new Voucher(
                    Convert.ToInt32(reader["Id"]),
                    Convert.ToString(reader["Sanatorium"]),
                    Convert.ToString(reader["Address"]),
                    Convert.ToInt32(reader["Price"]),
                    Convert.ToInt32(reader["Quantity"])
                    );
            }
            else
            {
                return null;
            }
        }

        public int Update(Voucher voucher)
        {
            if (voucher == null)
            {
                throw new ArgumentNullException(nameof(voucher));
            }

            using var connection = new SqlConnection(_connectionString);
            connection.Open();

            using SqlCommand sqlCommand = connection.CreateCommand();
            sqlCommand.CommandText = "update [Voucher] set [Sanatorium] = @sanatorium, [Address] = " +
                "@address, [Price] = @price, [Quantity] = @quantity  where [Id] = @id";
            sqlCommand.Parameters.Add("@id", SqlDbType.Int).Value = voucher.Id;
            sqlCommand.Parameters.Add("@sanatorium", SqlDbType.NVarChar, 100).Value = voucher.Sanatorium;
            sqlCommand.Parameters.Add("@address", SqlDbType.NVarChar, 100).Value = voucher.Address;
            sqlCommand.Parameters.Add("@price", SqlDbType.Int).Value = voucher.Price;
            sqlCommand.Parameters.Add("@quantity", SqlDbType.Int).Value = voucher.Quantity;

            return Convert.ToInt32(sqlCommand.ExecuteScalar());
        }
    }
}