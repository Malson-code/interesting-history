// pages/question/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
    options:[],
    answer:'',
    level:'',
    tips:'',
    isOk:false,
    nextQues:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try{
      let curQues = wx.getStorageSync("curQues");
      console.log(curQues);
      if(curQues){
        let {content,options,answer,level,tips,isOk} = curQues;
        this.setData({
          content,options,answer,level,tips,isOk
        })
      }
    }catch(e){}
  },
  
  //选择答案判断
  onSelectAnswer(e){
    let opt = e.target.dataset.opt;
    let correctAsw = this.data.answer;
    //答案正确
    if(opt == correctAsw){
      this.setData({
        nextQues:true
      });
      setTimeout(()=>{
        this.setData({
          nextQues:false
        });
      },1000)
    }
    //答案错误
    else{
      wx.vibrateLong()
    }
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})