const app = require('./app');
const dotenv = require('dotenv');
const { connectToMongoDB } = require('./connection');

// Load environment variables 
dotenv.config();

// Validate environment variables
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;


// Connection to MongoDB

connectToMongoDB(MONGO_URI)
    .then(() => {
        // Listen to the server
        app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(9); // Exit the process if there's an error
    });
