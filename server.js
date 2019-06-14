'use strict'

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const Mailbox = require('./models/mailboxModel')
let handlebars =  require("express-handlebars")

app.engine(".html", handlebars({extname: '.html', defaultLayout: false}))
app.set("view engine", ".html");
app.set('port', process.env.PORT || 3000)
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('main')
})

//GETS create form
app.get('/create', (req, res) => {
  res.render('create')
})

//POSTS new customer data
app.post('/details', (req, res) => {
  let appInfo = new Mailbox(req.body)
  appInfo.save().then(item => {
    res.render('details', {pmb:req.body})
  })
})

//GETS search form & process it
app.get('/search', (req, res) => {
  Mailbox.findOne({'pmb':req.query.pmb}, (err, items) => {
      if (err) return next(err)
      res.render('search', {pmb:items})
  })
})

//GETS update form
app.get('/update', (req, res) => {
  res.render('update')
})

//POST updated info for existing customer

//GETS customer to be deleted
app.get('/delete', (req, res) => {
  res.render('delete')
})

app.listen(app.get('port'), () => {
    console.log('Express started')
})