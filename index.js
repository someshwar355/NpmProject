const express=require('express');
const session=require('express-session');
const app=express();
const port=3333;

// app sessions use
app.use(session({
    secret:"key that will save",
    resave:false,
    saveUninitialized:false


})
);

// use sessions

app.get('/',(req,res)=>{
    req.session.isAuth=true;
    console.log(req.session);
    res.send('Welcome in Sessions ');
    console.log(req.session.id);
    req.session.username=" Programmer";
    console.log(req.session.username)

})
// create the server


app.listen(port,(req,res)=>{
    console.log('server is running.......');
   

});
