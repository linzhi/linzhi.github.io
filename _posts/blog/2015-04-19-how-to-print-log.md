---
layout: post
title:  如何优雅的打印日志
category: blog
description: 总结遇到的常见的日志打印问题
---

##Log输出
+ 不要打印太多无用信息，防止有价值的信息被掩埋[1]
+ 不要吝啬打印语句

##Exception处理

##日志监控

##案例
Exception在error得输出 :

    try {
        TODO;
    } catch (Exception e) {
        log.error("infomation");
    }
    
数据记录信息打印，建议可适当打印:

     log.info("task start run......");
     List<Long> poiIdList = PoiFirmMapper.queryPoi();
     Integer countInvalidPoi = poiIdList.size();

    //log.info("find poi number is: %s", poiIdList.size());

重要的接口调用:
TODO调用第三方接口，针对第三方接口的异常捕获

网络请求处理
TODO调用google经纬度转换

触发重要分支日志打印

用户行为，针对http请求

##参考

[1]:  http://www.iobusy.com/post/1cae775f_28dd64e "optimal logging"










