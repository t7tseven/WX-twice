// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[{
      id:"1",
      src:"/images/s4.png",
      hoods:"有货",
      title:"新鲜瓜子，飘香万里",
      price:"0.01",
      details:"这里是瓜子的详情",
      parameter: '125g/个',
      service: '不支持退货',
    },
      {
        id: "2",
        src: "/images/s5.png",
        hoods: "无货",
        title: "大葱香菜，好吃不贵",
        price: "0.02",
        details: "这里是大葱的详情",
        parameter: '100g/个',
        service: '不支持退货',
      },      
      {
        id: "3",
        src: "/images/s6.png",
        hoods: "有货",
        title: "东北大米，绝对香喷喷",
        price: "100",
        details: "这里是大米的详情",
        parameter: '100g/袋',
        service: '支持退货',
      }],
      newgoods:{},
    winHeight:0,
    winWidth:0,
    currentTab:0,
    num:1,
    cartNum:0,
    hasCartNum:false,//购物车上的数字和购物车整体显示
    animationData:{},
    cartShow:false, //加入购物车的动画图标显示
    show:false//购物车数字显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    console.log(options);
    var index = options.id-1
    this.setData({
      newgoods:this.data.goods[index]
    })
  },
  /** 
   * 自定义点击事件
   */
  bindTap:function(e){
    if(this.data.currentTab === e.target.dataset.current) {
      return false;
    }else{
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange:function(e){
    this.setData({
      currentTab:e.detail.current
    })
  },
  /**
   * 点击加号数量增加
  */ 
  numAdd:function(){
    var newnum = this.data.num + 1;
    this.setData({
      num: newnum
    })  
  },
  numSub:function(){
    if (this.data.num <= 1) return wx.showToast({
      title: '最少购买一件',
    });
    var newnum = this.data.num - 1;
    this.setData({
      num: newnum
    }) 
  },
  translate:function(){
    var that = this;
    that.setData({
      cartShow:true
    })
    setTimeout(function(){
      that.setData({
        cartShow: false,
        hasCartNum: true,
      })
      setTimeout(function(){
        that.setData({
          hasCartNum: false,
          show:true,
          cartNum: that.data.num + that.data.cartNum,
        })
      },200)
    },300)
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