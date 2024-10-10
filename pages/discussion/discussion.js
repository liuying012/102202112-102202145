Page({
  data: {
    message: '',
    username: '', // 不再硬编码用户名
    receiver: '张三',
    messages: [],
  },

  onLoad(options) {
    const app = getApp(); // 获取全局变量
    // 如果页面传递了 username 参数，优先使用传递的参数，否则使用全局变量
    const username = options.username || app.globalData.username || '默认用户'; 
    this.setData({
      username: username
    });

    this.loadMessages();  // 加载历史消息
    this.watchMessages(); // 监听消息更新
  },

  loadMessages() {
    const db = wx.cloud.database();
    db.collection('messages')
      .where({
        receiver: this.data.username,
        sender: this.data.username
      })
      .orderBy('timestamp', 'asc')
      .get().then(res => {
        this.setData({
          messages: res.data
        });
      }).catch(err => {
        console.error('查询失败', err);
      });
  },

  watchMessages() {
    const db = wx.cloud.database();
    db.collection('messages').where({
      receiver: this.data.username
    }).watch({
      onChange: snapshot => {
        console.log('新消息到达', snapshot);
        this.loadMessages();
      },
      onError: err => {
        console.error('监听失败', err);
      }
    });
  },

  handleInput(e) {
    this.setData({
      message: e.detail.value
    });
  },

  sendMessage() {
    if (this.data.message.trim() !== '') {
      const newMessage = {
        sender: this.data.username,
        receiver: this.data.receiver,
        text: this.data.message,
        timestamp: new Date(),
      };

      wx.cloud.callFunction({
        name: 'sendMessage',
        data: newMessage,
        success: res => {
          console.log('消息发送成功');
          this.setData({
            messages: [...this.data.messages, newMessage],
            message: ''
          });
          this.updateChatUI();
        },
        fail: err => {
          console.error('消息发送失败', err);
        }
      });
    } else {
      console.log("输入内容为空，无法发送");
    }
  },

  updateChatUI() {
    const chatContent = wx.createSelectorQuery().select('.chat-content');
    chatContent.boundingClientRect();
    chatContent.exec((res) => {
      const chatContentNode = res[0];
      if (chatContentNode) {
        wx.pageScrollTo({
          scrollTop: chatContentNode.bottom,
          duration: 300
        });
      }
    });
  },

  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return `${date.getHours()}:${date.getMinutes()}`;
  }
});
