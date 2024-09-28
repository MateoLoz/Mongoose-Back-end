const mongoose = require('mongoose');

const mongooseconection = async() =>{
   await mongoose.connect(process.env.MONGO_URL)
   .then(()=>console.log("conectado a mongodb con exito!"));

}

module.exports = {mongooseconection};