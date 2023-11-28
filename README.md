# wx-tfjs

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FHunterXuan%2Fwx-tfjs-demo&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

微信小程序运行 TensorFlow 的 Demo

# 如何运行

## 运行环境要求

- 推荐系统：Windows、MacOS

- NodeJS：v18.x.x

- 微信基础库版本：>= 2.29.0

- 微信开发者工具：>= v1.06.2210310

- 微信开发者工具的项目配置：
  - 勾选将JS编译成ES5
  - 测试时请勾选「不校验合法域名……」

## 使用方式

1. 克隆代码到本地
2. 修改 project.config.json 中的 `appid` 配置
3. 在小程序管理后台的“设置-第三方服务-插件管理”中，通过 appid [wx6afed118d9e81df9] 查找并添加
4. 在程序根目录下`npm i` 安装依赖（有时可能需要使用 `npm i --force`）
5. 在程序根目录下`npm run build` 编译依赖
6. 手机扫描开发者工具的真机调试码

# TODO

- 修复首页子模块加载本地图片，却在真机调试中无法显示的问题
- 首页banner图片重绘（与人工智能相关）
- 首页子模块的图片重新找
- 关于页面重构
  - 背景图、logo
  - 关于重新写上团队的信息、微专业的学习心得，设计此小程序的初衷
  - 联系作者换成团队成员之一的二维码

# 小程序 Demo
小程序改名「AI Pocket」了，感觉还是挺有意义的，所以我打算认真做好这个小程序了。附上小程序二维码，欢迎大家体验 & 提出改进意见！

![AIPocket](https://i.endpot.com/image/CIDDI/AIPocket.jpg)
