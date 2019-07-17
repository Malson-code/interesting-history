// 公共数据处理方法
module.exports = {
  getUserInfo(app) {
    let userInfo = app.globalData.userInfo;
    if (userInfo) {
      return userInfo;
    } else {
      wx.navigateTo({
        url: '/pages/index/index'
      })
    }
  },
  //生成Uuid  len生成的UUID长度
  generateUuid(len = 21) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [], i, radix = chars.length;
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    return 'U' + uuid.join('');
  },

  //深度拷贝对象
  deepCopyValue(source) {
    let sourceCopy = source instanceof Array ? [] : {};
    for (var item in source) {
      if (source[item] !== null) {
        sourceCopy[item] = typeof source[item] === 'object' ? this.deepCopyValue(source[item]) : source[item];
      } else {
        sourceCopy[item] = source[item] = null;
      }
    }
    return sourceCopy;
  },
  getCurDate(g = '-') {
    let data = new Date();
    let year = data.getFullYear(),
      month = data.getMonth() + 1,
      day = data.getDate();
    return year + g + month + g + day
  }
}