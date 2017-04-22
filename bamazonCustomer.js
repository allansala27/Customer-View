//required NPMs
var mysql = require("mysql");
var inquirer = require("inquirer");

//connection to mySQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "squanch0",
  database: "bamazon_db"
});

//check for connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Welcome to the shop! Here is our inventory: ");  
});

//display contents of products table
connection.query('SELECT * FROM products' , function (err, res) {
	if(err)
		throw err;
	else {
		for(var i = 0; i < res.length; i++) {
			console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + "\n  Price: " + res[i].price + "\n  In Stock: " + res[i].stock_quantity);
		}
	//Run user buy
	userBuy();	
	}
})

//function to ask user what they want to purchase
var userBuy = function () {
	inquirer.prompt([
		{
			name: "product",
			message: "What is the item number you would like to purchase?"
		},
		{
			name: "quantity",
			message: "How many would you like to buy?"
		}
	]).then(function(answers){
		//store answers in vars
		var id = answers.product;
		var amount = answers.quantity;
		var newQuantity = getNewQuantity(id, amount);

		//update values in table
		connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [newQuantity,id], function(){
			
		});
	})
}

var getNewQuantity = function(item, number) {
	connection.query('SELECT stock_quantity FROM products WHERE item_id = ?', [item], function (err, res) {
		if(err)
			throw err;
		else {
			return (res[0].stock_quantity) - number;
		}
	})
}