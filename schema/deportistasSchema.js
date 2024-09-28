
const mongoose = require('mongoose');


const atletaSchema = new mongoose.Schema({
   nombre:{
      type:String,
      required:true,
      min:3,
      max:20,
   },
   apellido:{
      type:String,
      required:true,
      min:3,
      max:40,
   },
   sexo:{
      type:String,
      max:1,
      transform:{
      toupper: v => v.toUpperCase(),
      },
      validate:{
         validator: v => v == "M" || v == "F",
      }
   },
   edad:{
      type:Number,
      required:true,
      min:1,
      max:120,
   },
   telefono:{
      type:String,
      required:false,
      max:12,
      min:12
   },
});



const Atleta = mongoose.model("deportistas", atletaSchema);
module.exports = {Atleta};