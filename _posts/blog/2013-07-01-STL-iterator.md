---
layout: post
title: STL中的迭代器简单分析
category: blog
description: STL几种常见的迭代器简单分析
---

简单记下几种迭代器，主要参考《泛型编程与STL》 这本书

迭代器是算法与数据结构之间的接口，类似`find`这样的算法，以`iterator`为引数，便可以作用在许许多多不同的数据结构上。

<!--more-->

STL中的迭代器按照功能强弱分为5种:

##### Input Iterators

+ 当作为一般的C指针时，有三种不同的价值: `dereferenceable` `past the end` `singular`，当作为指针，只有在`first`和`last`都不为`null`指针时, `[first, last)`才是有意义的`range` 

+ Input Iterator可以被复制或被赋值 `p = q` `p == q`

+ 可以比较Input Iterators对象的相等性 `p != q`

+ 可以dereference一个Input Iterator类型的对象 `*p`

+ 可以简单的对类型为Input Iterator对象进行累加操作 `p++` `++p`, `++p`意味着累加p后返回新值，而`p++`意味着累加p并返回旧值

##### Output Iterators

Output Iterator的需求条件和Input iterator类似:

+ Output Iterator可以被复制或被赋值 `p = q` `p == q`

+ 可以用Output Iterator类型的对象来写值 `*p = x`

+ 可以简单的对类型为Output Iterator对象进行累加操作 `p++` `++p`

Input Iterator具有只读性，Output Iterator具有只写性，但是许多算法无法如此，下面就介绍下Forward Iterator

##### Forward Iterators

+ Forward Iterator对象支持Input Iterator和Output Iterator的全部操作

##### Bidirectional Iterators

`map` `set` `list`的迭代器就是Bidirectional Iterator

+ Bidirectional Iterator对象支持Input Iterator和Output Iterator的全部操作以及`--p` `p--`

##### Random Access Iterators

随机迭代器能够以固定的时间（constant time）随机访问任意元素，比如`vector`的迭代器

支持上面的全部操作以及

    `p += i` `p -= i`
    `p + i` 返回指向p后面第i个元素的迭代器
    `p - i` 返回指向p前面第i个元素的迭代器
    `p[i]` p后面第i个元素的引用
    `p < p1` `p <= p1` `p > p1` `p >= p1`
    
    
    
##### 最后

总体写的不是很详细，要想深入了解，请仔细研读《泛型编程与STL》。  
    

    
    
    
    
    
    
