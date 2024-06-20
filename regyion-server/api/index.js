const express = require("express")
const bodyParser = require("body-parser")

const app = express()
require("../routes/rsRoutes")(app)

const PORT = process.env.PORT || 5000

// body-parser

app.use(bodyParser.json())


app.listen(PORT, ()=>{
    console.log(`server startred on port ${PORT}`)
})
 

module.exports = app