// pages/orderForm/quKuaiDi/quKuaiDi.js
import Toast from '/@vant/weapp/toast/toast';

let uploadIndex = 0
let uploadArr = []

const citys = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
};

const dateData = {
  [new Date().getUTCDate()]:['00:00','00:30'],
  [new Date().getUTCDate()+1]:['00:00','00:30'],
  [new Date().getUTCDate()+2]:['00:00','00:30'],
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [{
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        name: '图片1',
      },
      // Uploader 根据文件后缀来判断是否为图片文件
      // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      {
        url: 'http://iph.href.lu/60x60?text=default',
        name: '图片2',
        isImage: true,
        deletable: true,
      },
    ],
    // 弹出层
    show: false,
    columns1: ['菜鸟驿站（综合楼）', '菜鸟驿站71号店', '菜鸟驿站43号店', '丰巢快递柜'],
    cellItem1: {
      icon: 'shopping-cart-o',
      title: '取件地',
      must: true,
    },
    columns2: ['小于5斤', '5-10斤', '10-20斤', '20-50斤'],
    cellItem2: {
      title: '物品重量',
    },
    columns3: ['不限性别', '限男生', '限女生'],
    cellItem3: {
      title: '抢单限制',
    },
    columns4: ['1小时内', '2小时内', '3小时内'],
    cellItem4: {
      title: '订单自动取消',
    },
    columns5: [
      {
        values: Object.keys(dateData),
        className: 'column1',
      },
      {
        values: dateData['25'],
        className: 'column2',
        defaultIndex: 2,
      },
    ],
  },

  afterRead(event) {
    console.log(event)
    const {
      file
    } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    // wx.uploadFile({
    //   url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
    //   filePath: file.url,
    //   name: 'file',
    //   formData: {
    //     user: 'test'
    //   },
    //   success(res) {
    //     // 上传完成需要更新 fileList
    //     const {
    //       fileList = []
    //     } = this.data;
    //     fileList.push({
    //       ...file,
    //       url: res.data
    //     });
    //     this.setData({
    //       fileList
    //     });
    //   },
    // });
    this.setData({
      fileList: this.data.fileList.concat(file)
    })
  },
  // 上传图片
  uploadFilePromise(fileName, chooseResult) {
    return wx.cloud.uploadFile({
      cloudPath: fileName,
      filePath: chooseResult.url
    });

  },
  // 删除图片
  delete(event) {
    const index = event.detail
    const fileList = this.data.fileList
    fileList.splice(index, 1);
    this.setData({
      fileList
    });
  },

  // handleClick(e) {
  //   console.log(e)
  // },
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
  onShow: function () {

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