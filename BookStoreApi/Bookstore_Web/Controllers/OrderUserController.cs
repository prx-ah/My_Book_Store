using Bookstore_Web.data;
using Bookstore_Web.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Bookstore_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderUserController : ControllerBase
    {
        private readonly IMongoCollection<OrderUsr>? _order;

        public  OrderUserController(MongoDbSevice mongoDbSevice) {


            _order = mongoDbSevice.Database?.GetCollection<OrderUsr>("orderUsr");
        }

        [HttpGet]
        public async Task<IEnumerable<OrderUsr>> Get()
        {
            return await _order.Find(FilterDefinition<OrderUsr>.Empty).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderUsr>> GetById(string id)
        {
             
            var filter = Builders<OrderUsr>.Filter.Eq(x => x.OrderNumber, id);

            
            var customer = _order.Find(filter).FirstOrDefault();

            
            return customer is not null ? Ok(customer) : NotFound();
        }

        [HttpPost]
        public async Task<ActionResult> Create(OrderUsr customer)
        {
            
            await _order.InsertOneAsync(customer);

            return CreatedAtAction(nameof(GetById), new { id = customer.Id }, customer);
        }

        [HttpPut]
        public async Task<ActionResult> Update(OrderUsr customer)
        {
            
            var filter = Builders<OrderUsr>.Filter.Eq(x => x.Id, customer.Id);

         
            await _order.ReplaceOneAsync(filter, customer);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)

        {
            var filter = Builders<OrderUsr>.Filter.Eq(x => x.OrderNumber, id);
            var result = await _order.DeleteOneAsync(filter);

            if (result.DeletedCount == 0)
            {
                return NotFound();
            }

            return Ok("delete success");
        }



    }
}
