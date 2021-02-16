const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const api = require('./routes/api');

dotenv.config();
app.use(bodyParser.json());

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected to the data base!!');
    })
    .catch((err) => {
        console.log(`error connecting ${err}`);
    })

app.use('/', api);
app.listen(3000, () => console.log("app is listening to port 3000"));

// const cors = require('cors');

// app.use(cors());
// app.all('/', function (req, res, next) {
//     res.header("Access-Control-Origion", "*");
//     res.header("Access-Control-Headers", "*");
//     next();
// })