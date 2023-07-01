// Import the required modules
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://levymcruz:Mae97330060.@levydb.tqcncfd.mongodb.net/';

// Database Name
const dbName = 'finances';

// Function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    // Create a new MongoClient
    const client = new MongoClient(url);

    // Connect the client to the server
    await client.connect();

    // Access the database
    const db = client.db(dbName);
    console.log('Connected to the database successfully.');

    // Return the database connection
    return db;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
