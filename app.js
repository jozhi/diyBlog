const querystring = require('querystring');

// 路由模块
const handleBlogRouter = require('./router/router');

// 解析获取 post 请求的入参
const getPostData = (req,callback) => {
    if(req.method!=='POST'){
      callback({});
      return;
    }

    // post 请求取参
    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString();
    });
    req.on('end', () => {
      if(!postData) {
        callback({});
        return;
      }
      callback(JSON.parse(postData))
    })
};

const serverHandle = (req, res) => {
  // 处理 path
  req.path = req.url.split('?')[0];

  // 处理 query
  req.query =  querystring.parse(req.url.split('?')[1]);

  // 处理 postData  ~postData 的数据处理方法是异步的，所以需要 callback 方式
  getPostData(req,function(postData){
    req.body = postData;
    // console.log('req.bodyxxx:',JSON.stringify(req.body));

    // 处理 blog 路由
    handleBlogRouter(req, res,function(resData){

      console.log('收到请求数据',resData);
      if(resData) {
        res.end(
          JSON.stringify(resData)
        );
        return;
      }else{
        // 未命中路由
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('404 Not Found\n');
        res.end;
      }
    });


  })
};

module.exports = serverHandle;