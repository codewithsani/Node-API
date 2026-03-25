const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/blog", (req, res) => {
  res.send("Hello Blog my name is Sani ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(
    "mongodb+srv://saiedsanibiderooni:v2ngvJkEfitgcsEO@cluster0.axojvav.mongodb.net/?appName=Cluster0",
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));
