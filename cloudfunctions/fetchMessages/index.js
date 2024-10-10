// 云函数 fetchMessages
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // 使用当前云环境
})

exports.main = async (event, context) => {
  const { sender, receiver, lastTimestamp } = event;
  const db = cloud.database();
  
  // 获取指定的用户之间的聊天记录
  const messages = await db.collection('messages')
    .where({
      sender: db.command.or(sender, receiver),
      receiver: db.command.or(sender, receiver),
      timestamp: db.command.gt(lastTimestamp)  // 获取新消息
    })
    .orderBy('timestamp', 'asc')  // 按照时间顺序排列
    .get();

  return {
    success: true,
    messages: messages.data,  // 返回消息列表
  };
};
