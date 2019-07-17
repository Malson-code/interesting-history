// pages/level/index.js
const app = getApp();
let levelList = require('../../config/levelList');
let qNumList = require('../../config/q-num');
let qGeometryList = require('../../config/q-geometry');
let qInferenceList = require('../../config/q-inference');
// let p = 0;
// let a = [];
// function mapPoints(arr) {
//   arr.map(item => {
//     p += item.points;
//     if (a.indexOf(item.uuid) !== -1) {
//       console.error('重复id' + item.uuid)
//     }
//     a.push(item.uuid)
//   })
// }
// mapPoints(qNumList);
// mapPoints(qGeometryList);
// mapPoints(qInferenceList);
// console.log(p);

Page({
  data: {
    qNumList,
    qGeometryList,
    qInferenceList,
    levelList,
  },
  //点击某个题目
  goQuestionPage(e) {
    let dataset = e.target.dataset
    let {
      props, list, level, last, pass
    } = dataset;
    if (!props) {
      //报错
      return;
    };
    /*
        index 当前第几题
        last  是否是最后一个
        pass  是否已经回答完毕
    */
    wx.setStorage({
      key: "curQues",
      data: props,
      success() {
        wx.setStorage({
          key: "curList",
          data: list,
          success() {
            wx.navigateTo({
              url: '/pages/question/question?index=' + level + '&last=' + last + '&pass=' + pass
            })
          }
        })
      }
    })
  },

  //数据遍历  如果是已经回答过得  那么isOK设为true
  filterData(arr, okList) {
    return arr.map(item => {
      if (okList.indexOf(item.uuid) !== -1) {
        item.isOk = true;
      }
      return item
    })
  },
  onShow() {
    let okList = [];
    let uuidObj = {};
    let $this = this;
    wx.getStorage({
      key: 'okList',
      success(res) {
        okList = res.data;
        wx.getStorage({
          key: 'uuidObj',
          success(res) {
            uuidObj = res.data;
            //数据遍历  
            qNumList = $this.filterData(qNumList, okList);
            qGeometryList = $this.filterData(qGeometryList, okList);
            qInferenceList = $this.filterData(qInferenceList, okList);
            $this.setData({
              okList,
              uuidObj,
              qNumList,
              qGeometryList,
              qInferenceList,
              levelList
            }, () => {
            })
          }
        })
      }
    })
  },
  onLoad(options) {

  },
})