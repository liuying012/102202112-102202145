// pages/self/self.js
Page({
  data: {
    // 可以在这里定义一些数据，如果需要的话
  },
  goToXiaoxi: function() {
    // 跳转到xiaoxi页面
    wx.navigateTo({
        url: '/pages/xiaoxi/xiaoxi' // 确保路径正确
    });
},
goToWodexiangmu: function() {
  // 跳转到wodexiangmu页面
  wx.navigateTo({
      url: '/pages/wodexiangmu/wodexiangmu' // 确保路径正确
  });
},
goToGerenziliao: function() {
  // 跳转到gerenziliao页面
  wx.navigateTo({
      url: '/pages/gerenziliao/gerenziliao' // 确保路径正确
  });
},
goToJinengshu: function() {
  // 跳转到jinengshu页面
  wx.navigateTo({
      url: '/pages/jinengshu/jinengshu' // 确保路径正确
  });
},
  onLoad: function(options) {
    // 页面加载时执行的初始化工作
  },
  // 其他可能需要的函数
});