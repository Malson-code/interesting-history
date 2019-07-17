// pages/my/my.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    points: '暂无',
    tips: '暂无',
    userInfo: {}
  },
  getPoints() {
    wx.showModal({
      content: '目前可以通过分享题目获取提示点！',
      showCancel: false,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let $this = this;
    let userInfo = app.globalData.userInfo;
    if (!userInfo) {
      wx.navigateTo({
        url: '/pages/index/index'
      })
      return;
    }
    wx.getStorage({
      key: 'points',
      success(res) {
        let points = res.data;
        wx.getStorage({
          key: 'tips',
          success(res) {
            let tips = res.data;
            $this.setData({
              points,
              tips,
              userInfo
            })
          }
        });
      }
    });
  },
})