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

说真的我一个地地道道的C学家，一开始看PPet的源码真的跟看天书似的，也并不能让新手凭借几行代码简简单单跑起来看到效果（至少当时菜鸡的我没用源码跑起来），实在不适合electron入门。

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

好吧，这我之前真的完全不知道，省得被查水表，暂时先不挂源码了。挂一个封装好的程序先扔到百度云上供大家测试使用。

参考：[姬羽のBlog](https://himehane.club/live2d_on_website/)


## 程序截图&使用方法
![1.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/1.png)
![2.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/2.png)
![3.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/3.png)
![4.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/4.png)
![5.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/5.png)
![6.PNG](https://github.com/kongbaiku/Live2D-M/blob/main/README/6.png)

## 程序百度云

待更新……
