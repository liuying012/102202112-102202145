const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // 使用当前云环境
})
const db = cloud.database()

// 定义登录逻辑
exports.main = async (event, context) => {
  const { username } = event
  if (!username) {
    return { success: false, message: '用户名不能为空' }
  }
  try {
    // 查询用户名是否存在
    const userExist = await db.collection('users').where({ username }).get()

    if (userExist.data.length === 0) {
      // 用户不存在，创建新用户
      const result = await db.collection('users').add({
        data: {
          username: username,
          createTime: db.serverDate(),  // 使用服务器时间
        }
      })
      return {
        success: true,
        message: '用户创建并登录成功',
        userId: result._id, // 返回新创建的用户ID
      }
    } else {
      // 用户已存在，更新登录时间
      const userId = userExist.data[0]._id // 获取已有用户的ID
      await db.collection('users').doc(userId).update({
        data: {
          lastLoginTime: db.serverDate(), // 使用服务器时间更新最后登录时间
        }
      })
      return {
        success: true,
        message: '登录成功',
        userId: userId, // 返回已有用户的ID
      }
    }
  } catch (e) {
    return {
      success: false,
      message: e.message, // 捕获错误并返回
    }
  }
}