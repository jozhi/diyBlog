const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  const query =  querystring.parse(url.split['?'][1]);

  // 设置返回格式 JSON
  res.setHeader('content-type', 'application/json');

  // 返回
  const resData = {
    method,
    utl,
    path,
    query
  };

  if (method === 'GET') {
    res.end(JSON.stringify(resData));
  }

  if(method === 'POST') {
    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString();
    });

    req.on('end', () => {
      resData.postData = postData;
      // 返回
      res.end(JSON.stringify(resData));
    })
  }
});

server.listen(4003, () => {
  console.log('Server is running on port https://localhost:3000')
});