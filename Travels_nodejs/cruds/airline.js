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

module.exports.insertAir=async function(name,peso){

    await client.connect();
  
    await awaitclient.query(prop.insert_aerolinea,[name,peso])
        .then(response => {
           console.log(response);
            return true;
            client.end()
        })
        .catch(err => {
          console.log("error:"+err)
          return false;
            client.end()
        })

    
}

module.exports.selectAir= async function(name){

    await client.connect();
  
    await client.query(prop.select_aerolinea,[name])
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

module.exports.updatePeso=async function(peso,name){



  await client.connect();
  
await client.query(prop.update_peso,[id])
  
     .then(response => {
       console.log(response);
        return true;
        client.end()
    })
    .catch(err => {
      console.log("error:"+err)
      return false;
        client.end()
    })
}


module.exports.deleteAir=async function(id){

    await client.connect();
  
await client.query(prop.delete_aerolinea,[id])
    .then(response => {
       console.log(response);
        return true;
        client.end()
    })
    .catch(err => {
      console.log("error:"+err)
      return false;
        client.end()
    })

}