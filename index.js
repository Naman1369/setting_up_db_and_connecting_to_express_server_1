require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3010;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to database"))
.catch((err) => console.error("Error connecting to database:", err));


app.get('/', (req, res) => {
    res.send("Customer Management System Backend");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
