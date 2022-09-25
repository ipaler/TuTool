// app.js

App({
  onLaunch() {

    // 获取设备信息
    wx.getSystemInfo({
      success: res => {
        // 获取胶囊位置信息
        let menuButtonObject = wx.getMenuButtonBoundingClientRect()
        // 整个导航栏的高度
        let navHeight = menuButtonObject.top + menuButtonObject.height + (menuButtonObject.top - res.statusBarHeight) * 2
        // 导航栏的高度
        let nav = navHeight - res.statusBarHeight
        // 挂载到全区变量 globalData 上
        this.globalData.navHeight = navHeight
        this.globalData.nav = nav
        // 胶囊与左边的距离
        this.globalData.menuLeft = menuButtonObject.left
        // 胶囊的高度
        this.globalData.menuHeight = menuButtonObject.height
        // 胶囊距离顶部的高度
        this.globalData.menuBot = menuButtonObject.top - res.statusBarHeight
        // 整个设备的宽度
        this.globalData.windowWidth = res.windowWidth
      },
    })

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    isDark: false
  },
  onShow() {
    this.getTimeState()
  },
  // 判断时间段 白天/黑夜
  getTimeState() {
    let timeNow = new Date()
    let hours = timeNow.getHours()
    this.globalData.isDark = ((hours >= 19 && hours <= 24) || (hours >= 0 && hours <= 6))
    wx.setStorageSync('theme', this.globalData.isDark)
  },
})
