const sql = require('./query.js')
let express = require('express')
let exphbs = require('express-handlebars')
let bodyParser = require('body-parser')

let simpleInsert = (id, message) => {
  let firstPortion = 'insert into Tokens (Tokens.forId, Tokens.message) values ('
  return firstPortion + id + ', ' + '\'' + message + '\'' + ')'
}

let simpleSelect = (forId) => {
  let firstPortion = 'select Tokens.forId, Tokens.message from Tokens where Tokens.forId = '
  return firstPortion + forId
}

let app = express()
app.use(bodyParser.urlencoded({ extended: true }))

let hbs = exphbs.create({
  defaultLayout: 'main',
  partialsDir: 'views/partials'

})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.post('/insertMsg', (req, res) => {
  let query = simpleInsert(req.body.forId, req.body.message)
  sql(query)
  res.render('home', {
    title: 'Id and message should be inserted!'
  })
})

app.get('/get/:id', (req, res) => {
  console.log(req.params.id)
  let reqId = req.params.id
  sql(simpleSelect(reqId))
    .then((result) => {
      let respId = result[0][0].forId
      let resMsg = result[0][0].message
      let responseObj = {
        'forId': respId,
        'message': resMsg
      }
      res.send(responseObj)
    })
})

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Hello world'
  })
  console.log('loading home')
})

app.listen(80, () => console.log('Now listening on port 80'))
