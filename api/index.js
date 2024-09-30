const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const port = 3336;
const cors = require('cors');

const corsOptions = {
    origin:'http://127.0.0.1:5173'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(bodyparser.urlencoded({extended: true}));
const {mongooseconection} = require('../controller/mongocontroller');
app.use(require('../router/router'));


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
