const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const port = 3336;

const corsOptions = {
    origin: 'http://localhost:5173,
};


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));
app.use(bodyparser.urlencoded({extended: true}));
const {mongooseconection} = require('../controller/mongocontroller');
app.use(require('../router/router'));


mongooseconection();



app.get('/', (req,res)=>{
    res.send('Mongo serverside!');
})





const {postdeportist ,getdeportist,  getdeportistbyname, getdeportistbyapellido, deletedeportist } = require('../controller/mongoquery');


app.use('/api/getdeportistas',getdeportist);
app.use('/api/posts',cors(corsOptions),postdeportist);
app.use('api/getbyname', getdeportistbyname);
app.use('api/getbyapellido', getdeportistbyapellido);
app.use('api/deletedeportistas', deletedeportist);




















app.listen(port);
