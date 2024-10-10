App({
  onLaunch: function () {
    // 初始化云开发环境
    wx.cloud.init({
      env: 'colab-3gndycrt74d30096', // 替换为你的云开发环境ID
      traceUser: true,
    });
  },

  globalData: {
    isLoggedIn: false,
    username: "宋威龙"
  }
});