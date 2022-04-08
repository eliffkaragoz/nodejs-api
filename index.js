var express = require('express');
var mysql = require('mysql2');
var cors = require('cors');
var bodyparser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());  /* bodyParser.json() is deprecated */
// routers
const router = require('./routes/lecturerRouter.js')
app.use('/api/lecturers', router)



app.listen('3000',()=>{
    console.log('server is running....');
})
