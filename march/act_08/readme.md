1. Run the Following Command

In your project directory, open a terminal and run:

npm init -y

This will generate a package.json file with default values.


2. Install Required Dependencies

Since your project uses Express, Mongoose, and CORS, install them with:

npm install express mongoose cors

For development, you might also want nodemon to restart the server automatically on file changes:

npm install --save-dev nodemon

3. Update package.json

After running the commands, open package.json and update the "scripts" section to include:

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}


Now, you can:

    Start the server normally with:

npm start

Use nodemon for development with:

    npm run dev

4. Verify the Setup

Run:

node server.js

or

npm start

Then, visit http://localhost:3000 to check if it's working.


in package.json 


{
  "name": "crud-node-docker",
  "version": "1.0.0",
  "description": "A simple CRUD app with Node.js, Express, MongoDB, and Docker",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.2.3",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  },
  "author": "",
  "license": "MIT"
}
