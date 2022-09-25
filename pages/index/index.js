const app = getApp();
var util = require('../../utils/util.js');
var infoCount = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    isNavigate: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    modelindex: [1, 3, 5, 7],
    animation1: {},
    animation2: {},
    animation3: {},
    animation4: {},
    animation5: {},
    animation6: {},
    animation7: {},
    animation8: {},
    animation9: {},
    animation10: {},
  },

   /**
   * 国庆渐变头像页面
   */
  guoqingClick: function () {
    this.animationClick(1);
  },

  /**
   * 绘画板页面
   */
  constellationClick: function () {
    this.animationClick(2);
  },

  /**
   * 手持弹幕查询页面
   */
  danmuClick: function () {
    this.animationClick(3);
  },

  /**
   * 运动小助手页面
   */
  jokeClick: function () {
    this.animationClick(4);
  },

  /**
   * 图片转文字页面
   */
  img2wordClick: function () {
    this.animationClick(5);
  },

  /**
     * 彩色昵称页面
     */
  almanacClick: function () {
    this.animationClick(6);
  },

  /**
   * 每日壁纸
   */
  wallpaperClick: function () {
    this.animationClick(7);
  },

  /**
   * 二维码生成器
   */
  qrcodeClick: function () {
    this.animationClick(8);
  },

  /**
   * 圣诞头像
   */
  chrismasClick: function () {
    this.animationClick(9);
  },

  /**
   * 文字翻译
   */
  translateClick: function () {
    this.animationClick(10);
  },

  /**
   * 动画效果
   */
  animationClick: function (index) {
    console.log('动画效果');
    var thisPage = this;
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: "linear",
    })
    this.animation = animation
    if (thisPage.data.isNavigate) {
      thisPage.setData({ isNavigate: false });
      switch (index) {
        case 1:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation1: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../tools/guoqing/guoqing'
            })
          }.bind(this), 600)
          break;
        case 2:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation2: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../tools/draw/draw',
            })
          }.bind(this), 600)
          break;
        case 3:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation3: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../tools/danmu/danmu',
            })
          }.bind(this), 600)
          break;
        case 4:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation4: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../tools/sport/sport',
            })
          }.bind(this), 600)
          break;
        case 5:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation5: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../tools/xfyunOcr/xfyunOcr',
            })
          }.bind(this), 600)
          break;
        case 6:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation6: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../almanac/almanac',
            })
          }.bind(this), 600)
          break;
        case 7:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation7: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../wallpaper/wallpaper',
            })
          }.bind(this), 600)
          break;
        case 8:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation8: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../tools/qrcode/qrcode',
            })
          }.bind(this), 600)
          break;
        case 9:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation9: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../tools/chrismas/chrismas',
            })
          }.bind(this), 600)
          break;
        case 10:
          animation.scale(0.9, 0.9).step().scale(1, 1).step();
          thisPage.setData({
            animation10: animation.export()
          })
          setTimeout(function () {
            wx.navigateTo({
              url: '../translate/translate',
            })
          }.bind(this), 600)
          break;
      }
      setTimeout(function () {
        thisPage.setData({ isNavigate: true });
      }.bind(this), 1500)
    }
  },

  /**
   * 提示弹窗
   */
  infoClick: function () {
    wx.showToast({
      title: '敬请期待',
      duration: 2000
    })
  },

  //打印日志信息
  getLogsInfo: function () {
    var logs = wx.getStorageSync('logs') || [];
    wx.setStorageSync('logs', logs)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载完成了");
    var thisPage = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo //用户基本信息
        thisPage.setData({ userInfo: userInfo })
        //var nickName = userInfo.nickName //用户名
        //var avatarUrl = userInfo.avatarUrl //头像链接
        //var gender = userInfo.gender //性别 0：未知、1：男、2：女
        //var province = userInfo.province //所在省
        //var city = userInfo.city //所在市
        //var country = userInfo.country //所在国家
      }
    })
  },

  getUserInfo: function (e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面渲染完成了");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("页面显示了");
    var thisPage = this;
    //摇一摇
    wx.onAccelerometerChange(function (e) {
      if (e.x > 1 || e.y > 1) {
        console.log('摇一摇')
        var modelindex = thisPage.data.modelindex;
        var res = [];
        for (var i = 0, len = modelindex.length; i < len; i++) {
          var j = Math.floor(Math.random() * modelindex.length);
          res[i] = modelindex[j];
          modelindex.splice(j, 1);
        }
        thisPage.setData({ modelindex: res })
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏了");
    this.getLogsInfo();
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
    console.log("向上拉动了");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("点击了分享");
  }
})