const http = require('http');
const PORT = 4003;

const serverHandle = require('./app');
const server= http.createServer(serverHandle);
server.listen(PORT, ()=>{
  console.log('Server is running on port 4003.');
});