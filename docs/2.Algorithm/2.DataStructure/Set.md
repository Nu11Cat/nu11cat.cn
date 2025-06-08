---
title : Set
---

## 常见用法

```java
public class SetExample {
    public static void main(String[] args) {
        // 创建一个 HashSet 实例
        Set<Integer> set = new HashSet<>();
        // 添加元素
        set.add(3);
        // 检查元素是否存在
        set.contains(3) // true
        // 获取 Set 的大小
        set.size()
        // 移除元素
        set.remove(3); // 移除元素 2
        // 清空 Set
        set.clear();
        // 检查 Set 是否为空
        set.isEmpty() // true

        // 使用 for-each 循环遍历
        System.out.println("Iterating through set using for-each:");
        for (Integer num : set) {
            System.out.println(num);
        }

        // 使用迭代器遍历
        System.out.println("Iterating through set using iterator:");
        set.forEach(num -> System.out.println(num)); // Java 8 Lambda
    }
}
```

