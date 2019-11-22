const { Client }=require('pg');


const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'aeropuerto',
  password: 'Daniela21',
  port: 5432,
}
const client=new Client(connectionData);

module.exports.newUser=function(name,lastname,password,birthdate,sex,email){



  client.connect();
  
client.query('insert into users (name,lastname,password,sex, birthdate,email) values ($1,$2,$3,$4,$5,$6)',[name,lastname,password,birthdate,sex,email])
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

module.exports.selectUser=function(email,pass){

  client.connect();
  
  client.query('select * from users where email=$1',[email])
      .then(response => {
         console.log("pase por aqui" + response)
var g;
if(response.rows[0].password==pass){
  g=true;
}else{
  g=false;
}
console.log(response.rows[0].id_users);
          return response.rows;
          client.end()
      })
      .catch(err => {
        console.log("error:"+err)
        return err;
          client.end()
      })
}
module.exports.updateEmail=function(email,id){
  client.connect();
  
  client.query('update users set email=$1 where id_users=$2',[email,id])
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


  module.exports.deleteUser=function(id){
    client.connect();
  
    client.query('delete from users where email=$1',[id])
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