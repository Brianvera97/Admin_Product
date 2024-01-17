
const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;


require('./config/mongoose.config');

app.use(
    cors(
    ))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//ROUTES

const productRoutes = require("./routes/product.routes")
app.use("/api/product", productRoutes)

app.listen(port, () => console.log(`Listening on port: ${port}`));