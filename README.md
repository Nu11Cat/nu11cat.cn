#### 1. 计算机基础（The Foundation）

这是所有技术的根基，应该放在最前面。表明你深知“万丈高楼平地起”。

- **操作系统（OS）**：进程/线程、内存管理、文件系统、I/O模型（特别是Linux）
- **计算机网络（Network）**：TCP/IP、HTTP/HTTPS、DNS、Socket
- **数据结构与算法（Data Structures & Algorithms）**：链表、树、图、哈希表、排序、搜索（LeetCode等）

#### 2. Java语言核心（Java Core）

聚焦Java语言本身，这是你的立身之本。

- **Java基础语法**：面向对象、集合框架、异常处理、IO流
- **Java并发编程**：`Thread`、`synchronized`、`JUC`包（`ReentrantLock`, `ConcurrentHashMap`, `ThreadPoolExecutor`等）
- **JVM虚拟机**：内存模型（堆、栈、方法区）、垃圾回收机制（GC算法、调优）、类加载机制、性能监控工具（jps, jstack, jmap, jstat）
- **Java新特性**：Lambda、Stream API、模块化等（根据版本）

#### 3. 数据持久化与存储（Data Persistence & Storage）

专注于数据的存取和管理。

- **关系型数据库**：MySQL（核心：索引、事务、锁、SQL优化、分库分表）
- **NoSQL**：
  - **Redis**：数据类型、持久化、哨兵/集群、缓存穿透/击穿/雪崩
  - **Elasticsearch**：倒排索引、DSL查询、聚合分析
  - **MongoDB**：文档模型、适用场景
- **消息队列（MQ）**：Kafka/RabbitMQ/RocketMQ（选1-2个深挖）：作用、模型、可靠性投递、顺序消息

#### 4. 主流框架与生态（Frameworks & Ecosystem）

如何使用主流框架高效地开发应用。

- **Spring家族**：
  - **Spring Framework**：IoC、AOP、事务管理
  - **Spring MVC**
  - **Spring Boot**：自动配置、Starter、监控Actuator
  - **Spring Data**：JPA、RedisTemplate等
- **ORM框架**：MyBatis / JPA（Hibernate）
- **网络编程**：Netty（核心概念：Reactor模型、零拷贝、编解码器）

#### 5. 分布式与系统架构（Distributed Systems & Architecture）

**这是从“初级”迈向“中级/高级”的关键，是校招亮点的核心！**

- **微服务架构**：
  - **理论**：服务注册与发现（Eureka/Nacos）、配置中心、API网关（Spring Cloud Gateway）、负载均衡（Ribbon）
  - **生态**：Spring Cloud Alibaba（Nacos, Sentinel, Seata）
- **分布式问题**：分布式事务（CAP、BASE、Seata）、分布式锁（Redis实现）、分布式Session、接口幂等性
- **系统设计基础**：如何设计一个短链系统、点赞系统、秒杀系统？（常用工具：短链：发号器、哈希；秒杀：缓存、削峰、限流）

#### 6. 开发运维与工具链（DevOps & Toolchain）

展现你的工程化能力和团队协作效率。

- **版本控制**：Git（常用命令、工作流）
- **构建工具**：Maven / Gradle（依赖管理、生命周期）
- **容器化**：Docker（镜像、容器、Dockerfile、Compose）
- **持续集成/部署（CI/CD）**：Jenkins / GitLab CI（概念和流程）
- **监控与排查**：Linux命令、APM工具（SkyWalking）、日志查询

------

