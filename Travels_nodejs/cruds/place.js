

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

module.exports.insertPlace=async function(name,latitud,longitud){

    await client.connect();
  
    await client.query(prop.insert_place,[name,latitud,longitud])
        .then(response => {
           console.log(response);
            return true;
            client.end()
        })
        .catch(err => {
          console.log("error:"+err)
          return err;
            client.end()
        })


    
}
module.exports.selectPlace=async function(name){
    await client.connect();
  
   await  client.query(prop.select_place,[name])
        .then(response => {
           console.log(response);
            return response.rows;
            client.end()
        })
        .catch(err => {
          console.log("error:"+err)
          return err;
            client.end()
        })


}
module.exports.updatePlace=async function(name,latitud,longitud,id){

    await client.connect();
  
await client.query(prop.updatePlace,[name,latitud,longitud,id])
    .then(response => {
       console.log(response);
        return true;
        client.end()
    })
    .catch(err => {
      console.log("error:"+err)
      return err;
        client.end()
    })
}

module.exports.deletePlace=async function(id){
    await client.connect();
  
    await client.query(prop.delete_place,[id])
        .then(response => {
           console.log(response);
            return true;
            client.end()
        })
        .catch(err => {
          console.log("error:"+err)
          return err;
            client.end()
        })

}