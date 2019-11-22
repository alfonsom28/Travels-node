const { Client }=require('pg');


const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'aeropuerto',
  password: 'Daniela21',
  port: 5432,
}
const client=new Client(connectionData);

module.exports.insertAir=function(name,peso){

    client.connect();
  
    client.query('insert into airline (name,weight) values ($1,$2)',[name,peso])
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

module.exports.selectAir=function(name){

    client.connect();
  
    client.query(' select * from airline where name=$1',[name])
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

module.exports.updatePeso=function(peso,name){



    client.connect();
  
client.query('update airline set weight=$1 where name=$2',[peso,name])
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


module.exports.deleteAir=function(id){

    client.connect();
  
client.query('delete from airline where name=$1',[id])
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