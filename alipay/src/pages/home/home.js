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
    // 首次进入页面时候，清空之前选择的目的地
    my.removeStorageSync({
      key: 'toAddress'
    });

    my.removeStorageSync({
      key: 'fromAddress'
    });

    // 获取用户id 用于检测登录状态
    this.setData({
      userId:my.getStorageSync({key:'userId'}).data || ''
    })
    
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
    const current = my.getStorageSync({key:'fromAddress'}).data;
    if(current){
      this.setData({
        inputValueFrom: current
      })
    }else{
      my.getLocation({
        type:1,// 获取详细的res
        success:(res)=>{
          this.setData({
            inputValueFrom:res.country + ' ' + res.province + ' ' + res.city + ' ' + res.district,
            address:{
              x:res.latitude,
              y:res.longitude
            }
          })
        }
      });
    }
    this.setData({
      inputValueTo: my.getStorageSync({key:'toAddress'}).data || ''
    })
  },
  selectAddress(e) {
    console.log(e)
    const type = e.currentTarget.dataset.type;
    my.navigateTo({ url: '../select/select?type=' + type });
  },
  useCar(e){
    if(!this.data.userId){
      my.navigateTo({ url: '../login/login' });
      return;
    }
    my.alert({
      title:'TODO跳转到下单页面',
      content:'点击用车 已经点击',
      success: (res) => {
        console.log(res)
      },
    });
  }
});
