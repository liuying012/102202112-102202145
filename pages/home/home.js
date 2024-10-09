Page({
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      getApp().globalData.initTabbar(this, 0); // 根据页面索引调整
    }
  },

  data: {
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
  },
});
