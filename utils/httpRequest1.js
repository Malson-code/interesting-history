//网络请求
const App = getApp();

export default {

  //普通请求
  request(params = {}) {
    let {
      url = '',
      data = '',
      header = {},
      method = 'POST',
      dataType = 'json',
      responseType = 'text',
      success,
      fail,
      complete
    } = params;
    wx.request({
      url,
      data,
      header,
      method,
      dataType,
      responseType,
      success: function (res) {
        success && success(res)
      },
      fail: function (res) {
        fail && fail(res)
      },
      complete: function (res) {
        complete && complete(res)
      },
    })
  }

}