var users=require('../cruds/users');
var cripto=require('bcryptjs');

module.exports.exist=function(req,res,next){

if(req.session==null){

next();

}else{
var r={
status:401,
message:"ya hay una session iniciada"

}
    res.send(r);
}
}


module.exports.auth=function(req,res,next){
    const salt = bcrypt.genSaltSync(10);
    var user=req.body;
    var pass=cripto.hashSync(user.password, salt);
var h=users.selectUser(user.name,pass);

if(h==true){
next();

}else{
var n={
    status:300,
    message:"usuario u/o contrasena equivocadas"
}
res.send(n);
}
}