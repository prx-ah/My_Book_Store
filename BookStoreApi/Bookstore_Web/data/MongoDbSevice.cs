using MongoDB.Driver;

namespace Bookstore_Web.data
{
    public class MongoDbSevice
    {
        private readonly IConfiguration _configuration;
        private readonly IMongoDatabase? _database;


        public MongoDbSevice(IConfiguration configuration)
        {
            _configuration = configuration;
            var connectionString = _configuration.GetConnectionString("DbConnection");
            var mongoUrl = MongoUrl.Create(connectionString);
            var mongoClinet = new MongoClient (mongoUrl);
            _database = mongoClinet.GetDatabase(mongoUrl.DatabaseName);
        }


        public IMongoDatabase? Database => _database;
    }
}
