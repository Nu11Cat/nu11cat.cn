



## **回溯算法**



---

### **[51. N 皇后](https://leetcode.cn/problems/n-queens/)**

>同一行、同一列、同一斜线 只能有一个皇后。
>
>给一个n表示棋盘的边长，返回`List<List<String>>`表示摆法。

**思路：**

1. 每行放一个皇后.然后使用一个数组表示第n**列**有没有皇后。然后再使用两个数组分别表示 （左上角-右下角）方向 和 （右上角-左下角）方向。

对于同一个左上-右下角的对角线的row-col都是一样的，所以以它作为对角线的判断元素，但是因为可能是负数，所以我们使用2*n大小的数组，使用row-col+n

然后右上-左下的同理而且更简单

- diag1[row-col+n]  ↘↖
- diag2[row+col]   ↗↙

2. 然后使用一个char二维数组表示摆法，先for初始化为全是'.'。
3. 然后从第0行dfs开始递归。
4. 在dfs的实现中，只需传入一个行数。如果最后一行都结束了，那就封装到res，相当于回溯模板的分支结束条件；如果不是，那么就从第0列开始遍历，如果这一列合法那就三个true然后dfs下一行然后回溯三个false。
5. 最后返回res就好啦。

**代码：**

```java
class Solution {
    boolean[] cols;
    boolean[] d1;
    boolean[] d2;
    List<List<String>> res;
    char[][] arr;
    int n;

    public List<List<String>> solveNQueens(int n) {
        this.n = n;
        cols = new boolean[n];
        d1 = new boolean[2*n];
        d2 = new boolean[2*n];
        res = new ArrayList<>();
        arr = new char[n][n];

        for(int i = 0; i < n; i++) {
            Arrays.fill(arr[i], '.');
        }
        dfs(0);
        return res;
    }

    private void dfs(int row) {
        if(row == n) {
            List<String> temp = new ArrayList<>();
            for(char[] i : arr) {
                temp.add(new String(i));
            }
            res.add(temp);
            return;
        }

        for(int col = 0; col < n; col++) {
            if(cols[col] || d1[col - row + n] || d2[col + row]) continue;

            cols[col] = true;
            d1[col - row + n] = true;
            d2[col + row] = true;
            arr[row][col] = 'Q';

            dfs(row + 1);

            cols[col] = false;
            d1[col - row + n] = false;
            d2[col + row] = false;
            arr[row][col] = '.';
        }
    }
}
```

----

## **二分查找**

### 

---

### 

----

### 

-----

### **[33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)**

>给一个旋转了一次的升序数组，给一个目标数
>
>返回位置，没有就返回-1
>
>>输入：nums = [4,5,6,7,0,1,2] , target = 0
>>输出：4

**思路：**

1. 基本上和常规二分一样，唯一的区别是我们需要区分左右哪边是有序的
2. 有序的判断依据就可以通过对比`nums[l]`和`nums[mid]`的大小
3. 所以只需要判断哪边有序，然后对比`nums[l]`和`nums[mid]`和`target`就行了
4. 需要注意等号的处理

**代码：**

```java
class Solution {
    public int search(int[] nums, int target) {
        int n = nums.length;
        int l = 0, r = n-1;
        while(l <= r) {
            int mid = l + ( (r - l) >> 1);
            if(nums[mid] == target) return mid;
            //注意= ： nums[mid] == nums[l] 右边无序，视作左边有序
            if(nums[mid] >= nums[l]) {   //左边有序
                if(target >= nums[l] && target < nums[mid]) r = mid - 1;    //注意=
                else l = mid + 1;
            }else {  //右边有序
                if(target > nums[mid] && target <= nums[r]) l = mid + 1;    //注意=
                else r = mid - 1;
            }                    
        }
        return -1;
    }
}
```

----

### **[153. 寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)**

>给一个旋转一次的数组，和上面那个一样，找它的最小值
>
>```
>输入：nums = [3,4,5,1,2]
>输出：1
>```

**思路：**

1. 二分，找有序的一侧，没有target，最后l==r就是结果
2. 必须跟`nums[r]`比较，不能比`nums[l]`
3. 必须`l = mid + 1`和`r = mid`，可以这么想：`nums[mid] <= nums[r]`，那么`nums[mid]`可能是最小的，不能跳。

**代码：**

```java
class Solution {
    public int findMin(int[] nums) {
        int n = nums.length;
        int l = 0, r = n - 1;
        while(l < r) {
            int mid = l + ( (r - l) >> 1);
            if(nums[mid] > nums[r]) l = mid + 1;
            else r = mid;
        }
        return nums[l];
        //return nums[r];也行
    }
}
```

---

### **[4. 寻找两个正序数组的中位数](https://leetcode.cn/problems/median-of-two-sorted-arrays/)**

