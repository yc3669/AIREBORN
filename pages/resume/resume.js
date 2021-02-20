

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    opendi:""
  },
  onGotUserInfo:function(e){
    const that = this
    wx.cloud.callFunction({
      name:"login",
      success:res=>{
        console.log("成功")
        that.setData({
          openid:res.result.openid,
          userinfo:e.detail.userInfo
        })
        console.log("openid",that.data.openid)
        console.log("userinfo",that.data.userinfo)
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
  onShow:function () {
   
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