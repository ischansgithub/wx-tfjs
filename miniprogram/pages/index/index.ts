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
        title: '微表情识别',
        img: 'https://th.bing.com/th/id/R.988f488fbdf56ea83a8aebdbfc9600fd?rik=mPgIyG2%2fVeVDFQ&riu=http%3a%2f%2fwww.cyberlink.com%2fstat%2ftechnology%2fimg%2f1200x630_face.jpg&ehk=QudBwtE0XMNyhpb7wl5OUMQlnAAyQBHKfT55QdaNm%2bs%3d&risl=&pid=ImgRaw&r=0',
        url: '/pages/basic/face/index'
      },
      {
        title: 'AI大事记',
        img: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/final_keyword_header.width-1200.format-webp.webp',
        url: '/pages/posts/post'
      },
      {
        title: 'AI微视频',
        img: 'https://image.jiqizhixin.com/uploads/editor/62cecc07-39a4-4a50-be4e-c9294dd3540e/640.gif',
        url: ''
      },
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
