const sql = require('sql-crud');
let crud = new sql('mysql');
module.exports = (app, con) => {

app.get('/api/recirculado', (req, res) => {
  crud.select(con, {select: '*', from: `sistema_recirculado_congelado`}, (err, row) => {
    if(err) {
    	res.send(err);
    }
    res.send(row);
  }, true);
});

// Devuelve la tabla a comparar linea de liquido
app.get('/api/diametros/linea_de_liquido', (req, res) => {
  crud.select(con, {select: '*', from: `sistema_recirculado_congelado`}, (err, row) => {
    if(err) {
    	res.send(err);
    }
    res.send(row);
  }, true);
});

// Devuelve la tabla a comparar linea de liquido
app.get('/api/diametros/linea_de_succion', (req, res) => {
  crud.select(con, {select: '*', from: `Tabla_1-6A_RetornoRecirculador`}, (err, row) => {
    if(err) {
      res.send(err);
    }
    res.send(row);
  }, true);
});

app.get('/api/diametros/pump_discharge', (req, res) => {
  crud.select(con, {select: '*', from: `liquid_piping_capacities`}, (err, row) => {
    if(err) {
      res.send(err);
    }
    const i = row.find(i => i.service == 'pump_suction');
    res.send(i);
  }, true);
});



}

