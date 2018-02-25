// pages/classfiy/classfiy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "果味",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '鸭梨',
            image: "/images/c2.png"
          },
          {
            child_id: 2,
            name: '芒果',
            image: "/images/s9.jpg"
          },
          {
            child_id: 3,
            name: '猕猴桃',
            image: "/images/c4.png"
          },
          {
            child_id: 4,
            name: '草莓',
            image: "/images/s5.jpg"
          },
          {
            child_id: 5,
            name: '橘子',
            image: "/images/s6.jpg"
          },
          {
            child_id: 6,
            name: '葡萄',
            image: "/images/s8.jpg"
          },
          {
            child_id: 7,
            name: '樱桃',
            image: "/images/s7.jpg"
          },
        ]
      },
      {
        cate_id: 2,
        cate_name: "蔬菜",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '大葱',
            image: "/images/s5.png"
          },
          {
            child_id: 2,
            name: '大辣椒',
            image: "/images/d1.jpg"
          },
          {
            child_id: 3,
            name: '胡萝卜',
            image: "/images/d6.jpg"
          }
          , {
            child_id: 4,
            name: '西红柿',
            image: "/images/d3.jpg"
          }
          , {
            child_id: 5,
            name: '紫甘蓝',
            image: "/images/d5.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "五谷/杂粮",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '大米',
            image: "/images/s6.png"
          },
          {
            child_id: 2,
            name: '红豆',
            image: "/images/s4.png"
          },
          {
            child_id: 3,
            name: '黑米',
            image: "/images/c9.jpg"
          },
          {
            child_id: 4,
            name: '小米',
            image: "/images/c8.jpg"
          },
          {
            child_id: 5,
            name: '绿豆',
            image: "/images/c10.jpg"
          },
          {
            child_id: 6,
            name: '燕麦',
            image: "/images/c11.jpg"
          },
        ]
      },
      {
        cate_id: 4,
        cate_name: "点心",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },
  switchChoose:function(e){
    var nowIndex = e.target.dataset.id;
    var curIndex = e.target.dataset.index;
    this.setData({
    curNav:nowIndex,
    curIndex:curIndex
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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