>给两个正序数组，返回中位数
>
>>输入：nums1 = [1,2], nums2 = [3,4]
>>输出：2.50000
>>解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

**思路：**

1. 题目要求`O(log (m+n))`，但是我有一计：**`O(log(min(m,n)))`**

2. 基本思路就是把两个数组各切一刀，让两个“左”组成一个“新左”， 两个“右”组成一个“新右”

3. 那么我们的目的就是，利用二分的思想移动切面：

   1. 保证“新左”的长度 == “新右”的长度  （或者奇数： 新左 ==  新右  + 1）

   2. 保证“新左”最大值 <= “新右”的最小值，也就是“新左”全都<= “新右”的任何一个

   3. >如：
      >
      >nums1:  [1, 3 | 8]
      >nums2:  [2, 7 | 9, 10]
      >
      >新左：[1，3，2，7]
      >
      >新右：[8，9，10]
      >
      >满足两个条件，那么切口处就是中位数，即max(3,7) = 7

4. 因为有“新左”的长度和“新右”的长度要求，所以我们只需要移动一个切点，用长度就能计算出另一个切点位置。

**代码：**

```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int l1 = nums1.length, l2 = nums2.length;
        // 保证 nums1 是较短的那个数组（这样二分更安全）
        if(l1 > l2) {
            return findMedianSortedArrays(nums2, nums1);
        }
        int leftTotal = (l1 + l2 + 1) / 2;// 左半部分总长度
        int l = 0, r = l1;// 只在短数组 nums1 上二分
        while(l <= r) {
            int cut1 = l + ((r-l)>>1);// nums1 的 cut
            int cut2 = leftTotal - cut1;// nums2 的 cut（由 i 计算出来）
            
            // 边界处理：越界时用 ±∞
            int leftA = cut1 == 0 ? Integer.MIN_VALUE : nums1[cut1 - 1];
            int rightA = cut1 == l1 ? Integer.MAX_VALUE : nums1[cut1];

            int leftB = cut2 == 0 ? Integer.MIN_VALUE : nums2[cut2 - 1];
            int rightB = cut2 == l2 ? Integer.MAX_VALUE : nums2[cut2];
            // 满足中位数条件
            if(leftA <= rightB && leftB <= rightA) {
                // 奇数：左边最大值即为中位数
                if( (l1 + l2) % 2 == 1) return Math.max(leftA, leftB);
                // 偶数：中位数是左边最大 + 右边最小 / 2
                return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2.0;
            } else if(leftA > rightB) r = cut1 - 1; // i 太大，往左缩
            else l = cut1 + 1; // i 太小，往右扩

        }
        //到不了这里
        return 0.0;
    }
}
```

---

## **栈**

### 

---

### 

----

### **[394. 字符串解码](https://leetcode.cn/problems/decode-string/)**

>解码：
>
>>输入：s = "3[a]2[bc]"
>>输出："aaabcbc"
>
>>输入：s = "3[a2[c]]"
>>输出："accaccacc"

**思路：**

1. 使用两个栈，分别保存数字num 和 当前已经解码好的字符串片段

2. 再维护两个变量：sb，num，分别表示当前层的字符串 和 正在读的数字

3. 遍历字符串

   1. 数字，*10+，维护num
   2. 字符，加到sb
   3. '['，入栈当前字符串 & k，清空当前状态
   4. ']'，出栈：前缀字符串 + currentString 重复 num 次

4. >如：3[a2[c]]
   >
   >3[        → 把 3 和 "" 压栈
   >a2[       → 把 2 和 "a" 压栈
   >c]        → 出栈： "a" + "c"*2 = "acc"
   >]         → 再出栈： "" + "acc"*3 = "accaccacc"

**代码：**

```java
class Solution {
    public String decodeString(String s) {
        Deque<Integer> numstack = new ArrayDeque<>();
        Deque<StringBuilder> strstack = new ArrayDeque<>(); 
        StringBuilder sb = new StringBuilder();

        int num = 0;
        for(int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if(c >= '0' && c <= '9') num = num*10 + c - '0';
            else if(c >= 'a' && c <= 'z') sb.append(c);
            else if(c == '[') {
                numstack.push(num);
                strstack.push(new StringBuilder(sb));
                num = 0;
                sb = new StringBuilder();
            }
            else {
                int repeatTime = numstack.pop();
                StringBuilder prevString = strstack.pop();

                StringBuilder temp = new StringBuilder(prevString);
                while(repeatTime-->0) {
                    temp.append(sb);
                }
                sb = temp;
            }
        }
        return sb.toString();
    }
}
```

---



---

### **[84. 柱状图中最大的矩形](https://leetcode.cn/problems/largest-rectangle-in-histogram/)**

