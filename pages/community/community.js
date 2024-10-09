Page({
      data: {
        tutors: [
            { name: "导师1", image: "1" },
            { name: "导师2", image: "2" },
            { name: "导师3", image: "3" },
            { name: "导师4", image: "4" }
        ]
    },
  // 点击“导师大赏”按钮的事件处理函数
  onTutorTitleTap: function() {
    // 跳转到community页面
    wx.navigateTo({
        url: '/pages/community/community'
    });
},
// 点击“技能桥梁”按钮的事件处理函数
onBridgeTitleTap: function() {
    // 跳转到community2页面
    wx.navigateTo({
        url: '/pages/community2/community2'
    });
},
onImageTap: function(event) {
  // 假设每个导师对象中有一个唯一的标识符，比如 id
  const tutorId = event.currentTarget.dataset.id;
  // 跳转到导师详情页面，你需要根据实际情况替换页面路径和参数
  wx.navigateTo({
    url: '/pages/tutor/tutor'
  });
},
  onLoad: function () {
      // 页面加载时执行的初始化操作
  },
  // 其他事件处理函数...
});