const express = require("express");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config()

const app = express();

app.use(cors());
app.use(express.json());

const port = 3110

massive(process.env.connectionString).then((db) => {
    app.set("db", db)
    app.listen(3110, () => {
        console.log(`Listening on port ${port}`)
    })
    console.log("Connected to database")
})