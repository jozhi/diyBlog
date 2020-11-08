const getList = (author, keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1558664497766,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1558664555616,
      author: 'lisi'
    }
  ]
};

const getDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1558664497766,
    author: 'zhangsan'
  }
};

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content 属性
  console.log('newBlog blogData...', blogData);
  return {
    id: 3 // 表示新建博客，插入到数据库表里面的 id
  };
}

const updateBlog = (id, blogData = {}) => {
  // blogData 是一个博客对象，包含title content 属性
  console.log('update blog...', id, blogData);
  return true;
}

const deleteBlog = (id) => {
  // id 是删除博客的id
  console.log('deleteBlog id:', id);
  return true;
}


module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
};