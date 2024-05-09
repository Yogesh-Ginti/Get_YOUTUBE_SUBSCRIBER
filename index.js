const app = require('./app');
const dotenv = require('dotenv');
const { connectToMongoDB } = require('./connection');

// Load environment variables from .env file
const config = dotenv.config();
if (config.error) {
    console.error('Error parsing .env file:', config.error);
    process.exit(1); // Exit the process if there's an error
}

// Get PORT from environment variables
const PORT = process.env.PORT || 3000;

// Connection to MongoDB
const url = process.env.MONGO_URL;
connectToMongoDB(url)
    .then(() => {
        // Listen to the server
        app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if there's an error
    });
