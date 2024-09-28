const mongoose = require('mongoose');

const mongooseconection = async() =>{
   await mongoose.connect(`mongodb+srv://Mateo1423:Mateo1423@cluster0.acphn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
   .then(()=>console.log("conectado a mongodb con exito!"));

}

module.exports = {mongooseconection};