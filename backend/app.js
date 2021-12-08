const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

require("dotenv").config()
//Define the port
const port = process.env.PORT || 5000;

//Allow CORS
app.use(cors());
app.use(express.json())

//Initialize Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Import Routes
const usersRoute = require("./routes/users");
const signupRoute = require("./routes/signup");
const guestRoute = require("./routes/guest");
const viewRoute = require("./routes/view");
const authRoute = require("./routes/auth");
//Use Routes
app.use("/users", usersRoute);
app.use("/signup", signupRoute);
app.use("/guest", guestRoute);
app.use("/view", viewRoute);
app.use("/auth", authRoute);

const connection_string = process.env.CONNECTION_STRING
/*app.get("/", (req, res) => {
  var options = {
        root: path.join(__dirname)
    };
   var fileName = "../frontend/public/country_desc.json"
  //res.sendFile(path.join(__dirname, "public/index.html"));
  res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});*/

app.get("/", (req,res) => {
	//res.json(../frontend/public/country_desc.json)
	res.json([{"_id":"61af05c747a1c624babefd74","country_name":"Norway","desc":"The Land of the Midnight Sun, known for fjords along the coastline, Christmas markets and the magical Northern Lights","image":"https://cdn.britannica.com/64/94864-050-223C3FE6/Northern-lights-sky-Kautokeino.jpg","tnumber":"O401"},{"_id":"61af065f47a1c624babefd75","country_name":"Singapore","desc":"The City In A Garden, it is a thriving metropolis offering a world-class infrastructure. The Merlion, Sentosa Island, Universal Studios....plenty to see here","image":"https://www.thoughtco.com/thmb/h2rufV1n9LVbA4jaOzXUuJMATVw=/2121x1414/filters:fill(auto,1)/singapore--garden-by-the-bay--supertree-grove-638256268-fa59e7e78b6449aaa40f68eafe6ff1a1.jpg","tnumber":"S301"},{"_id":"61af85e1c565b5b329e181ed","country_name":"India","desc":"29 states, each with a different story, culture, experience....this place is the complete package. From The Himalayas to The Indian Ocean, you'll find it all here","image":"http://cdn.cnn.com/cnnnext/dam/assets/210328210341-taj-mahal.jpg","tnumber":"M201"}])
});

//Database Connection
/*mongoose.connect(
    "mongodb+srv://root:bunny@cluster0-alh36.gcp.mongodb.net/Tourism?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
mongoose.connect(
    "mongodb://localhost:27017/tourism_WT_proj",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((error) => {
    console.log(error);
  });*/
  
mongoose.connect(connection_string, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true }
)
.then( () => console.log("Database connection established"))
.catch( (error) => console.error("DB connection failed:",error.message))

app.listen(port, () => {
  console.log("Server Started on port ", port);
});
