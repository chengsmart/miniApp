### 支付宝小程序开发说明

#### 工欲善其事必先利其器
- 小程序开发工具下载[蚂蚁开发者工具](https://docs.alipay.com/mini/ide/download)
- 但是，并不建议在该工具下进行开发，尤其对于重度emmet依赖者，尝试在sublime下，修改axml文件为html类型，使用emmet进行开发。该工具仅用于在电脑端查看效果

#### 注册
- 登录到小程序开发的[开放平台](https://open.alipay.com/platform/manageHome.htm)
- 发布需要企业账号
- 发布需要用到appid，*由于个人用户，未按照提示找到相关入口*

#### 起步

- 目录介绍
 - `/pages` 以文件夹形式存放所有页面。  **子文件夹名和文件夹下文件名需要保持一致**
 - `app.acss` 全局样式
 - `app.js` 全局变量以及全局方法
 - `app.json` 全局配置文件
- 页面文件介绍 
 - axml文件：为html模板文件，语法同html，渲染模板方式与vue类似
 - acss文件：为样式文件，仅仅对应其axml文件，使用css语法，不支持属性选择器，不支持sass或者less语法，**禁用.a和.am开头的class名**
 - js文件：页面js文件，需要对Page{}进行初始化，参数为`Object`  
  1. data：为数据，可以使用this.setData进行修改
  2. function：为方法声明，以on为开头的方法，基本为小程序自带的hock，也可以在此位置自定义方法，通过this进行调用，[文档参考](https://docs.alipay.com/mini/framework/page)
 - json文件：页面级别的配置文件，仅可以修改全局配置中的windows相关，如`optionMenu`等
- 开发文档 [小程序框架](https://docs.alipay.com/mini/component/overview)
- API介绍，主要介绍下非界面性质的常用api [官方详细介绍](https://docs.alipay.com/mini/api/overview)
 - 收起键盘 ` my.hideKeyboard();`
 - 获取手机通讯录联系人或者支付宝好友
 - 用户相关：授权、信息认证、二维码
 - 入口相关：调起小程序，小程序跳转
 - 支付相关、扫码相关
 - **[定位](https://docs.alipay.com/mini/api/location)**
 - 设备相关：网络状态、摇一摇、剪切板、用户截屏状态
 - 其他：[分享](https://docs.alipay.com/mini/api/share_app) [蓝牙](https://docs.alipay.com/mini/api/bluetooth-intro) [数据安全](https://docs.alipay.com/mini/api/data-safe) [摄像头&图库](https://docs.alipay.com/mini/api/media-image)

#### 兼容性  
可能会存在旧版本支付宝不支持的情况，官方建议进行低版本支付宝的兼容判断，官方支持`my.canIUse`形式的方法  
```javascript
if (my.getLocation) {
	my.getLocation();
} else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
	my.alert({
		title: '提示',
		content: '当前支付宝版本过低，无法使用此功能，请升级最新版本的支付宝'
	});
}
```

#### 从微信小程序的过渡
- 两个小程序在读取storage的操作上，不仅存在语法差异，支付宝小程序在读取后，需要调用`.data`方法，微信小程序不需要
- 如果你的项目从微信小程序copy过来的，除了要替换`wx`为`my`之外，还有比较多的事件和条件语句需要修改。**值得注意的一点是ajax的`header`和`headers`**

#### 注意事项
- 整体类似于vue的形式，但是具体数据绑定不尽相同，对于input的绑定，需要手动更新value
- 修改app.json产生语法等错误后，需重新启动模拟器才可生效，否则及时修改正确也会有莫名的报错
- 部分功能性api需要基础库支持，需要提前判断环境，[支付宝对应版本库的关系](https://docs.alipay.com/mini/framework/lib)
- 开发者工具对于部分功能暂不支持，需要真机调试，例如`my.multiLevelSelect`
- 相关问题 [<< 传送门 >>](https://docs.alipay.com/mini/developer/qa)


#### **[官方文档](https://docs.alipay.com/mini/developer/getting-started)**
#### [官方优化建议](https://docs.alipay.com/mini/framework/performance-tips)