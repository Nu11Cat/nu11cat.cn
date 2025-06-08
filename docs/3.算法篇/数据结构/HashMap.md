---
title : HashMap
---

## 常用方法

## 键值对

Map.Entry<Integer, Integer>

```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer,Integer> mymap = new HashMap<>();
        for(int i : nums){
            mymap.put(i,mymap.containsKey(i)?mymap.get(i)+1:1);
        }
        PriorityQueue<Map.Entry<Integer,Integer>> mypq = new PriorityQueue<>((a,b)->a.getValue()-b.getValue());
        for(Map.Entry<Integer,Integer> i : mymap.entrySet()){
            mypq.offer(i);
            if(mypq.size()>k) mypq.poll();
        }
        //返回队列的全部元素
        int[] res = new int[mypq.size()];
        int i = 0;
        while (!mypq.isEmpty()) {
            res[i++] = mypq.poll().getKey(); // 取出键（元素）
        }
        return res;
    }
}
```

