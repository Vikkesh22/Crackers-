const express = require("express")
const app = express();
const connectDB = require("./config/dp")
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes")
const crackerRoutes = require("./routes/crackers")
const orderRoutes = require("./routes/orders")
require('dotenv').config();

connectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use("/api/cracker", crackerRoutes)
app.use('/api/orders', orderRoutes);

app.get("/",(req,res) => {
    res.send("Api is Working");

    
})

app.listen(4000, () => {
    console.log("Server is up and running");
    
})