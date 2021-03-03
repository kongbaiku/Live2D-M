# Live2D-M

基于electron的，在本地使用的，加载Live2D模型的小程序，支持MOC和MOC3。

M的意思就是My Live2D（笑

## 目录

[开发过程](https://github.com/kongbaiku/Live2D-M/wiki/%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B)

[MOC配置说明](https://github.com/kongbaiku/Live2D-M/wiki/MOC%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E)

[MOC3配置说明](https://github.com/kongbaiku/Live2D-M/wiki/MOC3%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E)

[感谢名单](https://github.com/kongbaiku/Live2D-M/wiki/%E6%84%9F%E8%B0%A2%E5%90%8D%E5%8D%95)


## 补充

据说Cubism SDK for Web的live2dcubismcore.min.js是不允许再分发的，但我看了一下License好像没有要求啊？

嘛，都是小问题，为了避免麻烦本程序中使用的live2dcubismcore.min.js被我删除了，需要的话请到官网自助下载后放进static文件夹。

[live2d官网](https://live2d.github.io)下载Cubism SDK for Web。

而且Live2D官网的SDK注释真的简明清晰，很适合二次开发阅读（本来就是给你开发用的啊，阔拉！）。

程序大概100M+，鉴于Github的下载尿性，顺便挂一个封装好的程序扔到百度云上供大家测试使用。

参考：[姬羽のBlog](https://himehane.club/live2d_on_website/)

**重要补充（2020-12-10）！！！**

有部分MOC3-MOD并不包含完整的触摸区域，（说的就是你，咖啡枪！），跟碧蓝的全中文区域真的没法比，所以在触摸动作上~~可能会存在一些~~绝逼都是问题。

MOD的设置比例因子也不相同，体现在加载的MOD可能会特别特别小，（说的还是你，咖啡枪！）。

~~这两个是目前需要解决的~~（已经解决了）（2020-12-30）。

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


## 下载

可以选择在github直接下载，太慢的话可以试试百度云（虽然可能一样慢）

下载：[百度云](https://pan.baidu.com/s/181gDCo7VRV24Xg17AZqmWg)，提取码：mtxg

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

>  ​	~~新增语音和语音文本匹配功能~~（搞定）
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
