module.exports={
    user:"postgres",
    database:"aeropuerto",
    password:"Daniela21",
insert_user:"insert into users (name,lastname,password,sex, birthdate,email,type_user) values ($1,$2,$3,$4,$5,$6,$7)",
select_user:"select * from users where id_users email=$1",
update_username:"update users set name=$1 where id_users=$2",
update_lastname:"update users set lastname=$1 where id_users=$2",
update_email:"update users set email=$1 where id_users=$2",
update_password:"update users set password=$1 where id_users=$2",
delete_users:"delete from users where id_users=$1",

insert_aerolinea:"insert into airline (name_air,weight) values ($1,$2)",
select_aerolinea:"select * from airline where id_airline=$1",
select_total:"select * from airline",
select_airname:"select * from airline where name_air=$1",
update_peso:"update airline set weight=$1 where id_airline=$2",
update_nameair:"update airline set name_air =$1 where id_airline=$2",
delete_aerolinea:"delete from airline where id_airline=$1",

insert_boleto:"insert into boletos (clase,id_users,id_fly) values ($1,$2,$3)",
select_boletofly:"select * from boletos where id_fly=$1",
select_boletouser:"select * from boletos  where id_users=$1",
delete_boletouser:"delete from boletos where id_users=$1",
delete_boletofly:"delete from boletos where id_fly=$1",

insert_fly:"insert into fly (capacity,date,cost,hour,id_place,place_id_place,id_airline) values ($1,$2,$3,$4,$5,$6,$7)",
select_flyairline:"select * from fly where id_airline=$1",
select_place:"select * from fly where id_place=$1",
update_capacity:"update fly set capacity=$1 where id_fly=$2",
update_date:"update fly set date=$1, where id_fly=$2",
update_salida:"update fly set id_place=$1 where id_fly=$2",
update_destino:"update fly set place_id_place=$1 where id_fly=$2",
delete_fly:"delete from fly where id_fly=$1",

insert_place:"insert into place (longitud,latitud,name) values ($1,$2,$3)",
select_placename:"select * from place where name ~$1",
delete_place:"delete from place where id_place=$1"
}