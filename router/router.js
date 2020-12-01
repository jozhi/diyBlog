const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/controller');
const { SuccessModel, ErrorModel } = require('../model/packingData');

const handleBlogRouter = (req, res) => {
  console.log('handleBlogRouter req data,');
  const method = req.method; // GET POST
  const path = req.path;

  const id = req.query.id;

  // 获取博客列表

  // TODO 请求博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  // 获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    const data = getDetail(id);
    return SuccessModel(data);
  }

  // 新建一篇博客
  if (method === 'POST' && path === '/api/blog/new') {
    const data = newBlog(req.body);
    return SuccessModel(data);

  }

  // 更新一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel('更新成功');
    } else {
      return ErrorModel('更新博客失败');
    }
  }

  // 删除一篇博客
  if (method === 'POST' && path === '/api/blog/delete') {
    const result = deleteBlog(id);

    if (result) {
      return new SuccessModel('删除成功');
    }
    return ErrorModel('删除博客失败');
  }
};

module.exports = handleBlogRouter;