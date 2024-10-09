Page({
  data: {
    students: [
        {
            name: '李娜',
            major: '计算机科学与技术',
            skills: '精通多种编程语言（包括Python、Java和C++），熟悉人工智能和机器学习算法，具备软件开发和数据分析能力。'
        },
        {
            name: '亚历克斯·史密斯',
            major: '环境工程',
            skills: '熟悉可持续能源技术，掌握环境影响评估和污染控制技术，具备实地调研和项目管理经验。'
        },
        {
            name: '索菲亚·罗德里格斯',
            major: '生物医学工程',
            skills: '精通生物信号处理和生物材料应用，具备实验室研究和临床数据分析能力，了解医疗器械设计和开发流程。'
        },
        {
            name: '阿米特·帕特尔',
            major: '国际商务与管理',
            skills: '熟悉全球市场分析和国际贸易法规，掌握跨文化沟通和商务谈判技巧，具备项目管理和战略规划能力。'
        }
    ]
},
// 点击“导师大赏”按钮的事件处理函数
onTutorTitleTap: function() {
    // 跳转到community页面
    wx.navigateTo({
        url: '/pages/community/community'
    });
},
// 点击“技能桥梁”按钮的事件处理函数
onBridgeTitleTap: function() {
    // 跳转到community2页面
    wx.navigateTo({
        url: '/pages/community2/community2'
    });
},

// 点击聊天按钮的事件处理函数
onChatTap: function(event) {
  // 获取当前圆圈的索引
  const index = event.currentTarget.dataset.index;
  // 跳转到讨论页面，这里假设讨论页面的路径为 '/pages/discussion/discussion'
  wx.navigateTo({
      url: '/pages/discussion/discussion?studentIndex=' + index
  });
},

// 点击聊天按钮的事件处理函数
onChatTap: function(event) {
  // 获取当前圆圈的索引
  const index = event.currentTarget.dataset.index;
  wx.navigateTo({
      url: '/pages/discussion/discussion' 
  });
},

  onLoad: function () {
      // 页面加载时执行的初始化操作
  },
  // 其他事件处理函数...
});