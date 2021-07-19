const express = require("express");
const Cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/Auth.route");
const userRoute = require("./routes/User.route");
const movieRoute = require("./routes/Movie.route");
const listRoute = require("./routes/List.route");

// app config
const app = express();
dotenv.config();
const Port = process.env.PORT || 8700;

// middleware
app.use(express.json());
app.use(Cors());

// db config
mongoose
  .connect(process.env.URI_MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connect to database successfully"))
  .catch((err) => {
    console.error(err);
  });

// endpoint
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

// listen
app.listen(Port, () => {
  console.log("server running on port : " + Port);
});
