---
layout: post
title: Ubuntu12.04安装jekyll
category: blog
description: 老版本的系统伤不起啊,做备份
---

##### 1.Install rvm


+ curl -L https://get.rvm.io | bash -s stable --ruby
+ source ~/.rvm/scripts/rvm
+ rvm install 1.9.3
+ rvm use 1.9.3
+ rvm rubygems latest。


##### 2.Using Taobao mirror

+ gem sources --remove https://rubygems.org/
+ gem sources -a http://ruby.taobao.org/
+ gem sources -l  

##### 3.Install Jekyll

+ gem install rdoc
+ gem install jekyll



BTW：安装时候一定要看清楚输出的提示信息
