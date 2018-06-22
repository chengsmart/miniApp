const app = getApp();

Page({
  data: {
    tel: '13516189616',
    code:''
  },
  changeTel(e) {
    this.setData({
      tel: e.detail.value,
    });
  },
  changeCode(e) {
    this.setData({
      code: e.detail.value,
    });
  },
  login() {
    my.httpRequest({
      url: 'https://xxx.xxx/resource/m/ucar/crm/base/login?cid=710440&q=%7B%22flag%22%3A%2213516189616%22%2C%22verifycode%22%3A%22' + this.data.code + '%22%2C%22mapFlag%22%3A1%7D&uid=1781d274-9ec6-47f9-8d60-641c8d2d72ec1529478293381&sign=1804968216170647825616226121611159836746',
      method: 'GET',
      header:{'content-type' : 'application/x-www-form-urlencode'},
      dataType: 'json',
      success: function(res) {
        my.alert({content: 'success'});
      },
      fail: function(res) {
        my.alert({content: 'fail'});
      },
      complete: function(res) {
        my.hideLoading();
        my.alert({content: 'complete'});
      }
    });
    my.navigateBack();
  },
  getMsgCode(){
    my.httpRequest({
      url: 'https://xxx.xxx/resource/m/ucar/crm/base/validatecode?cid=710440&q=%7B%22mobile%22%3A%2213516189616%22%2C%22countryCode%22%3A86%2C%22mapFlag%22%3A1%7D&uid=1781d274-9ec6-47f9-8d60-641c8d2d72ec1529478293381&sign=39899779218067869033322196261974549807',
      method: 'GET',
      header:{'content-type' : 'application/x-www-form-urlencode'},
      dataType: 'json',
      success: function(res) {
        my.alert({content: 'success'});
      },
      fail: function(res) {
        my.alert({content: 'fail'});
      },
      complete: function(res) {
        my.hideLoading();
        my.alert({content: 'complete'});
      }
    });
  }
});
