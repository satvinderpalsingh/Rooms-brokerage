//app.js

const express = require("express");
const cors = require("cors");


const indexRouter = require('./routes/index');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/',indexRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});