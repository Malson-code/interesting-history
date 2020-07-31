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
    let userInfo = utils.getUserInfo(app) || {};
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
          // 因为排名是模拟的，如果小于100分依次减少52名  大于100分就参与排名
          if (author.points >= 150) {
            list.push(author);
          } else {
            list.push({
              name: "算吧",
              points: 150,
              url:"XXX"
            });
          }
          let newUserList = list.sort((a, b) =>
            b.points - a.points
          );
          let index = 0;
          newUserList.map((item, i) => {
            if (item.url === author.url) {
              index = i + 1;
            }
          });
          if (index > 0) {
            author.index = index;
            $this.setData({
              userList: newUserList,
              author
            })
          } else {
            // 如果小于100分依次减少1000名
            let curIndex = (150 -  author.points) * 52 + 100;
            author.index = curIndex;
            $this.setData({
              userList: newUserList,
              author
            })
          }
        }
      }
    })
  },
})