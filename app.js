//app.js
let utils = require('./utils/utils');
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    });
    wx.getStorageInfo({
      success(res) {
        let keys = res.keys || [];
        //初始化缓存
        let initData = [
          { key: 'okList', initialData: [] },
          {
            key: 'uuidObj', initialData: {
              n: 'uQoN7yMxjS6qhBcnVuk9he',
              g: 'uoD9NmrE540WjIvv24Ks5T',
              i: 'upM8AnTlZjtk8wnBwKuNeT'
            }
          },
          { key: 'points', initialData: 0 },
          { key: 'tips', initialData: 5 },
          { key: 'vibrate', initialData: true },
          {
            key: 'getTips', initialData: {
              date: utils.getCurDate(),
              times: 0
            }
          }
        ];
        initData.map(item => {
          if (keys.indexOf(item.key) === -1) {
            wx.setStorage({
              key: item.key,
              data: item.initialData
            });
          }
        })
      }
    })


  },
  globalData: {
    userInfo: null,
    okList: [],//已回答正确的题目
  }
})