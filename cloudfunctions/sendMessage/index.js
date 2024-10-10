// 云函数 sendMessage
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // 使用当前云环境
})

exports.main = async (event, context) => {
  const { sender, receiver, text, timestamp } = event;
  const db = cloud.database();

  await db.collection('messages').add({
      data: {
          sender,
          receiver,
          text,
          timestamp,
          avatar: event.avatar // 可以包含发送者的头像
      }
  });

  return {
      success: true,
  };
};