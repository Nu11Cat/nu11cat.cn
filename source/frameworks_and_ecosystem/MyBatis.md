---
title : MyBatis
wiki: frameworks_and_ecosystem
---

## MyBatis

MyBatis 是一款**优秀的持久层框架**，它本质上是一个 **ORM（对象关系映射）框架**，用于帮助我们将 **Java 对象与数据库中的 SQL 操作绑定起来**。

它的核心思想是：**通过 XML 或注解方式将 SQL 与 Java 方法进行映射**，程序员自己编写 SQL，而 MyBatis 负责将结果映射成对象并执行。

### 特点

1. **半自动化 ORM 框架**：不像 Hibernate 那样全自动，SQL 需要开发者自己写，更加灵活、可控。
2. **支持自定义 SQL**：适合对 SQL 性能要求高、业务复杂的场景。
3. **支持动态 SQL**：通过 XML 标签动态生成 SQL（如 if、where、foreach）。
4. **提供映射机制**：支持将数据库结果映射为 Java 对象，支持一对一、一对多等关系映射。
5. **集成简单**：可以轻松与 Spring/Spring Boot 集成。

---

### 与传统的JDBC相比，MyBatis的优点？

- 基于 SQL 语句编程，相当灵活，不会对应用程序或者数据库的现有设计造成任 何影响，SQL 写在 XML 里，解除 sql 与程序代码的耦合，便于统一管理；提供 XML 标签，支持编写动态 SQL 语句，并可重用。

- 与 JDBC 相比，减少了 50%以上的代码量，消除了 JDBC 大量冗余的代码，不 需要手动开关连接；

- 很好的与各种数据库兼容，因为 MyBatis 使用 JDBC 来连接数据库，所以只要 JDBC 支持的数据库 MyBatis 都支持。

- 能够与 Spring 很好的集成，开发效率高。

- 提供映射标签，支持对象与数据库的 ORM 字段关系映射；提供对象关系映射 标签，支持对象关系组件维护。

---

## JDBC连接数据库的步骤

**1，加载数据库驱动程序**：在使用JDBC连接数据库之前，需要加载相应的数据库驱动程序。可以通过 Class.forName("com.mysql.jdbc.Driver") 来加载MySQL数据库的驱动程序。不同数据库的驱动类名会有所不同。

**2，建立数据库连接**：使用 DriverManager 类的 getConnection(url, username, password) 方法来连接数据库，其中url是数据库的连接字符串（包括数据库类型、主机、端口等）、username是数据库用户名，password是密码。

**3，创建 Statement 对象**：通过 Connection 对象的 createStatement() 方法创建一个 Statement 对象，用于执行 SQL 查询或更新操作。

**4，执行 SQL 查询或更新操作**：使用 Statement 对象的 executeQuery(sql) 方法来执行 SELECT 查询操作，或者使用 executeUpdate(sql) 方法来执行 INSERT、UPDATE 或 DELETE 操作。

**5，处理查询结果**：如果是 SELECT 查询操作，通过 ResultSet 对象来处理查询结果。可以使用 ResultSet 的 next() 方法遍历查询结果集，然后通过 getXXX() 方法获取各个字段的值。

**6，关闭连接**：在完成数据库操作后，需要逐级关闭数据库连接相关对象，即先关闭 ResultSet，再关闭 Statement，最后关闭 Connection。

---

## Mybatis里的 # 和 $ 的区别？

- Mybatis 在处理 #{} 时，会创建预编译的 SQL 语句，将 SQL 中的 #{} 替换为 ? 号，在执行 SQL 时会为预编译 SQL 中的占位符（?）赋值，调用 PreparedStatement 的 set 方法来赋值，预编译的 SQL 语句执行效率高，并且可以防止SQL 注入，提供更高的安全性，适合传递参数值。

- Mybatis 在处理 ${} 时，只是创建普通的 SQL 语句，然后在执行 SQL 语句时 MyBatis 将参数直接拼入到 SQL 里，不能防止 SQL 注入，因为参数直接拼接到 SQL 语句中，如果参数未经过验证、过滤，可能会导致安全问题。

## 设计模式

- 建造者模式（Builder），如：SqlSessionFactoryBuilder、XMLConfigBuilder、XMLMapperBuilder、XMLStatementBuilder、CacheBuilder等；

- 工厂模式，如：SqlSessionFactory、ObjectFactory、MapperProxyFactory；
- 单例模式，例如ErrorContext和LogFactory；
- 代理模式，Mybatis实现的核心，比如MapperProxy、ConnectionLogger，用的jdk的动态代理；还有executor.loader包使用了cglib或者javassist达到延迟加载的效果；
- 组合模式，例如SqlNode和各个子类ChooseSqlNode等；
- 模板方法模式，例如BaseExecutor和SimpleExecutor，还有BaseTypeHandler和所有的子类例如IntegerTypeHandler；
- 适配器模式，例如Log的Mybatis接口和它对jdbc、log4j等各种日志框架的适配实现；
- 装饰者模式，例如Cache包中的cache.decorators子包中等各个装饰者的实现；
- 迭代器模式，例如迭代器模式PropertyTokenizer；

---

## MyBatis Plus

MyBatis Plus 是在 MyBatis 基础上扩展出来的增强工具包，它对 MyBatis 做了增强，**简化开发、提升效率**，但**不改变原有功能和使用方式**。

---

















