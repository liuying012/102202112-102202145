// 引入全局应用实例
const app = getApp();

Page({
  data: {
    searchQuery: '',  // 存储搜索框的内容
    projects: [
      {
        title: "智慧云联",
        description: "- 云计算和物联网结合",
        image: "https://xh-1330255155.cos.ap-guangzhou.myqcloud.com/22.jpg",
      },
      {
        title: "生物反应器创新中心",
        description: "- 生物制药或生物能源",
        image: "https://xh-1330255155.cos.ap-guangzhou.myqcloud.com/23.jpg",
      },
      {
        title: "网络安全守护",
        description: "- 网络安全和防护",
        image: "https://xh-1330255155.cos.ap-guangzhou.myqcloud.com/26.jpg",
      },
      {
        title: "深度学习实验室",
        description: "- 深度学习和机器视觉",
        image: "https://xh-1330255155.cos.ap-guangzhou.myqcloud.com/25.jpg",
      },
      {
        title: "智能交通系统研究",
        description: "- 智能交通和自动驾驶技术",
        image: "https://xh-1330255155.cos.ap-guangzhou.myqcloud.com/24.jpg",
      },
      {
        title: "计算机视觉创新实验室",
        description: "- 计算机视觉和图像识别",
        image: "https://xh-1330255155.cos.ap-guangzhou.myqcloud.com/3.jpg",
      },
    ],
    showLoginModal: true, // 控制登录弹窗显示
    userName: "", // 存储输入的用户名
  },

  // 搜索框输入事件
  onInput(e) {
    this.setData({
      searchQuery: e.detail.value,  // 更新输入的内容
    });
  },

  // 搜索按钮点击事件
  onSearch() {
    const query = this.data.searchQuery;  // 获取搜索框内容
    if (query) {
      wx.navigateTo({
        url: `/pages/home/search/search?query=${query}`,  // 传递搜索内容到目标页面
      });
    } else {
      wx.showToast({
        title: '请输入搜索关键词',
        icon: 'none',
      });
    }
  },

  // 用户点击任意地方，确保登录弹窗显示
  handleTapAnywhere() {
    if (!app.globalData.isLoggedIn) {
      this.setData({
        showLoginModal: true, // 显示登录弹窗
      });
    }
  },

  // 输入用户名
  onUserNameInput(e) {
    this.setData({
      userName: e.detail.value,
    });
  },

  // 登录按钮点击事件
  login() {
    if (this.data.userName) {
      app.globalData.username = this.data.userName;  // 将用户名存储到全局数据
      app.globalData.isLoggedIn = true;  // 更新登录状态
      this.setData({
        showLoginModal: false, // 隐藏登录弹窗
      });
    } else {
      wx.showToast({
        title: '请输入用户名',
        icon: 'none',
      });
    }
  },

  // 页面显示时初始化Tab栏
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      getApp().globalData.initTabbar(this, 0); // 根据页面索引调整
    }
  },
  loadMessages() {
    // 获取最后一条消息的时间戳，如果消息列表为空，则默认时间戳为0
    const lastTimestamp = this.data.messages.length > 0 
      ? this.data.messages[this.data.messages.length - 1].timestamp 
      : 0;
     
      wx.cloud.callFunction({
        name: 'login',
        data: {
          username: this.data.userName  // 使用实际的用户输入
        },
        success: function(res) {
          console.log('云函数调用成功', res)
        },
        fail: function(err) {
          console.error('云函数调用失败', err)
        }
      })
    wx.cloud.callFunction({
      name: 'fetchMessages', // 调用的云函数名称
      data: {
        sender: this.data.username,
        receiver: this.data.receiver,
        lastTimestamp: lastTimestamp // 传递上次最后一条消息的时间戳
      },
      success: res => {
        if (res.result.success) {
          // 将新获取的消息添加到现有的消息列表中，并格式化消息时间戳
          const newMessages = res.result.messages.map(msg => ({
            ...msg,
            formattedTime: this.formatTimestamp(msg.timestamp) // 格式化时间戳
          }));

          this.setData({
            messages: [...this.data.messages, ...newMessages]
          });
          this.updateChatUI();  // 调整聊天界面滚动到底部
        } else {
          console.error('获取消息失败', res.result.error);
        }
      },
      fail: err => {
        console.error('云函数调用失败', err);
      }
    });
  },
  // 点击项目后跳转到详情页面
  onProjectClick(e) {
    const project = e.currentTarget.dataset.project;
    wx.navigateTo({
      url: `/pages/projectdetails/projectdetails?title=${project.title}&description=${project.description}&image=${project.image}`,
    });
  }
});