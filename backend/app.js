const express = require("express");
const Cors = require("cors");
const testimonyRouter = require("./routes/testimony");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());
app.use(Cors());

app.use("/api/testimonies", testimonyRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
