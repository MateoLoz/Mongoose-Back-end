const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const port = 3336;
const cors = require('cors');



app.use(cors());
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


app.get('/api/getdeportistas',getdeportist);
app.post('/api/posts',postdeportist);
app.get('api/getbyname', getdeportistbyname);
app.get('api/getbyapellido', getdeportistbyapellido);
app.delete('api/deletedeportistas', deletedeportist);




















app.listen(port);
