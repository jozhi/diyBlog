const querystring = require('querystring');

const handleBlogRouter = require('./router/router');

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    if(req.method!=='POST'){
      resolve({});
      return;
    }

    // post 请求取参
    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString();
    });
    req.on('end', () => {
      if(!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData))
    })
  })
};

const serverHandle = (req, res) => {
  console.log('bingo');
  // 处理 path
  const method = req.method;
  const url = req.url;
  req.path = url.split('?')[0];

  // 处理 query
  req.query =  querystring.parse(url.split('?')[1]);

  // 处理 postData
  getPostData(req).then(postData => {
    req.body = postData;
    
    console.log('req.bodyxxx:',JSON.stringify(req.body));

    // 处理 blog 路由
    const blogData = handleBlogRouter(req, res);
    console.log('请求返回结果：blogData:',blogData);
    if(blogData) {
      res.end(
        JSON.stringify(blogData)
      );
      return;
    }

    // // 处理 user 路由
    // const userData = handleUserRouter(req, res);
    // if(userData) {
    //   res.end(
    //     JSON.stringify(userData);
    //     return;
    //   )
    // }

    // 未命中路由
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.write('404 Not Found\n');
    res.end;
  }).catch((err) => {
    console.log('err');
  });
};

module.exports = serverHandle;