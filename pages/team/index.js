Page({
  data: {
    // 团队相关数据
  },

  onShow() {
    // 初始化 TabBar 并设置当前页面为第一个页面（索引为0）
    getApp().globalData.initTabbar(this, 0);
  },

  // 跳转到发起项目页面
  handleStartProject() {
    wx.navigateTo({
      url: '/pages/project-start/project-start',  // 注意路径的 '/' 开头
    });
  },

  // 跳转到协作邀请页面
  handleInviteCollaborate() {
    wx.navigateTo({
      url: '/pages/collab/collab',  // 注意路径的 '/' 开头
    });
  },
});
