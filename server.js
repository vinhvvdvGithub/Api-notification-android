const express = require("express");

const app = express();
const dotenv = require("dotenv");
//routes
const notification = require("./routes/api/notification");

//Body parser
app.use(express.json());
app.get("/demo",function(req,res){
  res.json("hello world");
})
dotenv.config();
//Mount routers
app.use("/api/notification", notification);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server started port: " + PORT);
});
