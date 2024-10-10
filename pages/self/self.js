// 引入全局应用实例
const app = getApp();

Page({
  data: {
    username: '',  // 存储全局用户名
    isLoggedIn: false // 检查是否已登录
  },
  chooseAvatar() {
    wx.chooseImage({
      count: 1, // 默认9，设置为1表示只能选择一张图片
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        const filePath = res.tempFilePaths[0]; // 获取选择的图片文件路径
        this.uploadAvatar(filePath); // 上传头像
      }
    });
  },

  // 上传头像
  uploadAvatar(filePath) {
    wx.uploadFile({
      url: 'https://gmall-prod.atguigu.cn/mall-api/fileUpload', // 上传接口的URL
      filePath: filePath,
      name: 'file',
      header: {
        'Content-Type': 'multipart/form-data', // 设置请求的Content-Type
        'token': wx.getStorageSync('token') // 假设您有token需要传递给服务器
      },
      success: (res) => {
        const uploadRes = JSON.parse(res.data);
        if (uploadRes.success) { // 假设服务器返回的数据中包含success字段表示上传成功
          this.setData({
            'userInfo.headimgurl': uploadRes.data.url // 更新用户信息中的头像路径
          });
          this.updateUserInfo(); // 更新用户信息
        } else {
          wx.showToast({
            title: '头像上传失败，请稍后再试',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '头像上传失败，请稍后再试',
          icon: 'none'
        });
      }
    });
  },

  // 更新用户信息
  updateUserInfo() {
    reqUpdateUserInfo(this.data.userInfo).then(() => {
      wx.showToast({
        title: '头像更新成功',
        icon: 'success'
      });
    }).catch(() => {
      wx.showToast({
        title: '头像更新失败，请稍后再试',
        icon: 'none'
      });
    });
  },
  // 页面加载时执行的初始化工作
  onLoad: function (options) {
    // 获取全局数据
    this.setData({
      username: app.globalData.username || '游客',  // 获取全局用户名，未登录时显示"游客"
      isLoggedIn: app.globalData.isLoggedIn || false // 获取全局登录状态
    });

    // 如果未登录，提示用户
    if (!this.data.isLoggedIn) {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 2000
      });

      // 也可以跳转到登录页面
      wx.navigateTo({
        url: '/pages/login/login' // 假设有登录页面
      });
    }
  },

  // 跳转到消息页面
  goToXiaoxi: function () {
    wx.navigateTo({
      url: '/pages/xiaoxi/xiaoxi' // 确保路径正确
    });
  },

  // 跳转到我的项目页面
  goToWodexiangmu: function () {
    wx.navigateTo({
      url: '/pages/wodexiangmu/wodexiangmu' // 确保路径正确
    });
  },

  // 跳转到个人资料页面
  goToGerenziliao: function () {
    wx.navigateTo({
      url: '/pages/gerenziliao/gerenziliao' // 确保路径正确
    });
  },

  // 跳转到技能树页面
  goToJinengshu: function () {
    wx.navigateTo({
      url: '/pages/jinengshu/jinengshu' // 确保路径正确
    });
  },

  // 退出登录逻辑
  onLogoutTap: function () {
    // 清除全局用户名，并设置为默认值“游客”
    app.globalData.username = '游客';
    app.globalData.isLoggedIn = false;

    // 更新当前页面的数据
    this.setData({
      username: '游客',   // 设置为游客模式
      isLoggedIn: false
    });

    // 提示用户已退出登录
    wx.showToast({
      title: '已退出登录',
      icon: 'none',
      duration: 2000
    });

    // 可选：跳转到登录页面
    wx.navigateTo({
      url: '/pages/login/login'  // 假设有登录页面
    });
  }
});