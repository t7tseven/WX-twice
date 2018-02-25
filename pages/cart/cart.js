// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    hasList:true,
    allChoose:true,
    totalPrice:0.00,
    all:0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTotalPrise()
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
    this.setData({
      hasList:false,
      goods:[
        {
          id: 2,
          title: "新鲜青菜",
          num: 2,
          unit: 0.03,
          src: "/images/s5.png",
          selected: true,
        }
        ,
        {
          id: 3,
          title: "小草莓",
          num: 3,
          unit: 0.12,
          src: "/images/s5.jpg",
          selected: true,
        }
        ,
        {
          id: 4,
          title: "黑米",
          num: 1,
          unit: 0.1,
          src: "/images/c9.jpg",
          selected: true,
        }
        ,
        {
          id: 5,
          title: "紫甘蓝",
          num: 2,
          unit: 0.15,
          src: "/images/d5.jpg",
          selected: true,
        }
        ,
        {
          id: 6,
          title: "小樱桃",
          num: 2,
          unit: 0.2,
          src: "/images/s7.jpg",
          selected: true,
        }
      ]
    })
    this.getTotalPrise()
  },
  /**
   * 点击加号，数量增加
   */
  add: function (e) {
    var index = e.target.dataset.index;
    var goods = this.data.goods;
    var num = goods[index].num + 1;
    goods[index].num = num;
    this.setData({
      goods: goods,
    })
    this.getTotalPrise();
  },
  /**
   * 点击减号，数量减少
   */
  sub: function (e) {
    var index = e.target.dataset.index;
    var goods = this.data.goods;
    if (this.data.goods[index].num <= 1) return wx.showToast({
      title: '最少购买一件',
    });
    var num = goods[index].num - 1;
    goods[index].num = num;
    this.setData({
      goods: goods,
    })
    this.getTotalPrise();
  },
  /**
   * 点击全选按钮勾选全部列表项
   */
  allChoose: function (e) {
    var allChoose = this.data.allChoose;
    allChoose = !allChoose;
    var goods = this.data.goods;
    for(var i = 0;i < goods.length;i++){
      goods[i].selected = allChoose;
    }
      this.setData({
      goods: goods,
      allChoose: allChoose,
    })
    this.getTotalPrise();
  },
  /**
   * 单击单选
   */
  onlyChoose: function(e){
    var goods = this.data.goods;
    var index = e.target.dataset.index;
    goods[index].selected = !goods[index].selected; 
    var allChoose = this.data.allChoose;
    var all = this.data.all;
    for(var i = 0;i < goods.length;i++){
      if (goods[i].selected === false){
        allChoose = false;
      }else{
        all += 1;
        if(all === goods.length){
          allChoose = true;
        } 
      }
    }
    this.setData({      
      goods:goods,
      allChoose:allChoose,
    })
    this.getTotalPrise();
  },
  /**
   * 单击删除
   */
  delect:function(e){
    var goods = this.data.goods;
    var allChoose = this.data.allChoose;
    var delectIndex = e.target.dataset.index;
    for(var i = 0;i < goods.length;i++){
      if(delectIndex === i){
        goods.splice(delectIndex,1);
      }
    }
    if (goods.length === 0) {
      allChoose = false;
    }
    this.setData({
      goods:goods,
      allChoose:allChoose
    })
    this.getTotalPrise();
  },
  /**
   * 计算价格
   */
  getTotalPrise: function () {
    var goods = this.data.goods;
    var totalPrice = 0;
    for(var i = 0;i < goods.length;i++){
      if(goods[i].selected){
        totalPrice += goods[i].num * goods[i].unit; 
      }
    }
    this.setData({
      totalPrice: totalPrice.toFixed(2)
    })
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