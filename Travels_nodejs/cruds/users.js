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

module.exports.newUser=async function(name,lastname,password,birthdate,sex,email){



  await client.connect();
  
await client.query(prop.insert_user,[name,lastname,password,birthdate,sex,email])
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


}//insert

module.exports.selectUser=async function(email,pass){

  await client.connect();
  
  await client.query(prop.select_user,[email])
      .then(response => {
         console.log("pase por aqui" + response.rows[0])
var g;
if(response.rows[0].password==pass){
  g=true;
}else{
  g=false;
}
 console.log(response.rows[0].id_users);
          return g;
           client.end()

           
      })
      .catch(err => {
        console.log("error:"+err)
        return err;
          client.end()
      })
}
module.exports.updateEmail=async function(email,id){
  await client.connect();
  
  await client.query(prop.updateEmail,[email,id])
      .then(response => {
         console.log("pase por aqui" + response)

//console.log(response.rows[0].id_users);
          return true;
          client.end()
      })
      .catch(err => {
        console.log("error:"+err)
        return false;
          client.end()
      })


}


  module.exports.deleteUser=async function(id){
    await client.connect();
  
    await client.query(prop.delete_users,[id])
        .then(response => {
           console.log("pase por aqui" + response)
  
            return true;
            client.end()
        })
        .catch(err => {
          console.log("error:"+err)
          return false;
            client.end()
        })



  }