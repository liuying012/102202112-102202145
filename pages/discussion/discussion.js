Page({
    data: {
        message: '' // 存储输入框内容
    },

    // 处理输入
    handleInput: function(e) {
        this.setData({
            message: e.detail.value
        });
    },

  // 处理输入
  handleInput: function(e) {
    this.setData({
        message: e.detail.value // 更新输入框的值
    });
},

// 发送消息
sendMessage: function() {
    if (this.data.message.trim() !== '') { // 检查输入内容是否为空
        console.log("发送的消息内容是:", this.data.message); // 输出发送的消息内容

        // 在这里可以添加发送消息的逻辑，如存储或发送到服务器
        
        // 清空输入框
        this.setData({
            message: '' // 清空输入框
        });
    } else {
        console.log("输入内容为空，无法发送");
    }
}
});