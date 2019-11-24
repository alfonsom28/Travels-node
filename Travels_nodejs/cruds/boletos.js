const { Client }=require('pg');
const prop=require('../utilities/config');

const connectionData = {
  user: prop.user,
  host: 'localhost',
  database: prop.database,
  password: prop.password,
  port: 5432,
}
const client=new Client(connectionData);

module.exports.insertBoleto=async function(clase,user,fly){
    await client.connect();
  
await client.query(prop.insert_boleto,[clase,user,fly])
    .then(response => {
      
        return true;
        client.end()
    })
    .catch(err => {
      console.log("error:"+err)
      return false;
        client.end()
    })

}
module.exports.selectBoletoFly=async function(fly){

    await client.connect();
  
await client.query(prop.select_boletofly,[id])
    .then(response => {
      
        return response.rows;
        client.end()
    })
    .catch(err => {
      console.log("error:"+err)
      return false;
        client.end()
    })

}
module.exports.selectBoletUser=async function(id){
await client.connect();
  
await client.query(prop.select_boletouser,[id])
    .then(response => {
      
        return response.rows;
        client.end()
    })
    .catch(err => {
      console.log("error:"+err)
      return false;
        client.end()
    })
}

module.exports.deleteBoletoFly=async function(id){


   await  client.connect();
  
await client.query(prop.delete_boletofly,[id])
    .then(response => {
      
        return true;
        client.end()
    })
    .catch(err => {
      console.log("error:"+err)
      return false;
        client.end()
    })

}
module.exports.deleteBoletoUser=async function(id){


    await  client.connect();
   
 await client.query(prop.delete_boletoUser,[id])
     .then(response => {
       
         return true;
         client.end()
     })
     .catch(err => {
       console.log("error:"+err)
       return false;
         client.end()
     })
 
 }