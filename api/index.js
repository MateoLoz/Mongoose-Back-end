const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const port = 3336;



app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));



app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req,res)=>{
    res.send('Mongo serverside!');
})

const {mongooseconection} = require('../controller/mongocontroller');
app.use(require('../router/router'));
mongooseconection();



const {postdeportist ,getdeportist,  getdeportistbyname, getdeportistbyapellido, deletedeportist } = require('../controller/mongoquery');


app.use('/api/getdeportistas',getdeportist);
app.use('/api/posts',postdeportist);
app.use('api/getbyname', getdeportistbyname);
app.use('api/getbyapellido', getdeportistbyapellido);
app.use('api/deletedeportistas', deletedeportist);




















app.listen(port, () => console.log('running server!));
