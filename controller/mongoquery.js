

const {Atleta} = require('../schema/deportistasSchema');



const postdeportist = async (req,res) =>{

    try{
         const nombre = req.body.nombre;
         const apellido = req.body.apellido;
         const sexo = req.body.sexo;
         const edad = req.body.edad;
         const telefono = req.body.telefono;
     const atleta =  new Atleta({nombre:nombre,apellido: apellido, sexo:sexo, edad:edad,telefono:telefono});
      await atleta.save();
    console.log(atleta);
    }catch(err){

        console.log(err)

    }
}

const getdeportist = async (req,res) =>{
    try{
      
  const deportistas = await Atleta.find({});
  return res.send(deportistas);
        }catch(err){

            console.log(err);

        }
       
}

const getdeportistbyname = async (req,res) =>{
    try{
        const nombre = req.body.nombre;
        const resultado = await Atleta.find({nombre:nombre});
        res.send(resultado);
    }catch(err){
        console.log(err);
    }
}

const getdeportistbyapellido = async (req,res) =>{
    try{
        const apellido = req.body.apellido;
        const resultado = await Atleta.find({apellido:apellido});
        res.send(resultado);
    }catch(err){
        console.log(err);
    }
}


const updatedeportist = async (req,res)=>{
    try{
      const {id} = req.params;
      const updatesentence = await deportistas.findByIdAndUpdate(id, req.body);
      if(!updatesentence){
        return res.status(404).json({message:"deportista no encontrado!"});
      }
      else{
        res.status(200).json(updatesentence);
        return res(updatesentence);
      }
    }catch(err){
        console.log(err);
    }
}

const deletedeportist = async (req,res) =>{
    try{
      const nombre = req.body.nombre;
      const usuarioeliminar = Atleta.deleteOne({nombre:nombre});
      console.log(usuarioeliminar);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    postdeportist,
    getdeportist,
    getdeportistbyname,
    getdeportistbyapellido,
    deletedeportist,
}
