Page({
  data: {
    title: "",
    description: "",
    image: ""
  },

  onLoad: function (options) {
    this.setData({
      title: options.title,
      description: options.description,
      image: options.image
    });
  }
});
