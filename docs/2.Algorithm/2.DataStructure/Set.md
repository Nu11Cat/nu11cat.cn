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

```java
public class Main {
    public static void main(String[] args) {
        // 创建 LinkedHashSet
        Set<String> set = new LinkedHashSet<>();
        // 添加元素
        set.add("apple");
        set.add("banana");
        set.add("orange");
        // 添加重复元素（无效）
        set.add("banana");
        // 打印集合（保持插入顺序）
        System.out.println(set); // [apple, banana, orange]
        // 判断是否包含某元素
        System.out.println(set.contains("apple")); // true
        // 移除元素
        set.remove("banana");
        System.out.println(set); // [apple, orange]
        // 获取大小
        System.out.println(set.size()); // 2
        // 判断是否为空
        System.out.println(set.isEmpty()); // false
        // 清空集合
        set.clear();
        System.out.println(set); // []
    }
}

```

