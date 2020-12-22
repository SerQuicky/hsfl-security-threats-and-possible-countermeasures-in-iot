const RaspiCam = require("raspicam");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
