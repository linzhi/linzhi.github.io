---
layout: post
title: Python奇怪的作用域
category: blog
description: python variable scope
---

最近写`Python`时发现`if`作用域内定义的变量在`if`外能正确调用，就是这样

    #!/usr/bin/env python2

    if __name__ == "__main__":
        if True:
            test = 1
        print test

和C/C++不一样，经了解在Python中`if/elif/else`、`try/except/finaly`、`for/while`等关键字并没引入新的作用域，这些关键字下定义的变量仍然属于`全局作用域`。实际上，在Pyhon中只有`def`、`class`、`lambda`才会引入新的作用域，类似这样

    #!/usr/bin/env python2

    def test():
        test_val = 1

    print test_val  

会提示错误，`NameError: name 'test_val' is not defined`，`def`限定了变量`test_val`的作用域。

经过进一步的查询资料，知道Python的作用域遵循`LEGB`的法则。遇到一个变量会按照本地作用域（Local）→当前作用域被嵌入的本地作用域（Enclosing locals）→全局/模块作用域（Global）→内置作用域（Built-in）的顺序进行搜索。`class`、`def`、`lambda`会引入一个本地作用域（Local），本地作用域是可以嵌套的，内层的变量会屏蔽外层，内层找不到的变量就会去外层找。全局作用域（Global）就是模块内的作用域，作用范围是单一文件内。内置函数的作用域就是int(), list()之类的内置函数。部分解释如下代码所示:

    #!/usr/bin/env python2

    val_1 # Global

    class Test:
        val_2 # Local
        def test():
            val_3 = 1 # Local
            def _test():
                val_4 = 1 # Local
                for i in range(2):
                    val_5 = 1 # Local same to val_4

上面这段说太多了，简单的事情反而弄复杂了，记住局部变量（Local）和全局变量（Global）即可。查找时候，若找不到局部的就去找全局的，这就是一显而易见的道理，没哪个语法规则的发明者会闲着没事去违背人类认识事物的自然规律。


