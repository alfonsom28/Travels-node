const { Client }=require('pg');


const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'aeropuerto',
  password: 'Daniela21',
  port: 5432,
}
const client=new Client(connectionData);
module.exports.insertFly=function(capacity,date,cost,hour,id_place,place_id_place,id_airline){

    client.connect();
  
    client.query('insert into fly (capacity,date,cost,hour,id_place,place_id_place,id_airline) values($1,$2,$3,$4,$5,$6,$7)',[capacity,date,cost,hour,id_place,place_id_place,id_airline])
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

module.exports.selectFlyAir=function(id){


    client.connect();
  
    client.query('select * from fly where id_airline=$1',[id])
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

module.exports.selectFlyPlace=function(id){

    client.connect();
  
    client.query('select * from fly where id_place=$1 ',[id])
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


module.exports.deleteFly=function(id){


    client.connect();
  
    client.query('delete from fly where id_fly=$1',[id])
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