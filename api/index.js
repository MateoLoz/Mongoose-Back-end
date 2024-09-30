const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const port = 3336;



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
const {mongooseconection} = require('../controller/mongocontroller');
app.use(require('../router/router'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

mongooseconection();



app.get('/', (req,res)=>{
    res.send('Mongo serverside!');
})





const {postdeportist ,getdeportist,  getdeportistbyname, getdeportistbyapellido, deletedeportist } = require('../controller/mongoquery');


app.use('/api/getdeportistas',getdeportist);
app.use('/api/posts',postdeportist);
app.use('api/getbyname', getdeportistbyname);
app.use('api/getbyapellido', getdeportistbyapellido);
app.use('api/deletedeportistas', deletedeportist);




















app.listen(port);
