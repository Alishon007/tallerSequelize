const express = require('express');
const app = express();
require('dotenv').config();
let sequelize = require('./config/db');
const port = process.env.PORT;
app.use(express.json());

let startDB= async() => {
    try{
        const EventoRouters = require('./routes/EventoRouters');
        const UsuarioRouters = require('./routes/UsuarioRouters');
        const InscripcionRouters = require('./routes/InscripcionRouters');

        app.use('/api', EventoRouters);
        app.use('/api', UsuarioRouters);
        app.use('/api', InscripcionRouters);

        await sequelize.sync();
        console.log('Base de datos sincronizada')
        app.listen(port, ()=>{
            console.log('servidor corriendo '+ port)
        })
    } catch(e) {
        console.log('Error al conectar la base de datos' + e)
    }
}
startDB();

