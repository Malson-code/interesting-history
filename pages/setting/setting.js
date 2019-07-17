// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    voice: true,
    vibrate: true
  },

  toAbout() {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  },
  //改变声音
  changeVoice() {
    this.setData({
      voice: !this.data.voice
    })
  },
  //改变振动
  changeVibrate() {
    let isVibrate = !this.data.vibrate;
    this.setData({
      vibrate: !this.data.vibrate
    });
    wx.setStorage({
      key: 'vibrate',
      data: isVibrate
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let vibrate = true,
      $this = this;
    wx.getStorage({
      key: 'vibrate',
      complete(res) {
        if (res.errMsg.indexOf('ok') !== -1) {
          vibrate = res.data;
        }
        $this.setData({
          vibrate
        })
      }
    })
  },
})