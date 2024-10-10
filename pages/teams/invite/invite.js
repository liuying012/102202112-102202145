
Page({
  data: {
    showModal: false,  // 控制弹窗的显示与隐藏
  },

  // 显示分享弹窗
  showShareModal() {
    this.setData({
      showModal: true
    });
  },

  // 关闭分享弹窗
  closeShareModal() {
    this.setData({
      showModal: false
    });
  }
});
