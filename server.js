const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded());

const db = require("./src/utils/mongodb");

app.use(express.json());

app.use('/login', (req, res) => {
   res.send({
     token: 'test123'
   });
 });

const user = require("./src/routes/user");
app.use("/user", user);

const routines = require("./src/routes/userRoutines");
app.use("/routines", routines);

const dayRoutine = require("./src/routes/dayRoutine");
app.use("/dayroutine", dayRoutine);

app.listen(process.env.PORT || 80, () => {
   console.log("Server on port 3000");
});
