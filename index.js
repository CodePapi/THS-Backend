const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
let port = process.env.PORT || 5000
// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose
let uri="mongodb+srv://major:major@cluster0.el0eg.gcp.mongodb.net/major?retryWrites=true&w=majority"
mongoose.connect(
  // process.env.MONGODB_CONNECTION_STRING,
uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);
app.use(express.cookieParser());
app.use(express.session({secret:'yoursecret', cookie:{maxAge:6000}}));

app.use(function(req, res, next) {
  // if now() is after `req.session.cookie.expires`
  //   regenerate the session
  next();
});
// set up routes
app.use("/posts", require("./routes/twohalfstory_controllers"))
app.use("/users", require("./routes/userRouter"));
