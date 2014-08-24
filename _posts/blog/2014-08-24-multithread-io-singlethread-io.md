---
layout: post
title: 多线程同步I/O和单线程异步I/O
category: blog
description: 同步I/O和异步I/O简单介绍
---



####同步I/O与异步I/O

线程在执行中如果遇到磁盘读写或网络通信（统称IO操作），通常要耗费较长的时间，这时OS会剥夺此线程的CPU控制权，使其暂停执行，同时将资源让给其他的工作线程，这种线程调度方式称为阻塞。当I/O操作完毕时，操作系统将这个线程的阻塞状态解除，恢复其对CPU的控制权，令其继续执行，这种I/O模式就是同步式I/O或阻塞式I/O。
在这种情况下，程序是线下执行的，比如

    var fs = require("fs");
    
    var data = fs.readFileSync("test.txt", "utf-8");
    console.log(data);
    console.log("over");
    
这种执行方式很好理解，传统服务器的处理方式是为每个请求开启一个线程，在遇到I/O请求的时候阻塞处理。但每个CPU能承受的线程数是有限制的，于是达到限制的时候就必须添加新的CPU，而且开启线程是非常消耗资源的。

异步I/O诞生就解决了上述问题，在异步I/O模型中，线程遇到I/O操作时，不会以阻塞的方式等待I/O操作的完成或数据的返回，而是将I/O请求发送给操作系统，继续执行下一条语句。当操作系统完成/IO操作时，以事件的形式通知执行I/O操作的线程，线程会在特定时候处理这个事件。为了处理异步I/O，线程必须有事件循环，不断地检查有没有未处理的事件，依次予以处理,`典型的异步编程模型有Node.js`

    var fs = require("fs");

    fs.readFile("test.txt", "utf-8", function(err, data) {    
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
    console.log("over");

node函数默认是异步处理，上述程序执行会先打印出"over"，待I/O处理完成，再继续执行读文件操作。

可以看到阻塞模式下，一个线程只能处理一项任务，要想提高吞吐量必须通过多线程；而非阻塞模式下，一个线程永远在执行计算操作，这个线程所使用的CPU核心利用率永远是100%, I/O 以事件的方式通知。


![同步I/O和异步I/O图解](https://github.com/linzhi/linzhi.github.io/raw/master/_posts/blog/images/sync_async_io.png)


####Node的异步I/O

多线程带来的好处是在多核CPU的情况下利用更多的核，而Node.js的单线程也能带来同样的好处，Node.js使用了单线程、非阻塞的事件编程模式。

单线程事件编程模式的异步I/O与多线程阻塞式I/O相比，异步I/O少了多线程的开销。对OS来说，创建一个线程的代价比较昂贵，需要给它分配内存、列入调度，同时在线程切换的时候还要执行内存换页，CPU的缓存被清空，切换回来的时候还要重新从内存中读取信息，破坏了数据的局部性。

单线程事件驱动的异步I/O有个缺点就是异步程序不是很好理解，编写异步程序比较困难。

####参考

+ [同步、异步、多线程与事件型综述](http://www.zhihu.com/question/19732473)
+ [Node.js开发指南](http://book.douban.com/subject/10789820/)
+ [NODE核心概念 (1) - 同步I/O与异步I/O](http://jianshu.io/p/2jb9b4)

