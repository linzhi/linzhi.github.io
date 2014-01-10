---
layout: post
title: 关于数组的几道常见面试题
category: blog
description: 关于数组的面试题练习例子
---

##### 1.数组求和

要求函数主体一行代码实现，利用递归即可完成。

<!--more-->

    int sum(int a[], int n)
    {
        return n == 0 ? 0 : sum(a, n - 1) + a[n - 1];
    }

##### 2.求数组最大值和最小值

比较次数为1.5 * N，成对两个元素同时比较，较小值与当前最小值比较，较大值与当前最大值比较，详见算法导论第九章。尽量不要交换数组元素，以免破坏原数组。在我的实现中，直接将最大值和最小值的初始值分别设置为INT_MIN和INT_MAX。

    void max_min(int a[], int n, int& max_value, int& min_value)
    {
        int i = -1;
        int j = i + 1;

        while (i++ < n && j++ < n) {
            if (a[i] < a[j]) {
                if (min_value > a[i])
                    min_value = a[i];
                if (max_value < a[j])
                    max_value = a[j];
            } else {
                if (min_value > a[j])
                    min_value = a[j];
                if (max_value < a[i])
                    max_value = a[i];
            }
        }
    }

##### 3.求数组中出现次数超过一半的数

这个题目前提是一定存在这个数，所以别钻牛角尖。。。。。。

方法一是直接对数组排序，再取中间元素即可，时间复杂度就由排序的方法决定了。

    void find_num(int array[], int n)
    {
        sort(array, array + n);

        cout << array[n / 2] << endl;
    }

方法二是每次删除2个不同的数（不管是否包含要寻找的数），在剩下的数组里面要寻找的数出现次数依然超过一半。

    void find_num(int array[], int n)
    {
        int times = 1;
        int result = array[0];

        for (int i = 1; i < n; i++) {
            if (times == 0) {
                result = array[i];
                times = 1;
            }
            else if (result == array[i])
                times++; 
            else
                times--;
        }

        cout << result << endl;
    }

##### 4.求两个有序数组的共同元素

这个题目比较基础了，就不解释说明了，直接上代码。

    void find_same(int a[], int m, int b[], int n)
    {
        int i = 0;
        int j = 0;

        while (i < m && j < n) {
            if (a[i] < b[j]) 
                i++;
            if (a[i] > b[j])
                j++;
            else
                cout << "same number is " << a[i++]  << " " << b[j++] << endl;
        }
    }

##### 5.求三个有序数组的最小共同元素

思想同上面的题目差不多的，三个指针对数组进行遍历处理，时间复杂度O(n)。

    void find_common_elements(int a[], int b[], int c[], int len_a, int len_b, int len_c)
    {
        int i = 0;
        int j = 0;
        int k = 0;

        while (i < len_a && j < len_b && k < len_c) {
            if (a[i] < b[j]) 
                i++;
            else {
                if (b[j] < c[k]) 
                    b++;
                else {
                    if (c[k] < a[i]) 
                        k++;
                    else
                        break;
                }
            }
        }

        cout << a[i] << " " << b[j] << " " << c[k] << endl;
    }

另外一种实现思路。

    void find_common_elements(int a[], int b[], int c[], int len_a, int len_b, int len_c)
    {
        int i = 0;
        int j = 0;
        int k = 0;

        while (i < len_a && j < len_b && k < len_c) {
            if (a[i] < b[j] || a[i] < c[k])
                i++;
            if (b[j] < a[i] || b[j] < c[k])
                j++;
            if (c[k] < a[i] || c[k] < b[j])
                k++;
            else
                break;
        }

        cout << a[i] << " " << b[j] << " " << c[k] << endl;
    }

##### 6.字符串逆序

和数组还是有些关系的，这个要求原地逆序，不能申请额外的空间。给出了非递归和递归两种逆序方法。


    void reverse(string& p, int n)
    {
        int i = 0;

        while (i < n / 2) {
            swap(p[i], p[n - i - 1]); 
            i++;
        }
    }

    void reverse(string& p, int n)
    {
        if (n < 0)
            return ;

        swap(p[n], p[p.size() - n - 1]); 

        reverse(p, n - 1);
    }

##### 7.合并两个有序数组

直接顺序遍历就好了，最后分别处理一下数组的剩余部分。

    int merge(int a[], int m, int b[], int n, int c[])
    {
        int i = 0;
        int j = 0;
        int k = 0;

        while (i < m && j < n) {
            if (a[i] < b[j])
                c[k++] = a[i++];
            else
                c[k++] = b[j++];
        }

        while (i < m)
            c[k++] = a[i++];

        while (j < n)
            c[k++] = b[j++];
    }

##### 8.找出出现奇数次的元素

给定一个含有n个元素的整型数组，其中只有一个元素出现奇数次，找出这个元素。直接所有元素异或操作，这样最后剩下的就是所要找的元素。

    int find_odd_count(int a[], int n)
    {
        int tmp = a[0];

        for (int i = 1; i < n; i++) {
            tmp ^= a[i]; 
        }

        return tmp;
    }

##### 9.求数组中满足给定和的数对

给定两个分别有m和n个元素的有序数组a和b，求满足给定和的数对，即对a中元素i和b中元素j，满足i + j = d。由于是有序的，那么用两个指针从首尾遍历数组就可以。

    void sum(int a[], int m, int b[], int n, int d)
    {
        int i = 0;
        int j = n - 1;

        while (i < m && j > -1) {
            if (a[i] + b[j] < d)
                i++;
            else if (a[i] + b[j] == d)
                cout << a[i++] << " " << b[j--] << endl;
            else if (a[i] + b[j] > d)
                j--;
        }
    }

##### 10.查找旋转数组里面的某个元素

旋转的数组比如(15 16 19 20 25 1 3 4 5 7 10 14)这样的，要求在O(log n)时间复杂度内找到这个元素，很显然这个必然是利用二分查找来解决问题。

    int find(int a[], int n, int elem)
    {
        int i = 0;
        int j = n - 1;

        while (i < j) {
            int mid = i + (j - i) / 2;

            if (a[mid] == elem)
                return mid;
            else if (a[mid] >= a[i]) {
                if (a[mid] > elem) 
                    j = mid - 1;
                if (a[mid] < elem)
                    i = mid + 1;
            }
            else if (a[mid] < a[j]) {
                if (a[mid] > elem) 
                    j = mid - 1;
                if (a[mid] < elem)
                    i = mid + 1;
            }
        }

        return -1;
    }













