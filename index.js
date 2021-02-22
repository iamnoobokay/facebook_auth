const express = require('express')
const {json} = require('body-parser')
const passport = require('passport')

// import { connect } from "./utils/db";
const userRouter = require("./user/router/router")

const app = express();
const port = 3000;

app.use(passport.initialize());

app.use(json());
app.use("/", userRouter);

app.listen(port, async () => {
//   await connect();
  console.log(`Server listening on ${port}`);
});
