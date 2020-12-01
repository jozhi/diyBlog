// 连接阿里云服务器

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '47.98.198.113',
  user     : 'root',
  password : '123456',
  database : 'myBlog'
});

connection.connect();

  
connection.query('select * from menus', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

