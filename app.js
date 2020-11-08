
const querystring = require('querystring');

const handleBlogRouter = require('./router/blog');
// const handleUserRouter = reuqire('./srcc/router/user');

const getPostData = (req) => {
  if(req.method!=='POST'){
    resolve({});
    return;
  }

  if(req.headers['content-type']!=='application/json'){
    resolve({});
    return;
  }

  let postData = '';
  req.on('data', chunk => {
    postData += chunk.toString();
  });
  req.on('end', () => {
    if(!postData) {
      resolve({});
      return;
    }

    resolve(
      JSON.parse(postData);
    )
  })
};

const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader({'Content-type', 'application/json'});
  // 处理 path
  const method = req.method;
  const url = req.url;
  req.path = url.split('?')[0];

  // 处理 query
  req.query =  querystring.parse(url.split('?')[1]);

  // 处理 postData
  getPostData().then(postData => {
    req.body = postData;

    // 处理 blog 路由
    const blogData = handleBlogRouter(req, res);
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
    res.writeHead(404, {'Content-type', 'text/plain'});
    res.write('404 Not Found\n');
    res.end;
  });
};

module.exports serverHandle;