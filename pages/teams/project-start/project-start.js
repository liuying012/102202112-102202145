Page({
data: {
  showSuccessModal: false, // 控制“发布成功”弹窗的显示状态
},

// 返回到首页（index页面）
goBack: function() {
  wx.redirectTo({
    url: '/pages/team/index',  // 跳转到 index 页面
  });
},

// 发起项目按钮点击事件
submitProject() {
  // 显示“发布成功”弹窗
  this.setData({
    showSuccessModal: true, // 打开弹窗
  });

  // 设置定时器，30秒后自动关闭弹窗并返回首页
  setTimeout(() => {
    this.hideModalAndGoBack();  // 关闭弹窗并跳转到主页面
  }, 30000); // 30秒后自动执行
},

// 隐藏弹窗并返回主页面
hideModalAndGoBack() {
  this.setData({
    showSuccessModal: false, // 关闭弹窗
  });

  // 返回主页面
  wx.redirectTo({
    url: '/pages/team/index',  // 跳转到 index 页面
  });
},

// 点击页面任意位置关闭弹窗并返回首页
tapModalToClose(e) {
  if (this.data.showSuccessModal) {
    this.hideModalAndGoBack();
  }
},

onLoad(options) {
  // 页面加载时可以处理的逻辑
},

onPullDownRefresh() {
  // 处理下拉刷新的逻辑
},

onReachBottom() {
  // 处理上拉加载的逻辑
},

onShareAppMessage() {
  return {
    title: "发起项目",
    path: "pages/teams/project-start/project-start"
  };
}  
});