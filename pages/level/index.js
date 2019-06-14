// pages/level/index.js
const app = getApp();
const questionList = require('../../config/question');
const levelList = require('../../config/levelList');
// let levelList = app.globalData.levelList;
// let questionList = app.globalData.questionList;
Page({
  data: {
    levelList: levelList,
    questionList: questionList
  },
  //点击某个题目
  goQuestionPage(e){
    let props = e.target.dataset.props;
    if(!props){
      //报错
      return;
    };
    wx.setStorage({
      key:"curQues",
      data:props,
      success(){
        wx.navigateTo({
          url:'/pages/question/index'
        })
      }
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})