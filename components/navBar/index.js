// components/navBar/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:""
    },
    arrow:{
      type:Boolean,
      value:false
    },
    background:{
      type:String,
      value:""
    },
    arrowColor:{
      type:String,
      value:"",
    }
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight:0,
    menuHeight:0,
    color:"#000000"
  },
  lifetimes:{
    attached() {
      // 在组件实例进入页面节点树时执行
      app.phoneInfo().then(res => {
        this.setData({
          background: this.data.background || app.globalData.navBarColor,
          color: app.isDeepColor(this.data.background) ? "#ffffff" : "#000000", 
          statusBarHeight: res.statusBarHeight,
          menuHeight: res.menuRect.height + (res.menuRect.top - res.statusBarHeight)*2
        })
      })
    
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack(){
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})
