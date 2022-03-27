var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var bodyparser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen('3030',()=>{
    console.log('server is running....');
})

// mysql database connection 
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'omulingo'
});

// check db connection 
db.connect((err)=>{
    if(err) throw err;
    else
    {
        console.log('database connected ....');
    }
});


// REST API CURD
app.get('/api',(req,res)=>{
    res.send('Api working');
});


// Create data 
app.post('/api/lecturer',(req,res)=>{

    console.log(req.body);

    // sql query 
    let sql = ` INSERT INTO lecturer(name,email,password,profession)
                VALUES('${req.body.name}','${req.body.email}','${req.body.password}'  
                ,'${req.body.profession}')`;

    // run query 
    db.query(sql,(err,result)=>{
            if(err) throw err;
            res.send('data inserted');
    });        
});


// Read data 
app.get('/api/lecturer_read',(req,res)=>{
    // sql query 
    let sql = `SELECT * FROM lecturer`;
    // run query 
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})

// Read single data 
app.get('/api/lecturer_read/:id',(req,res)=>{
    console.log(req.params.id);
    // sql query 
    let sql = `SELECT * FROM lecturer
                WHERE id = '${req.params.id}'
                `;

    // run query 
    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });          


});








