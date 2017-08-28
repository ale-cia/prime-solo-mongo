//Create a collection named orders.
db.createCollection('orders');

//Insert at least 3 documents that represent orders. IMPORTANT: See section below for fields. Order dates should be: 2017-02-03, 2017-04-04, 2017-01-02
{ "_id" : ObjectId("599efbb9ab10c85e9c2ab979"), "orderDate" : "2017-02-03", "orderTotal" : 79.99, "lineItems" : [ { "unitPrice" : 2.99, "quantity" : 1, "productName" : "plush circus animals" } ] }
{ "_id" : ObjectId("599efcecab10c85e9c2ab97a"), "orderDate" : "2017-04-04", "orderTotal" : 179.99, "lineItems" : [ { "unitPrice" : 179.99, "quantity" : 1, "productName" : "Car parts" } ] }
{ "_id" : ObjectId("599efd4cab10c85e9c2ab97b"), "orderDate" : "2017-01-02", "orderTotal" : 50000.99, "lineItems" : [ { "unitPrice" : 50000.99, "quantity" : 1, "productName" : "Passport" } ] }

//Find all orders and make them look pretty.
db.orders.find().pretty();
{
	"_id" : ObjectId("599efbb9ab10c85e9c2ab979"),
	"orderDate" : "2017-02-03",
	"orderTotal" : 79.99,
	"lineItems" : [
		{
			"unitPrice" : 2.99,
			"quantity" : 1,
			"productName" : "plush circus animals"
		}
	]
}
{
	"_id" : ObjectId("599efcecab10c85e9c2ab97a"),
	"orderDate" : "2017-04-04",
	"orderTotal" : 179.99,
	"lineItems" : [
		{
			"unitPrice" : 179.99,
			"quantity" : 1,
			"productName" : "Car parts"
		}
	]
}
{
	"_id" : ObjectId("599efd4cab10c85e9c2ab97b"),
	"orderDate" : "2017-01-02",
	"orderTotal" : 50000.99,
	"lineItems" : [
		{
			"unitPrice" : 50000.99,
			"quantity" : 1,
			"productName" : "Passport"
		}
	]
}

//Find all orders with an orderDate that is after 1/31/2017.
db.orders.find({orderDate:{$gt: '2017-01-31'}});

//Change the orderTotal from 2/3/2017 to 63 dollars (you do NOT have to ensure the lineItems' unitPrice * quantity add up to the orderTotal)

orders.update({'orderTotal.0.price'})
//Add another lineItem to the order from 4/4/2017


//Change the first lineItem in the order from 1/2/2017 to be for 2 'transistor radio's


//Find orders with lineItems that have a quantity that is less than 10, but greater than 2. You will have to research $and