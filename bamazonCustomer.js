var inquirer = require("inquirer");
var mysql = require("mysql");
var cliTable = require("cli-table");
var chalk = require("chalk")



var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'helloworld',
    database: 'Bamazon'

});


connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected as id: ' + connection.threadId);
    showProducts();
});

// shows the database in a cli table
function showProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        var table = new cliTable({
            head: ["Item Number", "Product Name", "Department", "Price", "Stock"],
            colWidths: [13, 35, 30, 13, 13],
        });

        for (var i = 0; i < res.length; i++) {
            table.push(
                [
                    res[i].item_id,
                    res[i].product_name,
                    res[i].department_name,
                    "$ " + res[i].price,
                    res[i].stock_quantity
                ]
            );
        };

        console.log(chalk.white(table.toString()));
        buy();
    });
}

function buy() {
    inquirer
        .prompt([{
                type: "input",
                name: "item",
                message: chalk.yellow("What is the ID of the product that you would like to buy:"),
                validate: function (value) {
                    if (isNaN(value) == false && value < 10 && value > 0) {
                        return true;
                    } else {
                        console.log(chalk.red.bold(" Please enter a correctly number.." + "\r\n"));
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "amount",
                message: chalk.yellow("How many units of the product would you like to buy:"),
                validate: function (value) {
                    if (isNaN(value) == false && value > 0) {
                        return true;
                    } else {
                        console.log(chalk.red.bold(" Please enter a correctly number.." + "\r\n"));
                        return false;
                        clear();
                        
                    }
                }
            }
        ])
        .then(function (answer) {
            var itemId = answer.item;
            var amount = answer.amount;
           
            connection.query("SELECT * FROM products WHERE item_id=?", itemId, function(err, res) {
                for (var i = 0; i < res.length; i++) {
    
                    if (amount > res[i].stock_quantity) {
    
                      console.log("---------------------------------");
                      console.log(chalk.red.bold("Insufficient quantity!"));
                      console.log("---------------------------------");
                      showProducts();
    
                    } else {
                        var newStock = (res[i].stock_quantity - amount);
                        var table = new cliTable({
                            head: ['Item', 'Department', 'Price', 'Quantity', 'Total'],
                            colWidths: [35, 30, 13, 13, 13],
                          });
                      
                          for (var i = 0; i < res.length; i++) {
                            table.push(
                                [
                                  res[i].product_name,
                                  res[i].department_name, 
                                  "$" + res[i].price, 
                                  amount, 
                                  "$" + res[i].price * amount
                                ]
                              );
                          }
                      
                        console.log(chalk.white(table.toString()));
                        confirmPrompt(newStock, itemId);
                    }
                }
            });
        });
}

function confirmPrompt(newStock, itemId) {

    inquirer.prompt([{

        type: "confirm",
        name: "confirmPurchase",
        message: chalk.yellow("Would you like to purchase anything else?"),
        default: true

    }]).then(function(userConfirm) {
        if (userConfirm.confirmPurchase === true) {
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: newStock
            }, {
                item_id: itemId
            }], function(err, res) {});

            console.log("---------------------------------");
            console.log("                                 ");
            console.log("Please selet another order......");
            console.log("                                 ");
            console.log("---------------------------------");
            showProducts();;
        } else {
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: newStock
            }, {
                item_id: itemId
            }], function(err, res) {});

            console.log("---------------------------------");
            console.log("                                 ");
            console.log("Thank you! See you next time!");
            console.log("                                 ");
            console.log("---------------------------------");
            connection.end();
        }
    });
    
}
