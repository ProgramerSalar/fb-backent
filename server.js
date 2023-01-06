const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const { readdirSync } = require("fs");
const app = express();
app.use(cors());

readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

// database
mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB CONNECTED are successfully established"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server is lestining... hello how are you?");
});
