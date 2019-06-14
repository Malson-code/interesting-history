//index.js
//获取应用实例
const app = getApp();
const questionList = require('../../config/question');
const levelList = require('../../config/levelList');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
  },
  onLoad: function () {

    //进行全局缓存
    app.globalData.questionList = questionList;
    app.globalData.levelList = levelList;

    //转发
    wx.showShareMenu({
      withShareTicket: true
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  goForGaming(){
    wx.navigateTo({
      url: '/pages/level/index'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
