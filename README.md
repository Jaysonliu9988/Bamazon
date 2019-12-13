# Bamazon
Bamazon

# Overview
Bamazon is an Amazon-like storefront which utilizes MySQL and node.js. The app will take in orders from customers and deplete stock from the store's inventory.

# Bamazon Customer View
Running ' node bamazonCustomer.js` will first display all of the items available for sale. This will include the ids, names, departments, prices of products for sale and the stock quantity.

![gify1](screenshot/preview.gif)

- The app will then prompt users with two messages.
- The first will ask for the ID of the product that they would like to buy.
- The second message will ask how many units of the product they would like to buy.


![gify2](screenshot/inputID.gif)



- Once the customer has placed the order, the application will check if the store has sufficient product items to meet the customer's request.

- If there is enough stock_quantitiy to fulfill the order the app will show the user the name, department, price, quantity, and toatal amount for the purchase.







![gify3](screenShot/successOrder.gif)






- If not, the app will log the phrase Insufficient quantity!, and prevent the order from going through.

![gif4](screenShot/Insufficient.gif)





- If the user input a non-number or "0" in chose ID, it will be remaind you "Please enter a correctly number...", until you input a correctly number.


![gify5](screenShot/checkId.gif)


- If the user input a non-number or "0" in chose quantity, it will be remaid you "Please enter a correctly number..." as well, until you input a correctly quantity number.


![gify6](screenShot/checkQuantity.gif)


- The app will then promt the user "Would you like to purchase anything else?"
- If the user selects yes the app will log the phrase "Please select another order..." and the app will then prompt users with two messages again.
- The database will be updated with the subtraction of the quanitity of the product chosen by the user.

![gif7](screenShot/stockOrder.gif)









-If the user choses no, the app will log the phrase "Thank you! See you next time!"

![gif8](screenShot/no.gif)












# Technology Used

- Node.js
- NPM packages
  - inquirer 
  - mysql 
  - cli-table
  - chalk

# Author

Jayson Liu
