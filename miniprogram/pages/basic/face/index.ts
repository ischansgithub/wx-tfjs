// pages/basic/posenet/index.ts
const app = getApp<IAppOption>();

import * as model from '../../../models/face/model';

const CANVAS_ID = 'canvas'

Page({

  ctx: null as any,

  /**
   * Page initial data
   */
  data: {
    cameraBlockHeight: app.globalData.systemInfo.screenHeight - app.globalData.menuHeaderHeight,
    predicting: false,
    videoWidth: null,
    videoHeight: null,
    resultObject: {} as { [key: string]: number }  // chenww初始值为空字典
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function () {
    //
  },

  /**
     * 生命周期函数--监听页面初次渲染完成
     */
  onReady: async function () {
    setTimeout(() => {
      this.ctx = wx.createCanvasContext(CANVAS_ID);
    }, 500);

    await this.initModel();

    const context = wx.createCameraContext();
    let count = 0;
    const listener = context.onCameraFrame((frame) => {
      count = count + 1;
      if (count === 3) {
        count = 0;
        this.executeClassify(frame);
      }
    })
    listener.start();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //
  },

  initModel: async function () {
    this.showLoadingToast();

    await model.load();

    this.hideLoadingToast();

    if (!model.isReady()) {
      wx.showToast({
        title: '网络连接异常',
        icon: 'none'
      });
    }
  },

  executeClassify: async function (frame: any) {
    const { predicting, cameraBlockHeight } = this.data;
  
    if (model.isReady() && !predicting) {
      this.setData({
        predicting: true
      }, async () => {
        // 获取人脸检测结果
        const faces = await model.detectFaces(frame, {
          width: app.globalData.systemInfo.screenWidth,
          height: cameraBlockHeight
        });
  
        const resultObject = model.chenww_drawLipstick(this.ctx, faces, "rgba(255,0,0,0)")
        console.log(resultObject)
        // 更新数据，触发页面更新
        this.setData({
          resultObject: resultObject
        });
        
        // 结束预测状态
        this.setData({
          predicting: false,
        });
      });
    }
  },

  showLoadingToast() {
    wx.showLoading({
      title: '拼命加载模型',
    })
  },

  hideLoadingToast() {
    wx.hideLoading()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '面部特征'
    }
  }
})