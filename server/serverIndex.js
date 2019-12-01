const express = require('express')
const cors = require('cors')
const massive = require('massive')
const { json } = require('body-parser')
const session = require('express-session')
require('dotenv').config()

const controller = require(`${__dirname}/controller/controller`)

const app = express()

app.use(cors())
app.use(express.json())
app.use(
  session({
    secret: 'this is my super secret',
    resave: true,
    saveUninitialized: true
  })
)

app.get('/api/login', controller.loginUser)
app.put('/api/logout', controller.logoutUser)

const port = 3110

const send = require('gmail-send')({
  user: process.env.username,
  pass: process.env.password,
  to: 'shahanjaclyn@gmail.com'
})

const getArt = (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance.getArt().then(resp => res.status(200).send(resp))
}
app.get(`/api/getArt`, (req, res) => {
  getArt(req, res)
})

app.post(`/api/sendMessage`, (req, res) => {
  send(
    {
      subject: 'MESSAGE FROM: ' + req.body.name + ' ' + req.body.email,
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${
        req.body.message
      }`
    },
    function (err, res) {
      console.log('* ERROR send() callback returned: err:', err, '; res:', res)
    }
  )
  console.log('Working')
  res.status(200).json((message = 'working'))
})
app.post(`/api/createArt`, (req, res) => {
  const { title, description, size, price, image} = req.body
  console.log('Request received', title, description, size, price, image)
  console.log(req.body)
  const dbInstance = req.app.get('db')
  dbInstance.createArt(title, description, size, price, image).then(() => {
    getArt(req, res)
  })
})
app.get(`/api/getCart`, (req, res) => {
    if (!Array.isArray(req.session.cart)){
        req.session.cart = [];
    } 
    res.status(200).send(req.session.cart)
})
app.post(`/api/cartList`, (req, res) => {
    let newArt = req.body.art //creating a new art object to add a CART ID to it
    newArt.cartId = Math.random()
    console.log(newArt)
//   console.log("Item id: ", req.params.id)
//   console.log("Session ID: ", req.session.id)
  if (!Array.isArray(req.session.cart)){
      req.session.cart = [];
    }
    req.session.cart.push(req.body.art);
    res.status(200).send(req.session.cart);

})

//***WORK ON THIS */
app.delete(`/api/deleteFromCart/:cartId`, (req, res) => {
   for (let i = 0; i < req.session.cart.length; i++ ) {
        if (req.session.cart[i].cartId == req.params.cartId ) {
            req.session.cart.splice(i, 1)
        }
   } 
    res.status(200).send(req.session.cart)
})
app.post(`/api/verifyUser`, (req, res) => {
  console.log('request received')
  const { username, pin } = req.body
  console.log(process.env.pin, process.env.user)
  console.log(username, pin)
  if (username == process.env.user && pin == process.env.pin) {
    res.status(200).send(true)
  } else {
    res.status(200).send(false)
  }
})
app.put(`/api/updateCard`, (req, res) => {
  const { id, title, description, size, price, imageurl } = req.body
  console.log(req.body)
  console.log('Updated', id, title, description, size, price, imageurl)
  const dbInstance = req.app.get('db')
  dbInstance
    .updateCard(id, title, description, size, price, imageurl)
    .then(() => {
      getArt(req, res)
    })
})
app.delete(`/api/deleteArt/:id`, (req, res) => {
  const dbInstance = req.app.get('db') // dbInstance is sql connection instance
  console.log('Deleted', req.params.id) // this id is coming in on my request in my parameters as the id property
  dbInstance.deleteArt(req.params.id).then(resp => getArt(req, res))
})

massive(process.env.connectionString).then(db => {
  app.set('db', db)
  app.listen(3110, () => {
    console.log(`Listening on port ${port}`)
  })
  console.log('Connected to database')
})
