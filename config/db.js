const mongoose = require("mongoose");

console.log("MONGODB:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Mongo Error:", err));
