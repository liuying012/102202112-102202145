// pages/collab/collab.js
Page({
  // 跳转到发起邀请页面
  goToInvitePage: function () {
    wx.navigateTo({
      url: '/pages/teams/invite/invite',  // 跳转到邀请页面
    });
  },
  goBack: function () {
    // 跳转到 'pages/team/index' 页面
    wx.navigateTo({
      url: '/pages/team/index', // 指定跳转的页面路径
    });
  },

  // 页面加载时的逻辑
  onLoad: function (options) {
    // 在页面加载时执行的逻辑
  },

  // 页面渲染完成时的逻辑
  onReady: function () {
    // 页面渲染完成后执行的逻辑
  },

  // 页面显示时的逻辑
  onShow: function () {
    // 页面显示时执行的逻辑
  },

  // 页面隐藏时的逻辑
  onHide: function () {
    // 页面隐藏时执行的逻辑
  },
  
  // 页面卸载时的逻辑
  onUnload: function () {
    // 页面卸载时执行的逻辑
  }
});
