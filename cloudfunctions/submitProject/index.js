const cloud = require('wx-server-sdk');

cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {
  const { name, description, model, highlights, introduction, type, members, features } = event;

  try {
    const res = await db.collection('projects').add({
      data: {
        name,
        description,
        model,
        highlights,
        introduction,
        type,
        members,
        features,
        createTime: new Date()
      }
    });
    return { success: true, id: res._id };
  } catch (e) {
    console.error('数据库添加失败', e);
    return { success: false, error: e };
  }
};