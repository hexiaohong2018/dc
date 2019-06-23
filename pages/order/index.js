// pages/order/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    showShoppingCart:false,
    category: [
      { title: "轻松点", id: '0' },
      { title: "超值早餐1234", id: '1' },
      { title: "西式早餐", id: '2' },
      { title: "中式早餐", id: '3' },
      { title: "早餐全餐", id: '4' },
      { title: "能量早餐", id: '5' },
      { title: "小食拼盘", id: '6' },
      { title: "小食美物", id: '7' },
      { title: "其他美物", id: '8' }],
    activeId:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onclick(e){

      this.setData({
        showShoppingCart:true
      })
    },
    packUP(){
      this.setData({
        showShoppingCart:false
      })
    },
    onChange(e){
      // console.log(e);
      this.setData({
        activeId:e.target.dataset.id
      })
    }
  }
})
