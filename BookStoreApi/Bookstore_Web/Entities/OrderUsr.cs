using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Bookstore_Web.Entities
{
    public class OrderUsr
    {

        [BsonId]
        [BsonElement ("_id"),BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }  

        [BsonElement("order_number"), BsonRepresentation(BsonType.String)]
        public string OrderNumber { get; set; } = "";

        [BsonElement("title_of_book"), BsonRepresentation(BsonType.String)]
        public string TitleOfBook { get; set; } = "";

        [BsonElement("price"), BsonRepresentation(BsonType.Double)]
        public long Price { get; set; } = 0;

        [BsonElement("store"), BsonRepresentation(BsonType.String)]
        public string Store { get; set; } = "";

        [BsonElement("total_pain"), BsonRepresentation(BsonType.Double)]
        public long TotalPaid { get; set; } = 0;
    }
}
