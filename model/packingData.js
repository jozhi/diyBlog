const SuccessModel = (dataModel) => {
  // 先返回假数据（格式是正确的）
  return {
    "success": true,
    "data": dataModel,
    "code":200
  }
};

const ErrorModel = (dataModel) => {
  // 先返回假数据
  return {
    "success": false,
    "data": dataModel,
    "code":00
  }
};


module.exports = {
  SuccessModel,
  ErrorModel,
};