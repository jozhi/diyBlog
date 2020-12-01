const SuccessModel = (dataModel) => {
  // 先返回假数据（格式是正确的）
  return {
    "status": "success",
    "data": dataModel,
    "code":200
  }
};

const ErrorModel = (dataModel) => {
  // 先返回假数据
  return {
    "status": "error",
    "data": dataModel,
    "code":00
  }
};


module.exports = {
  SuccessModel,
  ErrorModel,
};