import express from 'express'
import bodyParser from 'body-parser'
import cors from "cors"


const app = express()
app.use(cors());
app.set('view engine', 'ejs');

// setup body parser for json request

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


export default app