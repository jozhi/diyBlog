const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../model/model');
const { SuccessModel, ErrorModel } = require('../model/packingData');

const handleBlogRouter = async (req, res, callback) => {
  const method = req.method; // GET POST
  const path = req.path;

  const id = req.query.id;

  // 获取博客列表

  // TODO 请求博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    const listData = await getList();
    // console.log('listData :',listData);
    callback( SuccessModel(listData) )
  }

  // 新建一篇博客
  if (method === 'POST' && path === '/api/blog/new') {
    const data = await newBlog(req.body);
    // return SuccessModel(data);
    callback( SuccessModel(data) )
  }

  // 获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    const data = getDetail(id);
    return SuccessModel(data);
  }

  // 更新一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    if (result) {
      return SuccessModel('更新成功');
    } else {
      return ErrorModel('更新博客失败');
    }
  }

  // 删除一篇博客
  if (method === 'POST' && path === '/api/blog/delete') {
    const result = deleteBlog(id);

    if (result) {
      return SuccessModel('删除成功');
    }
    return ErrorModel('删除博客失败');
  }
};

module.exports = handleBlogRouter;