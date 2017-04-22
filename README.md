# HW - {Customer-View}

## Description
This application is a medium between a product database and the user. The user can manipulate the quantity of the products available in the database. 

## Requirements
- Use of a MySQL database
- Use Javascript to manilpulate the data


## Technologies Used
- MySQL for Database use
- Node.js to run application
- Inquirer NPM to prompt user for information

## Code Explaination
- After establishing a connection to the proper database, I displayed a console message exhibiting that a connection has been made.
- I used a connection query to access the database items and a for loop to display them to the console.
- An inquirer prompt asks the user which item they would like to purchase and how many.
	- These values are passed to a function which calculates the the new inventory after the user has purchased the items and returns it to the calling variable.
- The values are then used to update the proper fields in the database.