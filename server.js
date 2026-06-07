require("dotenv").config(); // HARUS PERTAMA

require("./config/db");
const express = require("express");
const Device = require("./models/Device");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {

    const devices = await Device.find();

    const total = devices.length;

    const online = devices.filter(
        d => d.status === "Online"
    ).length;

    const offline = devices.filter(
        d => d.status === "Offline"
    ).length;

    res.render("dashboard", {
    devices,
    devicesJson: JSON.stringify(devices),
    total,
    online,
    offline
});

});

app.post("/add-device", async (req, res) => {

    await Device.create({
        deviceId: req.body.deviceId,
        nama: req.body.nama
    });

    res.redirect("/");

});

app.get("/tracker/:deviceId", (req, res) => {

    res.render("tracker", {
        deviceId: req.params.deviceId
    });

});

app.get("/delete-device/:id", async (req, res) => {

    await Device.findByIdAndDelete(
        req.params.id
    );

    res.redirect("/");

});

app.post("/update-location", async (req, res) => {

    console.log(req.body);

    const {
        deviceId,
        latitude,
        longitude
    } = req.body;

    const device = await Device.findOneAndUpdate(
        {
            deviceId: deviceId
        },
        {
            latitude: latitude,
            longitude: longitude,
            status: "Online",
            lastUpdate: new Date()
        },
        {
            new: true
        }
    );

    console.log(device);

    res.json({
        success: true
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server berjalan di port " + PORT);
});

console.log("MONGODB:", process.env.MONGODB_URI);