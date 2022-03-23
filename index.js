const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routerApi = require('./src/routes');
require('dotenv').config();
const port = process.env.PORT;

/* Ocupamos el puerto por el cual corre el proyecto */
app.listen(port, () => {
    console.log("Active port ", port);
});

/* conectamos con base de datos */
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('Success connection with mongo'))
    .catch((error) => console.error(error))


app.use(express.json());
routerApi(app);