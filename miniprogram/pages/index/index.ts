// index.ts

Page({
  data: {
    list: [
      // {
      //   title: '图像分类',
      //   img: 'https://ai.flypot.cn/mp/ai-pocket/images/index-imagenet-bg.jpg',
      //   url: '/pages/basic/mobilenet/index'
      // },
      {
        title: '表情识别',
        img: 'https://i.postimg.cc/vTqXT85Y/face-1024-700-1.jpg',
        url: '/pages/basic/face/index'
      },
      {
        title: 'AI视频',
        img: 'https://ai.flypot.cn/mp/ai-pocket/images/index-posenet-bg.jpg',
        url: '/pages/basic/posenet/index'
      },
      {
        title: 'AI大事记',
        img: 'https://ai.flypot.cn/mp/ai-pocket/images/index-teach-bg.jpg',
        url: '/pages/posts/post'
      }
    ]
  },

  onShareAppMessage() {
    return {
      title: 'SSTI AI'
    }
  },
 
  handleCardClicked(e: any) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },

  goToCoupon: function () {
    wx.navigateToMiniProgram({
      "appId": "wxece3a9a4c82f58c9",
      "extraData": {},
      "path": "taoke/pages/shopping-guide/index?scene=9GWP2Ou"
    })
  }
});

export {};
