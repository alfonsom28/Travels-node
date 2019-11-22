const { Client }=require('pg');


const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'aeropuerto',
  password: 'Daniela21',
  port: 5432,
}
const client=new Client(connectionData);

module.exports.insertBoleto=function(clase,user,fly){
    client.connect();
  
client.query('insert into boleto (clase,id_users,id_fly) values($1,$2,$3)',[clase,user,fly])
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
module.exports.selectBoletoFly=function(fly){

    client.connect();
  
client.query('select * from boletos where id_fly=$1',[id])
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
module.exports.selectBoletUser=function(id){
client.connect();
  
client.query('select * from boletos where id_users=$1',[id])
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

module.exports.deleteBoleto=function(id){


    client.connect();
  
client.query('delete from boleto where id_boleto=$1',[id])
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