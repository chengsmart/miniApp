const app = getApp();

Page({
  data: {
    userId:'',
    inputValueFrom: '',
    inputValueTo: '',
    address:{
      x:'',
      y:''
    }
  },  
  onLoad(){
    let _this = this;
    // 首次进入页面时候，清空之前选择的目的地
    my.removeStorage({
      key: 'toAddress',
      success: function(){
        console.log('toAddress 清空')
      }
    });

    my.removeStorage({
      key: 'fromAddress',
      success: function(){
        console.log('fromAddress 清空')
      }
    });

    // 获取用户id 用于检测登录状态
    my.getStorage({
      key: 'userId',
      success: function(res) {
        if(res.data != undefined || res.data != null){
          _this.setData({
            userId:res.data
          })
        }
      },
      fail: function(res){
        my.alert({content: res.errorMessage});
      }
    });

    app.getUserInfo().then(user =>
      this.setData({
        user,
      })
    );
  },
  onReady() {
    // 页面加载完成
    my.getLocation({
      type:1,// 获取详细的res
      success:(res)=>{
        console.log(res)
        console.log(res.district)
        this.setData({
          inputValueFrom:res.country + ' ' + res.province + ' ' + res.city + ' ' + res.district,
          address:{
            x:res.latitude,
            y:res.longitude
          }
        })
      }
    });
  },
  onShow(e){
    let _this = this;
    // 页面显示
    my.getStorage({
      key: 'fromAddress',
      success: function(res) {
        if(res.data != undefined || res.data != null){
          _this.setData({
            inputValueFrom:res.data
          })
        }
      },
      fail: function(res){
        my.alert({content: res.errorMessage});
      }
    });

    my.getStorage({
      key: 'toAddress',
      success: function(res) {
        if(res.data != undefined || res.data != null){
          _this.setData({
            inputValueTo:res.data
          })
        }
      },
      fail: function(res){
        my.alert({content: res.errorMessage});
      }
    });
  },
  selectAddress(e) {
    console.log(e)
    const type = e.currentTarget.dataset.type;
    my.navigateTo({ url: '../select/select?type=' + type });
  },
  useCar(e){
        
    my.alert({
      title:'TODO跳转到下单页面',
      content:'点击用车 已经点击',
      success: (res) => {
        console.log(res)
      },
    });
  }
});
