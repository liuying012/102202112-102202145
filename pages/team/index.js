Page({
  data: {
    // 团队相关数据
  },


  // 跳转到发起项目页面
  handleStartProject() {
    wx.navigateTo({
      url: '/pages/teams/project-start/project-start',  // 注意路径的 '/' 开头
    });
  },

  // 跳转到协作邀请页面
  handleInviteCollaborate() {
    wx.navigateTo({
      url: '/pages/teams/collab/collab',  // 注意路径的 '/' 开头
    });
  },
});
