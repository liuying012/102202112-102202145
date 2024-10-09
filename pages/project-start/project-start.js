Page({
  data: {
    showSuccessModal: false, // 控制“发布成功”弹窗的显示状态
  },

  // 返回到首页（index页面）
  goBack: function() {
    wx.redirectTo({
      url: '/pages/index/index',  // 跳转到 index 页面
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
    // 隐藏弹窗
    this.setData({
      showSuccessModal: false, // 关闭弹窗
    });
    
    // 返回主页面
    wx.redirectTo({
      url: '/pages/index/index',  // 跳转到 index 页面
    });
  },

  // 点击页面任意位置关闭弹窗并返回首页
  tapModalToClose(e) {
    // 如果点击的地方是弹窗外层，关闭弹窗
    if (this.data.showSuccessModal) {
      this.hideModalAndGoBack();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载时可以处理的逻辑
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 处理下拉刷新的逻辑
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 处理上拉加载的逻辑
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    // 设置分享内容
    return {
      title: "发起项目",
      path: "pages/project-start/project-start"
    };
  }  
});
