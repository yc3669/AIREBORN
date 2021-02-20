const app = getApp()
App({
  onLaunch() {
    wx.cloud.init({
      env:'aireborn-9gqnw48b5306b8a0',
      traceUser:true
    })
  }
})
