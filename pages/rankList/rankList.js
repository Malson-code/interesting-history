// pages/rankList/rankList.js
const app = getApp();
const utils = require('../../utils/utils');
let userList = require('../../config/userList');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: userList,
    author: {}
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let userInfo = utils.getUserInfo(app);
    let list = utils.deepCopyValue(userList);
    let $this = this;
    wx.getStorage({
      key: 'points',
      complete(res) {
        if (res.errMsg.indexOf('ok') !== -1) {
          let points = res.data;
          let author = {
            name: userInfo.nickName,
            url: userInfo.avatarUrl,
            points
          }
          list.push(author);
          let newUserList = list.sort((a, b) =>
            b.points - a.points
          );
          let index = 0;
          newUserList.map((item, i) => {
            if (item.url === author.url) {
              index = i + 1;
            }
          });
          author.index = index;
          $this.setData({
            userList: newUserList,
            author
          })
        }
      }
    })
  },
})