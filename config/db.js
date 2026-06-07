const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected ✔");
})
.catch((err) => {
    console.log("MongoDB Connection Error ❌");
    console.log(err);
});

module.exports = mongoose;