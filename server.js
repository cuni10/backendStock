const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("src/database/stockDatabase.db", (err) => {

  if(err){
    console.error("Error al abrir base de datos: ", err.message);
  }else{

    console.log("Conectado a la base de datos.");

    db.run(`CREATE TABLE Productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    cantidad INTEGER,
    precio_compra DECIMAL (10, 2),
    precio_venta DECIMAL (10, 2)
    )`, (err) => {
      if (err) {
        console.log("Error al clear la tabla:", err.message)
      }else{
        console.log("Tabla creada con exito.")
      }
    }) 
  }
})

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('¡Hola desde el backend!');
  });
  
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});