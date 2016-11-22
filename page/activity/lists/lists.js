Page({
  data: {
       list: []                // 商品数据
  },
  onLoad: function (e) {
      wx.request({
        url: 'https://api.getweapp.com/thirdparty/ipinbb/dispatcherService/getAttendGroupList',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {      // 设置请求的 header
          'Content-Type': 'application/json'
        },
        success: function(res){
            console.log(res);    
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  }
})