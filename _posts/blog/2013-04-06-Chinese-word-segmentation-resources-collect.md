---
layout: post
title: 中文分词初步研究
category: blog
description: 收集的部分中文分词的资料以及一些很基础的概念
---

######衡量分词方法的三个主要指标


+ 分词的速度
+ 分词的准确度(primary)
+ 分词算法的可维护性

######分词算法准确度判定


    准确率(P) = (分词结果中切分正确的总词数 / 分词结果中的总词数) X 100%

    召回率(R) = (分词结果中切分正确的总词数 / 标准结果中的总词数) X 100% 

    F = 2RP / (R + P)
    
对于分词算法而言，通常用F值作为分词效果的一个总体评价


######目前传统的分词算法


+ 正向最大匹配算法
+ 逆向最大匹配算法
+ CRF模型(条件随机场)
+ HMM模型(隐藏马尔可夫)
+ 最大熵模型


######参考文献


+ 中文分词十年回顾[1]
+ bakeoff2003[2]
+ bakefoff2006[3]
+ 清华大学NLP论文[4]
+ 关于结巴分词的文档[5]
+ 部分中文分词论文列表[6]
+ MMSEG[7]
+ standford基于CRF的分词[8]
+ 句读关于分词收集的资料[9]



[1]:http://ccl.pku.edu.cn/alcourse/nlp/LectureNotes/Chinese%20Word%20Segmentation%20A%20Decade%20Review(Huang%20Changning).pdf
[2]:http://www.sighan.org/bakeoff2003/
[3]:http://www.sighan.org/bakeoff2006/
[4]:http://nlp.csai.tsinghua.edu.cn/site2/index.php?option=com_content&view=article&id=48&Itemid=55&lang=en
[5]:http://ddtcms.com/blog/archive/2013/2/4/69/jieba-fenci-suanfa-lijie/
[6]:http://zhangkaixu.github.com/bibpage/cws.html
[7]:http://technology.chtsai.org/mmseg/
[8]:http://www-nlp.stanford.edu/software/segmenter.shtml
[9]:http://trac.judou.org/trac.judou.org






