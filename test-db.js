require("dotenv").config(); // WAJIB PALING ATAS

const mongoose = require("mongoose");

console.log("ENV CHECK:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("✔ CONNECT BERHASIL");
})
.catch(err => {
    console.log("❌ ERROR:", err.message);
});