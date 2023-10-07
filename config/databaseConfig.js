require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const { default: mongoose } = require("mongoose");
const uri = process.env.MONGO_CONNECTION_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await mongoose.connect(uri, {
      dbName: "BlogApplication",
    });
    // Send a ping to confirm a successful connection
    await client.db("BlogApplication").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    // Ensures that the client will close when you finish/error
    // await client.close();
    console.log(error);
  }
}

module.exports = connectDB;
