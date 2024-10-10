// 引入云开发SDK
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // 使用当前云环境
})
const db = cloud.database()

// 定义云函数
exports.main = async (event, context) => {
  const { projectName, introduction, model, highlight, description, type, members, features } = event
  
  // 构建新项目对象
  const newProject = {
    name: projectName,
    introduction: introduction,
    model: model,
    highlight: highlight,
    description: description,
    type: type,
    members: members,
    features: features,
    createTime: db.serverDate() // 使用服务器时间
  };

  try {
    // 向云数据库添加新项目
    const result = await db.collection('projects').add({
      data: newProject
    })
    return {
      success: true,
      message: '项目发布成功',
      projectId: result._id // 返回新创建的项目ID
    }
  } catch (e) {
    return {
      success: false,
      message: e.message // 捕获错误并返回
    }
  }
}