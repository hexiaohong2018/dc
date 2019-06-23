// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    isIphoneX:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      active:options.active
    })
    app.getPhoneInfo().then(res=>{
      this.setData({
        isIphoneX:res.isIphoneX
      })
    })
  },
  onChange(e){
    this.setData({
      active: e.detail
    })
  }
})