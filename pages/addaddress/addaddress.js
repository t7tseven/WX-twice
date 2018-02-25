Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      name: '',
      tel: '',
      abs: '',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;

    wx.getStorage({
      key: 'user',
      success: function (res) {
        self.setData({
          user: res.data
        })
      }
    })
  },
  formSubmit: function (e) {
    var value = e.detail.value;
    if (value.name && value.tel && value.abs) {
      wx.setStorage({
        key: 'user',
        data: value,
        success: () => {
          wx.navigateBack({});
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请填写完整的信息',
        success: function (res) {
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})