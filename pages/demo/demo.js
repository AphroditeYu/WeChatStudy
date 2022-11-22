// pages/demo/demo.js
Page({
  data: {
    num: 0,
    
  },
  handleinput(e){
    // console.log("hello")
    //把输入框的值赋值到data当中 
    this.setData({
      num:e.detail.value
    })
  },
  handlebtn(e){
    // console.log(e)
    const operation=e.currentTarget.dataset.operation;
    this.setData({
      num:this.data.num+operation
    })
  }
})