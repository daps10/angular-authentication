
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3001;

// Import routes here
const api = require("./routes/api");

// created instance of express.
const app = express();

// user cors middleware to handle cors error
app.use(cors())
// use bodyparser to handle json data
app.use(bodyParser.json());

// for use to create endpoint from bellow routes.
app.use ('/api', api)

app.get("/", (req, res) => {
    res.send("Hello from server");
})

// listen request on specific port
app.listen(PORT, () => {
    console.log("server running on localhost : " + PORT);
});