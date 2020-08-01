//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
  },
  onLoad: function () {
    //进行全局缓存
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  //开始 or 继续游戏
  goForGaming() {
    wx.navigateTo({
      url: '/pages/level/level'
    })
  },
  // 先体验一局
  goForExperience(){
    wx.navigateTo({
      url: "/pages/question/question?experience=true"
    })
  },
  //进入排行榜页面
  goForRank() {
    wx.navigateTo({
      url: '/pages/rankList/rankList'
    })
  },
  //进入设置页面
  goForSetting() {
    wx.navigateTo({
      url: '/pages/setting/setting'
    })
  },
  //进入我的
  goForMy() {
    wx.navigateTo({
      url: '/pages/my/my'
    })
  },

  getUserInfo: function (e) {
    let errMsg = e.detail.errMsg;
    if (errMsg.indexOf('ok') !== -1) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  },
  onShareAppMessage: function () {
    return {
      title: '逻辑游戏，欢迎来挑战！',
      path: '/pages/index/index'
    }
  },
})
