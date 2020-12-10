# Live2D-M

基于electron的，在本地使用的，加载Live2D模型的小程序，支持MOC和MOC3。

M的意思就是My Live2D（笑


## 开始

项目的起因是因为在网上偶然见到了PPet（[zenghongtu/PPet](https://github.com/zenghongtu/PPet)）这个加载Live2D的程序，惊为天人，加上那段时间对少前PA-15的皮肤有兴趣，连带着对Live2D也有兴趣了。奈何PPet的作者挖坑不填，算是做了一个半成品，等了好久也没见更新。

啊这……好吧，只能上了（撸袖子

一开始的设想是移植代码写一个基于QT的程序，但……我真的是想多了，低估了自己菜的水准。

怎么办，还能怎么办，老老实实从零开始学习electron可能比移植还来的快。


## 第一版程序

第一版支持MOC，也就是Cubism 2，大概完成于20年7月，因为github上有比较成熟的项目，所以并不算困难，时间多数花在了electron的学习与使用上。

说真的我一个地地道道的C学家，一开始看PPet的源码真的跟看天书似的，也许是环境的问题，代码也并不能让新手凭借几行代码简简单单跑起来看到效果（至少当时菜鸡的我没用源码跑起来），实在不适合electron入门。

好在找到了[erwindy/live2d-desktop](https://github.com/erwindy/live2d-desktop)，这个作者的代码就很友好了，简单直接没有花活，就是纯粹的加载MOD，很容易就能看懂，按照electron官方流程安装依赖库后就可以直接跑起来，适合electron入门。

跑起来程序，能看到效果，这心理安慰就有了，代码什么的就可以慢慢看了_(:з」∠)_

程序的界面逻辑参考PPet，代码就纯粹是按照electron官方文档照葫芦画瓢，总之是先把程序框架搭了起来。

加载MOD的代码以[fghrsh/live2d_demo](https://github.com/fghrsh/live2d_demo)为基础修改，经过一连串的修修补补后，姑且把我需要的功能都做出来了。

程序做好后第一件事就是加载Destinychild的耳廓狐（PA-15：？？？），虽然弃坑后的重逢是很开心啦，但网上解包得到的json文件动作和语音都需要重写，不能开包即用，这里可以参考[Json配置示例](http://live2d.pavostudio.com/doc/zh-cn/live2d/model-json-example/)，一番努力之后当听到耳廓狐的语音那就更开心了。至于PA-15，那是真的色，prpr（PA-15：？？？）。

>  第一版程序感谢名单:
>
>  ​	[zenghongtu/PPet](https://github.com/zenghongtu/PPet)：初始动力，界面参考。
>
>  ​	[erwindy/live2d-desktop](https://github.com/erwindy/live2d-desktop)：electron入门，简单易懂。
>
>  ​	[fghrsh/live2d_demo](https://github.com/fghrsh/live2d_demo)：大佬项目，注释清晰，程序主代码。


## 中途

第一版程序写完后，自然是快乐的搜索下载修改加载MOD的娱乐时间。结果，我发现居然还有MOC3这种东西，像碧蓝、少枪这种新（相对）手游都更新换代采用最新格式。但第一版的程序并不支持，啊这……快乐又消失不见了。

不过中途比较忙，又进入了码完代码的倦怠期，当你码完代码放松了一半后知道还有工作要做，那可真的是……一点都不想动了。

拖着拖着就拖到了11月份，Live2D-M也终于迎来了第二版。


## 第二版程序

第二版追加支持MOC3，也就是Cubism 3，完成于20年11月，没什么好说的，代码现成，只是需要做一下微（lei）不（ge）足（ban）道（si）的整合工作。

虽然有大佬打下基础，但需要修改的地方还是挺多的，动作写的很简单，语音干脆没有，为了能和第一版的程序对接，改了不少地方。顺带还把第一版存在的BUG给修了不少2333。

github上关于MOC3的代码有好几个，基本上是同源[alg-wiki/AzurLaneL2DViewer](https://github.com/alg-wiki/AzurLaneL2DViewer)。

在首次加载MOD的时候我参考了三篇项目：

[HCLonely/Live2dV3](https://github.com/HCLonely/Live2dV3)

[LitStronger/live2d-moc3](https://github.com/LitStronger/live2d-moc3)

[UsernameFull/l2d](https://github.com/UsernameFull/l2d)

虽然只有live2d-moc3在我修改后成功跑起来了，但大家的代码都给我提供了一个参考和对比，所以一起列出来感谢。

程序既然跑起来了，剩下的无非是无聊的修改增补调试工作，总体进度比一开始的electron菜鸡阶段要快的多。

像第一版具有的基础功能该加上的都给它加上了，使用逻辑完全向第一版靠齐。

因为没找到MOC3对应的[Json配置示例]，姑且按照MOC的逻辑添加的语音功能，如果有和官方不符的地方请对应提供的MOD示例进行修改。

>  第二版程序感谢名单:
>
>  ​	[alg-wiki/AzurLaneL2DViewer](https://github.com/alg-wiki/AzurLaneL2DViewer)：可能是MOC3之源。
>
>  ​	[LitStronger/live2d-moc3](https://github.com/LitStronger/live2d-moc3)：加载MOD成功，基于此进行魔改。
>
>  ​	[HCLonely/Live2dV3](https://github.com/HCLonely/Live2dV3)：参考了语音部分代码。
>
>  ​	[UsernameFull/l2d](https://github.com/UsernameFull/l2d)：代码对比。
>
>  ​	[Himehane/live2d_on_website](https://github.com/Himehane/live2d_on_website)：结构简明，注释清晰，虽然与上面代码在处理上有所不同，但适合学习。（写完代码才发现这个项目，血亏）


## 补充

不得不说百度的搜索逻辑真的跟屎一样，不是贴吧逼乎就是CSDN和各种软件站，小众的东西你永远搜不到你需要的结果。本来想深入看一下Live2D-Web的源码，想要找找结构注释，结果搜到的都是什么鬼东西（呸。

狗哥每次架梯麻烦，也就bing好用一点。然后通过bing看到某篇blog的我震惊了。因为遵照License中的内容，live2dcubismcore.min.js是不允许再分发的，需要从[live2d官网](https://live2d.github.io)下载Cubism SDK for Web。

好吧，这我之前真的完全不知道，省得被查水表，~~暂时先不挂源码了~~，live2dcubismcore.min.js我删除了，需要的话请到官网自助下载后放进static文件夹。

程序大概100M+，鉴于Github的下载尿性，顺便挂一个封装好的程序扔到百度云上供大家测试使用。

参考：[姬羽のBlog](https://himehane.club/live2d_on_website/)

**重要补充（2020-12-10）！！！**

有部分MOC3-MOD并不包含完整的触摸区域，（说的就是你，咖啡枪！），跟碧蓝的全中文区域真的没法比，所以在触摸动作上~~可能会存在一些~~绝逼都是问题。

MOD的设置比例因子也不相同，体现在加载的MOD可能会特别特别小，（说的还是你，咖啡枪！）。

这两个是目前需要解决的。

MOC使用应该不存在太大的问题，有问题一般是model配置文件的问题。

MOC3碧蓝航线应该问题也不大，正常使用应该没问题。

至于其他的MOC3，真的是各家的写法都不太相同，我可能需要好好整理测试一下，加一点功能。

当然，要是直接Live2D Cubism上手修改，那上面的问题应该都不是问题。

我目前做的只是优化普通用户的体验，尽量提高兼容性，写一个无脑的Live2D加载程序。

等我改完了最近遇到的问题，会写一个model配置说明作为参考。

## 程序截图&使用方法
**软件主界面，支持MOC和MOC3**

![1.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/1.png)
  
  
**左键图标显示、隐藏MOD，右键图标弹出选单**

![2.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/2.png)
  
  
**基础设置菜单，（因为Win10的缩放与布局设置，可能会使程序比例放大变的模糊，这里改小比例会缩放MOD）**

![3.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/3.png)
  
  
**导入模型，MOC和MOC3分别所选择的文件**

![4.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/4.png)
  
  
**Alt+鼠标左键移动MOD界面**

![5.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/5.png)
  
  
**Ctrl+鼠标左键报告当前坐标点（针对部分MOC格式没有设置hit_areas所造成的不能触摸问题，可以自己手动划定触摸区域，详见提供的测试MOD）**

![6.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/6.png)


## 程序百度云

**主程序**

下载：[百度云](https://pan.baidu.com/s/1HTHpJhDVWA2A7e7uVdtlSA)，提取码：thcb

**主程序+测试MOD**

下载：[百度云](https://pan.baidu.com/s/1JvyXLsKyiciXP9aR5bekjw)，提取码：qq5g

注：测试MOD是我自己进行修改后提供的样板，基本涵盖了程序所能提供的全部功能。测试MOD的版权归版权方所有，仅供学习和交流使用，并请于下载后24小时内删除，谢谢。


## 追加

源代码的使用请参见electron官方文档，简单来说应该就是三步。

**进入文件夹根目录**

$ cd xxxxx

**安装依赖库**

$ npm install

**运行应用**

$ npm start


## 接下来的工作（咕咕咕）

>  ​	（可能会）新增语音和语音文本匹配功能
>  
>  ​	（可能会）新增触摸文本编辑功能
>  
>  ​	（可能会）新增MOD加载管理库功能
>  
>  ​	（可能会）新增MOD.json文件实时编辑功能
>  
>  ​	（可能会）咕咕咕


## 版权声明

Copyright (c) 2020-present LONY (kongbaiku)

本项目采用GPL（GNU通用公共许可协议），可自由修改和使用，但不允许任何形式的商用，包括并不限于添加广告、做为闭源的商业软件发布和销售等。


## 最后

>  如果喜欢本项目的话，请点一个☆Star吧~
>
>  如果愿意将修改好的MOD文件共享给他人使用，并允许我上传至云端的话，可以发送打包好的文件至lony220@126.com
>
>  打包文件请以：**游戏名-角色名-皮肤名-编辑者** 的格式发送，我会在整理后上传至云端(๑•̀ㅂ•́)و✧
>
>  非常感谢ヾ(≧▽≦*)o
