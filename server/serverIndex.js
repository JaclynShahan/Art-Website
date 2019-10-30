const express = require("express");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config()

const app = express();

app.use(cors());
app.use(express.json());

const port = 3110

const getArt = (req, res) => {
    const dbInstance = req.app.get("db")
    dbInstance.getArt().then((resp) => res.status(200).send(resp))
}
app.get(`/api/getArt`, (req, res) => {
    getArt(req, res)
})

app.post(`/api/createArt`, (req, res) => {
    const {title, description, size, price} = req.body
    console.log("Request received", title, description, size, price)
    console.log(req.body)
    const dbInstance = req.app.get("db")
    dbInstance.createArt(title, description, size, price)
    .then(() => {
        getArt(req, res)
    })
})

app.delete(`/api/deleteArt/:id`, (req, res) => {
    const dbInstance = req.app.get("db")
    dbInstance.deleteArt(req.params.id).then((resp) => getArt(req, res))
})

massive(process.env.connectionString).then((db) => {
    app.set("db", db)
    app.listen(3110, () => {
        console.log(`Listening on port ${port}`)
    })
    console.log("Connected to database")
})