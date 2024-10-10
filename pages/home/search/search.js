Page({
  data: {
    searchValue: '',  // 搜索框内容
    historyWords: ['技术', '大数据', '英语', '化工', '土木工程', '生物工程', '应用物理学', '物信', '心理', '电气'], // 历史搜索词
    popularWords: ['技术', '大数据', '英语', '化工', '土木工程', '生物工程', '应用物理学', '物信', '心理', '电气'], // 热门搜索词
  },

  // 页面加载时获取传递的搜索关键词
  onLoad(options) {
    if (options.query) {
      this.setData({
        searchValue: options.query  // 设置搜索框的默认值为传递的查询关键词
      });
    }
  },

  // 监听搜索框输入
  onInput(e) {
    this.setData({
      searchValue: e.detail.value  // 更新搜索框的值
    });
  },

  // 搜索按钮点击事件
  onSearch() {
    const keyword = this.data.searchValue;  // 获取搜索框内容
    if (keyword) {
      wx.showToast({
        title: '搜索：' + keyword,
        icon: 'none'
      });
      // 进行搜索逻辑
    } else {
      wx.showToast({
        title: '请输入搜索关键词',
        icon: 'none'
      });
    }
  },

  // 清除历史记录
  clearHistory() {
    this.setData({
      historyWords: []
    });
  },

  // 点击历史搜索词
  onHistoryTap(e) {
    const keyword = e.currentTarget.dataset.word;
    this.setData({
      searchValue: keyword
    });
    this.onSearch();  // 触发搜索
  },

  // 点击热门搜索词
  onPopularTap(e) {
    const keyword = e.currentTarget.dataset.word;
    this.setData({
      searchValue: keyword
    });
    this.onSearch();  // 触发搜索
  }
});
