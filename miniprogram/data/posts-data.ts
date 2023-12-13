var local_database = [{
  date: "Sep 18 2023",
  title: '不到1000行代码，PyTorch团队让Llama 7B提速10倍',
  content: '在过去的一年里，生成式 AI 发展迅猛，在这当中，文本生成一直是一个特别受欢迎的领域，很多开源项目如 llama.cpp、vLLM 、 MLC-LLM 等，为了取得更好的效果，都在进行不停的优化。    作为机器学习社区中最受欢迎框架之一的 PyTorch，自然也是抓住了这一新的机遇，不断优化。为此让大家更好的了解这些创新，PyTorch 团队专门设置了系列博客，重点介绍如何使用纯原生 PyTorch 加速生成式 AI 模型。 ',
  reading: '112',
  collection: '64',
  headImgSrc: 'https://image.jiqizhixin.com/uploads/editor/5f35be7f-f9b1-4fc2-9bac-5b58c83571ca/640.png',
  author: 'J_King',
  dateTime: '21小时前',
  detail: '第一步：通过 Torch.compile 和静态 KV 缓存减少 CPU 开销，实现 107.0 TOK/S，torch.compile 允许用户将更大的区域捕获到单个编译区域中，特别是在 mode=”reduce-overhead” 时（参考下面的代码），这一功能对于减少 CPU 开销非常有效，除此以外，本文还指定 fullgraph=True，用来验证模型中没有「图形中断」（即 torch.compile 无法编译的部分）。然而，即使有 torch.compile 的加持，还是会遇到一些障碍。第一个障碍是 kv 缓存。即当用户生成更多的 token 时， kv 缓存的「逻辑长度（logical length）」会增长。出现这种问题有两个原因：一是每次缓存增长时重新分配（和复制）kv 缓存的成本非常高；其次，这种动态分配使得减少开销变得更加困难。为了解决这个问题，本文使用静态 KV 缓存，静态分配 KV 缓存的大小，然后屏蔽掉注意力机制中未使用的值。第二个障碍是 prefill 阶段。用 Transformer 进行文本生成可视为一个两阶段过程：1. 用来处理整个提示的 prefill 阶段 2. 解码 token.尽管 kv 缓存被设置为静态化，但由于提示长度可变 ，prefill 阶段仍然需要更多的动态性。因此，需要使用单独的编译策略来编译这两个阶段。虽然这些细节有点棘手，但实现起来并不困难，而且性能的提升是巨大的。这一通操作下来，性能提高了 4 倍多，从 25 tok/s 提高到 107 tok/s。',
  // 嵌套
  img: {
    imgSrc: 'https://image.jiqizhixin.com/uploads/editor/5f35be7f-f9b1-4fc2-9bac-5b58c83571ca/640.png',
    avatar: '/images/1.jpg',
  },
  img_condition: true,
  postId: 0,
  music: {
    url: "http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38",
    title: "夜夜夜夜-齐秦",
    coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
  }
},

{
  date: "Nav 16 2023",
  title: '微软免费课程、吴恩达开新课，顶级生成式AI必备课程来了',
  content: '你准备好了吗？开启新一轮的学习之旅。在生成式 AI 盛行的当下，你是否被这种技术所折服，例如输入一段简简单单的文字，转眼之间，一幅精美的图片，又或者是文笔流畅的文字就展现在你的面前。',
  reading: '256',
  collection: '151',
  headImgSrc: 'https://image.jiqizhixin.com/uploads/editor/f83ab8ed-9e61-453f-b6b8-2fe502788bab/640.gif',
  author: 'J_King',
  dateTime: '10小时前',
  detail: '课时 1：如何学习本门课程，主要介绍这门课程有哪些结构，让读者了解这门课程大概讲的是什么；课时 2：介绍生成式 AI 和 LLM，让用户理解什么是生成式 AI 以及 LLM 是如何工作的；课时 3：探索和比较不同的 LLM，学习完本课时，以后该用哪个模型都会一清二楚；课时 4：负责任地使用生成式 AI，帮助用户了解基础模型的局限性和人工智能背后的风险；课时 5：理解提示工程基础，熟练掌握提示的结构和用法；课时 6：如何创建高级提示，应用提示工程技术来改善提示的结果；课时 7：构建文本生成应用程序；课时 8：构建聊天应用程序，学习完本课时，可以帮助用户构建一个图像生成应用程序；课时 9：使用向量数据库构建搜索应用程序，示例展示了创建一个使用 Embeddings 搜索数据的应用程序；课时 10：构建低代码 AI 应用程序；课时 11：集成外部应用程序与函数调用；课时 12：帮助开发者在开发生成式 AI 应用程序时应UX 设计原则。',
  // 嵌套
  img: {
    imgSrc: 'https://image.jiqizhixin.com/uploads/editor/f83ab8ed-9e61-453f-b6b8-2fe502788bab/640.gif',
    avatar: 'https://cdn.jiqizhixin.com/assets/avatars/anonymous-3-fb31ad35511be5a49c496964c9d2190933420699e44988a3401765d28949a1f8.jpg',
  },
  img_condition: true,
  postId: 1,
  music: {
    url: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
    title: "鬼迷心窍-李宗盛",
    coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000"
  }
},
{
  date: "Nav 19 2023",
  title: '小模型编排，让 1+1>2，企业工作更灵活，效率更高',
  content: '善用小模型，发挥大作用。AI 的使用越来越广泛，不局限于个人对于它的使用。在企业中，也越来越流行使用 AI 完善工作流程、推进工作进度。但不得不提到的是，功能更加强大的往往是规模较大的大模型，这会造成企业部署上的难题。Silvio Savarese 发文针对这一问题谈到了自己的想法，模型并不是越大越好，小模型组合起来能更好地处理工作内容。',
  reading: '256',
  collection: '11',
  headImgSrc: 'https://image.jiqizhixin.com/uploads/editor/6a4705b2-82e4-4f13-a627-df111b8de990/640.png',
  author: 'M_King',
  dateTime: '6小时前',
  detail: 'instein Copilot：生成式 AI 的未来一瞥开箱即用的 Einstein Copilot 很难不给人留下深刻印象。它从头开始设计，通过在几乎所有类型的工作流程中为用户提供帮助，以安全的方式提高工作效率。它可以处理以自然语言发布的问题，并提供从公司安全的专有数据中提取的相关可信答案。这是我所相信的 AI 在企业中的发展方向的清晰图景：一个单一、可信的界面，围绕日常的人机交互而设计，并且能够帮助完成各种任务。它展现了 AI 的力量，确保技术符合企业的需求，而且我毫不怀疑它还将改变客户的工作方式。而 LAM，随着其灵活性和功能的发展，将把这个已经非常强大的力量提升到一个新的水平。让生成式 AI 模型「既小又大」最近，生成式 AI 领域的许多话题都围绕着为 LLM 和 LAM 提供动力的模型规模和模型架构展开。随着 OpenAI 等公司不断挑战规模极限，参数数量远超千亿，我们不难得出这样的结论：越大越好。事实上，大型模型通常会吹嘘它们的性能很难或不可能以其他方式实现。并且随着模型尺寸的增加，不可思议的复杂行为会出现，这表明越来越大的规模策略会带来显著的好处。',
  // 嵌套
  img: {
    imgSrc: 'https://image.jiqizhixin.com/uploads/editor/6a4705b2-82e4-4f13-a627-df111b8de990/640.png',
    avatar: 'https://cdn.jiqizhixin.com/assets/avatars/anonymous-2-c1597a15e88db92a6875ac5a53546c5a941c23c12158c0c4bd046ee45e9f1ba9.jpg',
  },
  img_condition: true,
  postId: 2,
  music: {
    url: "http://ws.stream.qqmusic.qq.com/C100004HLusI2lLjZy.m4a?fromtag=38",
    title: "女儿情-万晓利",
    coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"
  }
},

{
  date: "Aue 05 2023",
  title: '微调都不要了？3个样本、1个提示搞定LLM对齐，提示工程师：全都回来了',
  content: '大模型的效果好不好，有时候对齐调优很关键。但近来很多研究开始探索无微调的方法，艾伦人工智能研究所和华盛顿大学的研究者用「免调优」对齐新方法超越了使用监督调优（SFT）和人类反馈强化学习（RLHF）的 LLM 性能。',
  reading: '356',
  collection: '122',
  headImgSrc: 'https://image.jiqizhixin.com/uploads/editor/8eceba01-56ed-4acf-bd15-93b0382ebaf3/640.png',
  author: 'Sebastian Raschka',
  dateTime: '3小时前',
  detail: '通过 token 分布变化揭开模型的神秘面纱本文交替使用术语「未微调 LLM」和「基础 LLM」来指代那些在大型语料库上进行预训练，而无需使用指令数据进行任何后续微调的 LLM。这一小节的内容可总结为：对齐只影响很小一部分 token，基础 LLM 和对齐 LLM 在大多数位置上的解码行为相同，它们共享相同的 top-ranked token；对齐主要涉及 stylistic token，例如嗯、好吧、总之等口头语，以及过渡词、安全免责声明等，这些仅占总 token 位置的很小一部分；对于靠前的 token（ earlier tokens）来说，对齐更为重要。然而对于大多数位置来说，对齐模型排名靠前的 token 位于基础模型排名 top 5 的 token 之内；基础 LLM 已经获得了足够的知识来遵循指令，当给定适当的上下文作为前缀时，它们的行为与对齐的 LLM 非常相似。如图 2 所示，本文使用 llama-2-7b 和 llama-2-7b-chat 作为基础模型和对齐模型。在 1000 个测试样本中的结果表明，未经过微调的 LLM 和对齐的 LLM 共享预训练中相同的预先存在的知识。举例来说，未经微调的 LLM 可以仅根据上下文「Thank you for asking! 」来流畅地生成以「 The」为开头的回答（见下图文本开头第一句）。这些结果表明，利用未经微调的 LLM 和触发 token 可以生成高质量的答案。',
  // 嵌套
  img: {
    imgSrc: 'https://image.jiqizhixin.com/uploads/editor/8eceba01-56ed-4acf-bd15-93b0382ebaf3/640.png',
    avatar: 'https://image.jiqizhixin.com/uploads/editor/6c528f2d-b370-40a0-a34e-3503e31682b2/640.png',
  },
  img_condition: true,
  postId: 3,
  music: {
    url: "http://ws.stream.qqmusic.qq.com/C100002mWVx72p8Ugp.m4a?fromtag=38",
    title: "恋恋风尘-老狼",
    coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001VaXQX1Z1Imq.jpg?max_age=2592000",
  }
},

{
  date: "Nov 17 2023",
  title: '不是大模型全局微调不起，只是LoRA更有性价比，教程已经准备好了',
  content: '这是作者 Sebastian Raschka 经过数百次实验得出的经验，值得一读。增加数据量和模型的参数量是公认的提升神经网络性能最直接的方法。目前主流的大模型的参数量已扩展至千亿级别，「大模型」越来越大的趋势还将愈演愈烈。',
  reading: '116',
  collection: '75',
  headImgSrc: 'https://image.jiqizhixin.com/uploads/editor/af7c7cb1-855e-4210-a749-f51103de9242/640.png',
  author: 'Max Planck Institute for Terrestrial Microbiologyg',
  dateTime: '1小时前',
  detail: '虽然 LLM 训练（或者说在 GPU 上训练出的所有模型）有着不可避免的随机性，但多 lun 训练的结果仍非常一致。如果受 GPU 内存的限制，QLoRA 提供了一种高性价比的折衷方案。它以运行时间增长 39% 的代价，节省了 33% 的内存。在微调 LLM 时，优化器的选择不是影响结果的主要因素。无论是 AdamW、具有调度器 scheduler 的 SGD ，还是具有 scheduler 的 AdamW，对结果的影响都微乎其微。虽然 Adam 经常被认为是需要大量内存的优化器，因为它为每个模型参数引入了两个新参数，但这并不会显著影响 LLM 的峰值内存需求。这是因为大部分内存将被分配用于大型矩阵的乘法，而不是用来保留额外的参数。对于静态数据集，像多轮训练中多次迭代可能效果不佳。这通常会导致过拟和，使训练结果恶化。如果要结合 LoRA，确保它在所有层上应用，而不仅仅是 Key 和 Value 矩阵中，这样才能最大限度地提升模型的性能。调整 LoRA rank 和选择合适的 α 值至关重要。提供一个小技巧，试试把 α 值设置成 rank 值的两倍。14GB RAM 的单个 GPU 能够在几个小时内高效地微调参数规模达 70 亿的大模型。对于静态数据集，想要让 LLM 强化成「全能选手」，在所有基线任务中都表现优异是不可能完成的。想要解决这个问题需要多样化的数据源，或者使用 LoRA 以外的技术。',
  // 嵌套
  img: {
    imgSrc: 'https://image.jiqizhixin.com/uploads/editor/af7c7cb1-855e-4210-a749-f51103de9242/640.png',
    avatar: 'https://image.jiqizhixin.com/uploads/editor/34aba98e-865c-4be5-ad38-c2b4b234d381/640.png',
  },
  img_condition: true,
  postId: 4,
  music: {
    url: "http://ws.stream.qqmusic.qq.com/C100002I8eGJ28BI17.m4a?fromtag=38",
    title: "朋友-谭咏麟",
    coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004eGsCN3SUheO.jpg?max_age=2592000"
  }
}

]

// 给脚本文件定义一个出口
module.exports = {
postList: local_database
}