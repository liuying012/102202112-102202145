Page({
  chooseAvatar: function() {
    // 实现选择头像的逻辑
  },
  editNickname: function() {
    // 实现编辑昵称的逻辑
  },
  editGender: function() {
    // 实现设置性别的逻辑
  },
  goTojinengshu: function() {
    // 跳转到jinengshu页面
    wx.navigateTo({
        url: '/pages/jinengshu/jinengshu' // 确保路径正确
    });
}
});