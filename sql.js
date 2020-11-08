var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.1.20',
  user     : 'root',
  password : '000000',
  database : 'blog'
});
        
connection.connect();

console.log(1111);
  
connection.query('select * from menus', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});

