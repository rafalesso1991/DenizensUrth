// TERMINAL --> npx nodemon src/app

// DECLARO LA CONST 'EXPRESS' DNDE REQUIERO AL PAQUETE 'EXPRESS'
const express=require('express');
// DECLARO LA CONST 'PATH' DNDE REQUIERO LA FUNCION 'EXPRESS()'
const app=express();
// DECLARO LA CONST 'PATH' DNDE REQUIERO AL MODULO 'PATH'
const path=require('path');
// DECLARO UNA CONST X CADA PAGINA DNDE REQUIERO UN ARCHIVO.JSON PARA C/U
const common=require('./json/common.json');
const criminal=require('./json/criminal.json');
const military=require('./json/military.json');
const religious=require('./json/religious.json');
const scholar=require('./json/scholar.json');
const wilderness=require('./json/wilderness.json');

// MIDDLEWARE
// Uso la funcion 'json()' del paquete 'express'
app.use(express.json());    

// SETTINGS
// Seteo a traves d la funcion 'path.join()' q las vistas estaran en la carpeta 'views'
app.set('views',path.join(__dirname,'views'));
// Seteo a 'ejs' como 'motor d vistas'
app.set('view engine','ejs');

// STATIC
// Uso la funcion 'path.join()' para q busque los archivos 'estaticos' en la carpeta 'public'
app.use(express.static(path.join(__dirname,'public')));

// ROUTES
// Config los 'routers' con una funcion 'callback' q 'renderiza' cada pagina
app.get('/',(req,res)=>{
    res.render('index', {title: 'Home'});
});
app.get('/about',(req,res)=>{
    res.render('./pages/about', {
        title: 'About'
    });
});
app.get('/common',(req,res)=>{
    res.render('./pages/npc',{
      data:common, title: 'Common'
    });
});
app.get('/criminal',(req,res)=>{
    res.render('./pages/npc',{
        data:criminal, title: 'Criminal'
      });
});
app.get('/military',(req,res)=>{
    res.render('./pages/npc',{
        data:military, title: 'Military'
      });
});
app.get('/religious',(req,res)=>{
    res.render('./pages/npc',{
        data:religious,title: 'Religious'
      });
});
app.get('/scholar',(req,res)=>{
    res.render('./pages/npc',{
        data:scholar, title: 'Scholar'
      });
});
app.get('/wilderness',(req,res)=>{
    res.render('./pages/npc',{
        data:wilderness, title: 'Wilderness'
      });
  
});
// Uso la funcion 'listen' del paquete 'express' para comunicarme con el Server
// con una funcion 'callback' (es decir una q se ejecute cuando "escuche" el puerto)
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});