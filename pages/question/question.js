// pages/question/index.js

const app = getApp();
let utils = require('../../utils/utils');
let curTime = 0;
let fromShare = false; //从转发来的
let allQuestions;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentList: '', //题目内容
    answer: '', //答案
    type: '', //类型
    points: '', //分值
    tips: '', //提示
    nextQues: false, //下一题
    uuid: '',
    curNum: '', //当前输入值
    showTips: false, //展示提示
    aswError: false, //展示错误信息
    showCorrect: false, //展示正确
    isLast: false, //是否是该类型的最后一个题目
    correctText: '下一关', //回答正确的时候显示的字段  如果是最后一个问题或者通过分享进来的，那么显示“更多关卡”
    tipsFlag: false, //当页是否点击过按钮，如果点击了下次直接展示就可以了
    tipsNum: 0, //提示数量
    fromShare: false, //是否是分享来的
    isExperience: false, // 是否是体验的
  },
  /*
      点击数字
  */
  numClick(e) {
    let type = e.currentTarget.dataset.curtype;
    let curNum = this.data.curNum;
    let newNum = '';
    let isLast = this.data.isLast;
    let fromShare = this.data.fromShare;
    let isExperience = this.data.isExperience;
    let uuid = this.data.uuid;
    let $this = this;
    switch (type) {
      //确定
      case 'ok':
        let answer = this.data.answer;
        if (curNum === "") return;
        curNum = Number(curNum);
        //留个后门
        if (curNum == 5201314) {
          $this.setData({
            tipsNum: 999
          })
          return;
        }
        if (answer == curNum) { //答案正确
          if (fromShare || isExperience) {
            this.setData({
              showCorrect: true,
              correctText: '尝试更多'
            })
            return;
          }
          //加分
          $this.addPoints()
          //更新回答正确的列表
          wx.getStorage({
            key: 'okList',
            success(res) {
              let okList = [];
              okList = res.data;
              if (okList.indexOf(uuid) === -1) {
                okList.push(uuid);
                wx.setStorage({
                  key: "okList",
                  data: okList
                })
              }
            }
          });
          //更新下一题
          wx.getStorage({
            key: 'curList',
            success(res) {
              let curList = res.data;
              wx.getStorage({
                key: 'uuidObj',
                success(res1) {
                  let uuidObj = res1.data;
                  let index = 0;
                  for (let i = 0; i < curList.length; i++) {
                    if (curList[i].uuid === $this.data.uuid) {
                      index = i + 1;
                      break;
                    }
                  }
                  //如果已经是最后一个就不要再更新下一个列表了
                  if (isLast || index == curList.length) {
                    isLast = true;
                    let correctText = '更多关卡';
                    $this.setData({
                      correctText
                    })
                    return;
                  }
                  let nextUuid = curList[index].uuid;
                  if ($this.data.type === 'num') {
                    uuidObj.n = nextUuid
                  } else if ($this.data.type === 'geometry') {
                    uuidObj.g = nextUuid
                  } else if ($this.data.type === 'inference') {
                    uuidObj.i = nextUuid
                  }
                  wx.setStorage({
                    key: 'uuidObj',
                    data: uuidObj
                  })
                }
              })
            }
          })
          //如果是最后一个显示更多关卡
          let correctText = '下一关';
          if (isLast) {
            correctText = '更多关卡';
          }
          this.setData({
            showCorrect: true,
            correctText
          })
        } else {
          this.setData({
            aswError: true
          })
          //错误的时候是否振动
          wx.getStorage({
            key: 'vibrate',
            success(res) {
              if (res.data) {
                wx.vibrateLong()
              }
            }
          })
        }
        break;
      case 'delete':
        this.setData({
          curNum: '',
          aswError: false
        })
        break;
      case 'share':
        return;
        break;
      case 'tip':
        this.openTips();
        break;
      case '.':
        if (curNum === '') {
          newNum = '0.';
          this.setData({
            curNum: newNum,
            aswError: false
          })
          return;
        }
        if (curNum.indexOf('.') !== -1) {
          return;
        }
        newNum = curNum + type;
        this.setData({
          curNum: newNum,
          aswError: false
        })
        break;
      default:
        newNum = curNum + type;
        this.setData({
          curNum: newNum,
          aswError: false
        })
        break;
    }
  },
  //加分
  addPoints() {
    let curPoints = Number(this.data.points) || 0;
    wx.getStorage({
      key: 'points',
      success(res) {
        let sPoints = res.data;
        let points = sPoints + curPoints;
        wx.setStorage({
          key: 'points',
          data: points
        });
      }
    });
  },
  onShow() {
    if (this.data.isExperience) return;
    //如果是从分享进来就不显示分享按钮
    if (fromShare) return;
    let $this = this;
    wx.getStorage({
      key: "tips",
      success(res) {
        let tips = Number(res.data) || 0;
        //分享时间简单判断
        if (curTime) {
          let t = (new Date()).getTime();
          let dt = t - curTime;
          if (dt > 1500) {
            curTime = 0;
            let curDate = utils.getCurDate();
            //判断当天获取提示的数量
            wx.getStorage({
              key: 'getTips',
              complete(res) {
                let getTips = res.data;
                let times = 0;
                if (getTips.date === curDate) { //当天
                  if (getTips.times < 2) {
                    times = getTips.times + 1;
                  } else {
                    return;
                  }
                } else { //不是当天
                  times = 1;
                }
                let setTips = {
                  date: curDate,
                  times
                }
                wx.setStorage({
                  key: 'getTips',
                  data: setTips
                })
                tips += 1;
                wx.setStorage({
                  key: "tips",
                  data: tips,
                  success() {
                    $this.setData({
                      tipsNum: tips
                    })
                  }
                })
              }
            })
          }
        }
        wx.setStorage({
          key: "tips",
          data: tips,
          success() {
            $this.setData({
              tipsNum: tips
            })
          }
        })
      }
    })
  },
  /*
      打开提示框
  */
  openTips() {
    let $this = this;
    let tipsFlag = this.data.tipsFlag;
    let tipsNum = this.data.tipsNum;
    if (tipsFlag) {
      $this.setData({
        showTips: true,
      })
    } else {
      if (tipsNum) {
        let tips = tipsNum - 1;
        $this.setData({
          showTips: true,
          tipsFlag: true,
          tipsNum: tips
        }, () => {
          wx.setStorage({
            key: "tips",
            data: tips
          })
        })
      } else {
        wx.showModal({
          content: '提示点不足，目前可以通过分享给好友获得(每日最多3点)！',
          showCancel: false,
        })
        return;
      }
    }

  },
  /*
      关闭提示框
  */
  closeTips() {
    this.setData({
      showTips: false
    })
  },
  /*
      通过点击背景关闭
  */
  closeTipsByBg(e) {
    let targetId = e.target.id;
    if (targetId === "tipsBg") {
      this.setData({
        showTips: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 处理体验的游客
  handleExperience() {
    let title = '欢迎体验！';
    wx.setNavigationBarTitle({
      title
    });
    try {
      let curQues = {"uuid":"uQoN7yMxjS6qhBcnVuk9he","points":1,"answer":7,"type":"num","contentList":[{"type":"text","content":"本题为南宁市公务员考试真题"},{"type":"text","content":"1, 3, 5, ___, 9, 11"}],"tips":[{"type":"text","content":"规律：奇数排列"},{"type":"text","content":"答案：7"}]};
      if (curQues) {
        console.log(curQues)
        let {
          contentList,
          answer,
          tips,
          uuid,
          type,
          points
        } = curQues;
        this.setData({
          contentList,
          answer,
          tips,
          uuid,
          type,
          points,
          tipsFlag: true,
          isExperience: true
        });
      }
    } catch (e) {}
  },
  onLoad: function (options) {
    const isExperience = options.experience;
    if (isExperience) {
      this.handleExperience();
      return;
    }
    fromShare = options.fromShare;
    /*
        点击分享进来的
    */
    let curQ;
    if (fromShare) {
      let shareUuid = options.uuid;
      const nList = require('../../config/q-num');
      const gList = require('../../config/q-geometry');
      const iList = require('../../config/q-inference');
      const allQuestions = [...nList, ...gList, ...iList];
      if (allQuestions) {
        curQ = allQuestions.filter(item => item.uuid === shareUuid)[0];
      }
    }
    let level = options.index;
    let last = options.last;
    let pass = options.pass === 'yes';
    let isLast = last === 'true';
    this.setData({
      isLast,
      fromShare
    });
    let title = level ? '关卡' + level : '关卡';
    if (fromShare) title = '欢迎解题'
    wx.setNavigationBarTitle({
      title
    })
    try {
      let curQues = curQ || wx.getStorageSync("curQues");
      if (curQues) {
        let {
          contentList,
          answer,
          tips,
          uuid,
          type,
          points
        } = curQues;
        this.setData({
          contentList,
          answer,
          tips,
          uuid,
          type,
          points,
          tipsFlag: pass
        })
      }
    } catch (e) {}
  },
  /*
      下一题
  */
  nextQuestion(e) {
    let text = e.target.dataset.text;
    /*
        根据当前显示文本来判断处理
        更多关卡   跳转到关卡页面
        下一关     则处理下一题的数据
    */
    if (text === '更多关卡') {
      wx.redirectTo({
        url: '/pages/level/level'
      });
      return;
    } else if (text === '尝试更多') {
      wx.redirectTo({
        url: '/pages/index/index'
      });
      return;
    }
    try {
      let curList = wx.getStorageSync("curList") || [];
      let curUuid = this.data.uuid;
      let index = 0;
      for (let i = 0; i < curList.length; i++) {
        if (curList[i].uuid === curUuid) {
          index = i;
          break;
        }
      }
      let nextIndex = index + 1;
      let {
        contentList,
        answer,
        level,
        tips,
        uuid,
        type,
        points
      } = curList[nextIndex];
      this.setData({
        contentList,
        answer,
        level,
        tips,
        uuid,
        type,
        points
      })
      let nextLevel = Number(nextIndex) + 1;
      let title = '关卡' + nextLevel;
      wx.setNavigationBarTitle({
        title
      })
    } catch (e) {}
    this.setData({
      showCorrect: false,
      curNum: '',
      tipsFlag: false
    })
  },
  /*
      通过分享进来的人  点击回到首页
  */
  backHome() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    curTime = (new Date()).getTime();
    let uuid = this.data.uuid;
    return {
      title: '你能帮我解答这道题么？',
      path: '/pages/question/question?fromShare=true&uuid=' + uuid
    }
  },
})