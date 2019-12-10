DROP DATABASE IF EXISTS Bamazon; 
CREATE DATABASE Bamazon; 

USE Bamazon;

DROP TABLE IF EXISTS products; 

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY UNIQUE,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(5) NOT NULL
);



SELECT * FROM products;

-- select * from products where price < 10;
-- select * from products where stock_quantity > 10;

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("LG 4k Moniter", "Computer Electornics", 1196.99, 10);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Adidas Ultraboost", "Shoes", 118.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("JBL Charge 3 speaker", "Electronics", 99.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Bose Quiet Comfort Headphones", "Electornics", 300.99, 3);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Can-Am ATV", "Automotive", 1000.00, 10);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Javascript & jQuery", "Books", 30.00, 11);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Thge Flavour Bible", "Books", 20.00, 10);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("USB C Wall Charger", "Accessories", 40.00, 8);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Roku", "Computer Electornics", 80.00, 100);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("5 Piece Drum Set", "Instraments", 250.00, 5);