>给一个数组，分别表示每一个柱子的高度，返回一个最大面积
>
>>输入：heights = [2,1,5,6,2,3]
>>输出：10
>>解释：5,6  面积为 2*5 = 10

**思路：**

1. 思路一句话：两个数组分别表示i左右第一个小于heights[i]的索引，然后最后遍历一次算面积。
2. 难点在于如何获得i左右第一个小于heights[i]的索引：栈！思路类似“[739. 每日温度](https://leetcode.cn/problems/daily-temperatures/)”，暂时找不到就放到栈，等找到了再while出栈。

**代码：**

这个解法似乎有些“反直觉”，更主流的是另一种复杂度和它一样的解法，但是我觉得这个更直观

```java
class Solution {
    public int largestRectangleArea(int[] heights) {
        int n = heights.length;
  
        //i左边第一个比i小的索引
        int[] left = new int[n];
        Arrays.fill(left, -1);	//关键
        Deque<Integer> stack1 = new ArrayDeque<>();
        for(int i = n-1; i >= 0; i--) {
            while(!stack1.isEmpty() && heights[i] < heights[stack1.peek()]) {
                left[stack1.peek()] = i;
                stack1.pop();
            }
            stack1.push(i);
        }

        //i右边第一个比i小的索引
        int[] right = new int[n];
        Arrays.fill(right, n);	//关键
        Deque<Integer> stack2 = new ArrayDeque<>();
        for(int i = 0; i < n; i++) {
            while(!stack2.isEmpty() && heights[i] < heights[stack2.peek()]) {
                right[stack2.peek()] = i;
                stack2.pop();
            }
            stack2.push(i);
        }

        System.out.println(Arrays.toString(left));
        System.out.println(Arrays.toString(right));

        //计算最大面积
        int maxres = 0;
        for(int i = 0; i < n; i++) {
            maxres = Math.max(maxres, heights[i] * (right[i] - left[i] - 1) );
        }
        return maxres;
    }
}
```

---

## 堆

### **[215. 数组中的第K个最大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)**

>给一个数组和数字k，返回数组第k大的数
>
>>输入: [3,2,1,5,6,4], k = 2
>>输出: 5

**思路：**

1. 简单的堆的应用

**代码：**

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i : nums) {
            pq.offer(i);
            if(pq.size() > k) pq.poll();
        }
        return pq.poll();
    }
}
```

---

### **[347. 前 K 个高频元素](https://leetcode.cn/problems/top-k-frequent-elements/)**

>给一个数组和数字k，返回前K个高频的元素
>
>>输入：nums = [1,1,1,2,2,3], k = 2
>>
>>输出：[1,2]

**思路：**

1. 和第K个最大元素一样，只是元素本身大小的比较变成了比较频率
2. 那么用哈希表包装一下，然后new堆的时候传一个比较器就行了

**代码：**

```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> m = new HashMap<>();
        for(int i : nums) {
            m.put(i, m.getOrDefault(i, 0) + 1);
        }   

        PriorityQueue<Integer> pq = new PriorityQueue<>(
            (a, b) -> m.get(a) - m.get(b)
        );  //我们需要的是一个最小堆

        for(int i : m.keySet()) {
            pq.offer(i);
            if(pq.size() > k) pq.poll();
        }

        int[] res = new int[pq.size()];
        int index = 0;
        while(!pq.isEmpty()) {
            res[index++] = pq.poll();
        }
        return res;
    }
}
```

---

### **[295. 数据流的中位数](https://leetcode.cn/problems/find-median-from-data-stream/)**

>实现一个类：
>
>三个方法：
>
>1. 初始化对象
>2. 添加整数到数据结构
>3. 返回目前为止数据结构的中位数

**思路：**

1. 一个最大堆，一个最小堆，分别表示“数组”的左右两部分

2. >如：
   >
   >输入[5,2,10,3]
   >
   >两个堆形如：[2，3]  [5，10]
   >
   >​                               ^     ^
   >
   >​                           顶|      |顶

3. 那么add的逻辑就是：先放左，再把打的放到右，也就是默认应该放在右，如果右边多了再还回去。

**代码：**

```java
class MedianFinder {
    private PriorityQueue<Integer> p1;
    private PriorityQueue<Integer> p2;

    public MedianFinder() {
        p1 = new PriorityQueue<>( (a,b) -> b-a );
        p2 = new PriorityQueue<>();
    }
    
    public void addNum(int num) {
        p1.offer(num);
        p2.offer(p1.poll());
        if(p1.size() < p2.size()) p1.offer(p2.poll()); 
    }
    
    public double findMedian() {
        if(p1.size() == p2.size()) return (p1.peek() + p2.peek()) / 2.0;
        return p1.peek();
    }
}
```

----

