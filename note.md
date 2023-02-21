## 浏览器输入UR到页面展示的过程
   + 域名 --> DNS解析 --> IP 地址 --> 服务器 --> 找静态资源 --> index.html --> 通过link找css，通过src找js
     
## 构建Render Tree
   + link 元素不会阻塞DOM Tree的构建过程，但是会阻塞Render Tree 的构建过程
   + Render Tree 和 DOM Tree并不是一一对应的关系

 ## 回流和重绘
   + 第一次确定结点的大小和位置，称之为布局；之后对节点的大小、位置修改重新计算称之为回流
   + 第一次渲染内容称之为绘制；之后重新渲染称之为重绘
   + 回流一定会引起重绘，所以回流是一件很消耗性能的事情
     - 尽量一次性修改 
     - 避免频繁的操作DOM
     - 避免通过getComputedStyle获取尺寸、位置等信息
     - 对某些元素使用position的absolute或者fixed

## script元素和页面解析的关系
   + 浏览器在解析HTML的过程中，遇到了script元素是不能继续构建DOM树的
   + 停止构建后会先下载js代码并执行js脚本
   + 脚本执行结束后，会继续解析HTML，构建DOM树

## defer
   + 加上defer之后，js文件的下载和执行，不会影响后面的DOM Tree的构建
   + 在defer代码中DOM Tree已经构建完成
   + defer代码是在DOMContentLoaded事件发出之前执行
   + 保证多个defer的script顺序
   + 从性能的角度最好放在head中
   + defer对于script元素没有外部引用，无效

## async
   + 浏览器不会因async脚本而阻塞
   + async脚本不能保证顺序，它是独立下载、独立运行、不会等待其它脚本
   + async不会能保证DOMContentLoaded之前或者之后执行

   > defer通常用于需要在文档解析后操作DOM的JavaScript代码，并且对多个script文件有顺序要求的
