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

}

