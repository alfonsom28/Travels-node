const { Client }=require('pg');
const pro=require('../utilities/config');

const connectionData = {
  user: prompt.user,
  host: 'localhost',
  database: prompt.database,
  password: prompt.password,
  port: 5432,
}
const client=new Client(connectionData);
module.exports.insertFly=async function(capacity,date,cost,hour,id_place,place_id_place,id_airline){

    await client.connect();
  
   await  client.query(prop.insertFly,[capacity,date,cost,hour,id_place,place_id_place,id_airline])
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

module.exports.selectFlyAir=async function(id){


   await  client.connect();
  
   await  client.query(prop.selectFlyAir,[id])
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

module.exports.selectFlyPlace=async function(id){

   await client.connect();
  
    await client.query(prop.selectFlyPlace,[id])
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


module.exports.deleteFly=async function(id){


    await client.connect();
  
    await client.query(prop.deleteFly,[id])
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