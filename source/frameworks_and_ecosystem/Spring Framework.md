---
title : Spring Framework
wiki: frameworks_and_ecosystem
---

# Spring框架

Spring 是一个开源的、轻量级的**Java 企业级开发框架**，主要用于简化 Java 应用的开发过程，尤其是在企业级项目中对**对象创建、依赖管理、事务控制、AOP（面向切面编程）**等方面提供了强大支持。

Spring 的核心是 **IoC（控制反转）** 和 **AOP（面向切面编程）** 两大思想。IoC 通过依赖注入（DI）管理对象生命周期，解耦业务组件，提高代码的可维护性；AOP 则用于横切关注点的处理，比如日志、权限、事务控制等，避免重复代码。

除了核心功能，Spring 还提供了大量子模块，支持 Web 开发（Spring MVC）、数据访问（Spring JDBC、Spring Data）、事务管理、安全控制（Spring Security）等。配合 Spring Boot，开发效率和部署体验进一步提升。

---

## 核心模块

Spring 框架本身是一个模块化体系，按照功能主要包含以下几个核心模块：

1. **Core Container（核心容器）**：包括
   - **Core** 和 **Beans**：提供 IoC 和依赖注入的基础功能。
   - **Context**：构建在 Core 和 Beans 之上，提供类似于应用上下文的功能。
   - **Expression Language（SpEL）**：支持在配置中使用表达式语法。
2. **AOP（面向切面编程）模块**：支持 AOP 的实现，用于解耦横切逻辑，如日志、权限控制、事务等。
3. **Data Access / Integration（数据访问与集成）模块**：
   - **JDBC**：简化 JDBC 编程。
   - **ORM**：整合 Hibernate、JPA、MyBatis 等 ORM 框架。
   - **JMS**：支持消息中间件的集成。
   - **Transactions**：统一的声明式事务管理。
4. **Web 模块**：
   - **Web**：提供基础的 Web 开发功能。
   - **Web MVC**：实现了 MVC 架构的 Spring Web 框架，是开发 Web 应用的核心模块。
5. **Test 模块**：提供对 JUnit、TestNG 的集成，支持对 Spring 组件进行单元测试和集成测试。

---

## Spring vs Spring MVC vs Spring Boot 

**Spring Framework** 是基础，提供了 IoC（控制反转）和 AOP（面向切面编程）等核心功能，用于管理对象的生命周期和解耦业务逻辑，是整个 Spring 生态的根基。

**Spring MVC** 是 Spring 的一个子模块，用于构建基于 Servlet 的 Web 应用。它实现了 MVC 架构模式，提供了请求分发、参数绑定、视图解析等功能，专注于 Web 层开发。

**Spring Boot** 是对 Spring 全家桶的进一步封装，目的是简化 Spring 应用的配置和部署。它提供了自动配置、内嵌服务器、开箱即用的依赖管理，让开发者能够更快地搭建和运行 Spring 应用，无需编写大量 XML 或繁杂配置。

# IOC

**控制**指的是对象创建（实例化、管理）的权力。**反转**是指控制权交给外部环境（Spring 框架、IoC 容器）。

IoC（Inversion of Control）是 Spring 框架的核心思想之一，它的本质是**将对象的创建和依赖管理的控制权交给框架，而不是由开发者手动控制**。

这种方式带来了几个**好处**：

- 降低了代码之间的耦合度。
- 提高了系统的可扩展性和可维护性。
- 更加符合“面向接口编程”的设计原则。

---

## 实现机制

**反射**：Spring IOC容器利用Java的反射机制动态地加载类、创建对象实例及调用对象方法，反射允许在运行时检查类、方法、属性等信息，从而实现灵活的对象实例化和管理。

**依赖注入**：IOC的核心概念是依赖注入，即容器负责管理应用程序组件之间的依赖关系。Spring通过构造函数注入、属性注入或方法注入，将组件之间的依赖关系描述在配置文件中或使用注解。

**设计模式 - 工厂模式**：Spring IOC容器通常采用工厂模式来管理对象的创建和生命周期。容器作为工厂负责实例化Bean并管理它们的生命周期，将Bean的实例化过程交给容器来管理。

**容器实现**：Spring IOC容器是实现IOC的核心，通常使用BeanFactory或ApplicationContext来管理Bean。BeanFactory是IOC容器的基本形式，提供基本的IOC功能；ApplicationContext是BeanFactory的扩展，并提供更多企业级功能。

---

## IOC容器

IoC 容器是 Spring 框架的核心组件，它负责**创建、管理和装配 Bean（即对象）**，并处理它们之间的依赖关系。所谓 IoC（控制反转），就是将原本由程序员控制的对象创建和依赖注入工作，交给容器来完成。

Spring 提供了两种主要的 IoC 容器实现：

1. **BeanFactory**：是最基础的容器接口，延迟加载（懒加载）Bean，适用于资源受限场景，但功能相对简单。
2. **ApplicationContext**：是 BeanFactory 的子接口，功能更强大，支持国际化、事件发布、自动装配、AOP 等，是实际开发中使用最广泛的容器。

IoC 容器的工作过程大致如下：

- 启动时读取配置（XML 或注解）；
- 扫描并实例化 Bean；
- 根据依赖关系自动装配；
- 管理 Bean 的生命周期。

通过 IoC 容器，Spring 实现了应用组件的松耦合，并为后续的 AOP、事务、声明式配置等提供了基础支持。

---

## Bean类

Spring Bean 是指由 **Spring IoC 容器管理的对象**。在 Spring 中，所有被注册到容器中、由容器进行创建、初始化、装配和销毁的组件，统称为 Bean。Spring Bean 通常是 Java 类实例，但也可以是接口的代理对象、工厂方法生成的对象等，只要是由容器管理的对象，都属于 Spring Bean。

---

### 声明Bean的注解

- `@Component`：通用的注解，可标注任意类为 `Spring` 组件。如果一个 Bean 不知道属于哪个层，可以使用`@Component` 注解标注。
- `@Repository` : 对应持久层即 Dao 层，主要用于数据库相关操作。
- `@Service` : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。
- `@Controller` : 对应 Spring MVC 控制层，主要用于接受用户请求并调用 `Service` 层返回数据给前端页面。

------

### 注入Bean的注解

在 Spring 中，注入 Bean（即依赖注入）常用的注解主要有以下几种：

1. **@Autowired**：最常用的注解，按类型自动注入，默认是按类型匹配，也可以配合 `@Qualifier` 指定 Bean 名称。当容器中存在多个匹配时，可能导致注入冲突。
2. **@Qualifier**：与 `@Autowired` 一起使用，用于按名称精确注入，解决多个同类型 Bean 的冲突。
3. **@Resource（JDK 提供，Spring 支持）**：按名称注入，找不到再按类型匹配。可选参数 `name` 明确指定要注入的 Bean 名称。
4. **@Inject（JSR-330）**：类似于 `@Autowired`，但属于 Java 标准，不支持 `@Qualifier` 的 value 属性，只能搭配 `@Named` 使用，Spring 同样支持。
5. **@Value**：用于注入基本类型、字符串、表达式或配置文件中的值，如 `@Value("${server.port}")`。

----

### 注入Bean的方法

依赖注入 (Dependency Injection, DI) 的常见方式：

1. 构造函数注入：通过类的构造函数来注入依赖项。
2. Setter 注入：通过类的 Setter 方法来注入依赖项。
3. Field（字段） 注入：直接在类的字段上使用注解（如 `@Autowired` 或 `@Resource`）来注入依赖项。

------

**Spring 官方推荐构造函数注入**，这种注入方式的优势如下：

1. 依赖完整性：确保所有必需依赖在对象创建时就被注入，避免了空指针异常的风险。
2. 不可变性：有助于创建不可变对象，提高了线程安全性。
3. 初始化保证：组件在使用前已完全初始化，减少了潜在的错误。
4. 测试便利性：在单元测试中，可以直接通过构造函数传入模拟的依赖项，而不必依赖 Spring 容器进行注入。

------

### Bean的作用域

Spring 中 Bean 的作用域通常有下面几种：

- **singleton（单例）**: IoC 容器中只有唯一的 bean 实例。Spring 中的 bean 默认都是单例的，是对单例设计模式的应用。
- **prototype（原型）**: 每次获取都会创建一个新的 bean 实例。也就是说，连续 `getBean()` 两次，得到的是不同的 Bean 实例。
- **request（请求）** （仅 Web 应用可用）: 每一次 HTTP 请求都会产生一个新的 bean（请求 bean），该 bean 仅在当前 HTTP request 内有效。
- **session（会话）** （仅 Web 应用可用） : 每一次来自新 session 的 HTTP 请求都会产生一个新的 bean（会话 bean），该 bean 仅在当前 HTTP session 内有效。
- **application/global-session** （仅 Web 应用可用）：每个 Web 应用在启动时创建一个 Bean（应用 Bean），该 bean 仅在当前应用启动时间内有效。
- **websocket** （仅 Web 应用可用）：每一次 WebSocket 会话产生一个新的 bean。

------

### Bean是否线程安全

Spring 本身**并不保证 Bean 是线程安全的**。默认情况下，Spring Bean 是 **单例（singleton）** 的，也就是说整个容器中只有一个实例会被多个线程共享使用。如果这个 Bean 中存在可变的状态（如成员变量）且没有做好并发控制，就可能出现线程安全问题。

线程安全与否取决于**Bean 的具体实现**。如果 Bean 是无状态的，比如只包含方法逻辑或只依赖局部变量，通常是线程安全的；但如果 Bean 维护了可变的全局状态，就需要开发者自行通过加锁、使用并发工具类等方式来保证线程安全。

---

对于有状态单例 Bean 的线程安全问题，**常见的三种解决办法**是：

1. **避免可变成员变量**: 尽量设计 Bean 为无状态。
2. **使用`ThreadLocal`**: 将可变成员变量保存在 `ThreadLocal` 中，确保线程独立。
3. **使用同步机制**: 利用 `synchronized` 或 `ReentrantLock` 来进行同步控制，确保线程安全。

---

### Bean是否单例

Spring 中的 Bean 默认都是单例的。

就是说，每个Bean的实例只会被创建一次，并且会被存储在Spring容器的缓存中，以便在后续的请求中重复使用。这种单例模式可以提高应用程序的性能和内存效率。

但是，Spring也支持将Bean设置为多例模式，即每次请求都会创建一个新的Bean实例。要将Bean设置为多例模式，可以在Bean定义中通过设置scope属性为"prototype"来实现

**一、单例（`singleton`，默认）**

- **含义**：整个 Spring 容器中只创建一个 Bean 实例。
- **创建时机**：容器启动时立即创建。
- **生命周期**：从容器启动到销毁，始终是同一个对象。
- **使用场景**：大多数无状态的组件，比如 DAO、Service、工具类等。

**二、非单例（`prototype`）**

- **含义**：每次调用 `getBean()` 都会创建一个新的实例。
- **创建时机**：调用时才创建，不是容器启动时。
- **生命周期**：Spring 创建后不再管理生命周期，销毁需开发者自行处理。
- **使用场景**：有状态的组件，比如带有用户上下文信息的对象。

---

### Bean生命周期

1. **创建 Bean 的实例**：Bean 容器首先会找到配置文件中的 Bean 定义，然后使用 Java 反射 API 来创建 Bean 的实例。
2. **Bean 属性赋值/填充**：为 Bean 设置相关属性和依赖，例如`@Autowired` 等注解注入的对象、`@Value` 注入的值、`setter`方法或构造函数注入依赖和值、`@Resource`注入的各种资源。
3. **Bean 初始化**： 
   - 如果 Bean 实现了 `BeanNameAware` 接口，调用 `setBeanName()`方法，传入 Bean 的名字。
   - 如果 Bean 实现了 `BeanClassLoaderAware` 接口，调用 `setBeanClassLoader()`方法，传入 `ClassLoader`对象的实例。
   - 如果 Bean 实现了 `BeanFactoryAware` 接口，调用 `setBeanFactory()`方法，传入 `BeanFactory`对象的实例。
   - 与上面的类似，如果实现了其他 `*.Aware`接口，就调用相应的方法。
   - 如果有和加载这个 Bean 的 Spring 容器相关的 `BeanPostProcessor` 对象，执行`postProcessBeforeInitialization()` 方法
   - 如果 Bean 实现了`InitializingBean`接口，执行`afterPropertiesSet()`方法。
   - 如果 Bean 在配置文件中的定义包含 `init-method` 属性，执行指定的方法。
   - 如果有和加载这个 Bean 的 Spring 容器相关的 `BeanPostProcessor` 对象，执行`postProcessAfterInitialization()` 方法。
4. **销毁 Bean**：销毁并不是说要立马把 Bean 给销毁掉，而是把 Bean 的销毁方法先记录下来，将来需要销毁 Bean 或者销毁容器的时候，就调用这些方法去释放 Bean 所持有的资源。 
   - 如果 Bean 实现了 `DisposableBean` 接口，执行 `destroy()` 方法。
   - 如果 Bean 在配置文件中的定义包含 `destroy-method` 属性，执行指定的 Bean 销毁方法。或者，也可以直接通过`@PreDestroy` 注解标记 Bean 销毁之前执行的方法。

---

## 依赖注入

依赖注入是 IoC（控制反转）的一种具体实现方式，它的核心思想是：**将对象所依赖的组件，由外部容器负责创建并注入，而不是由对象自己去创建或查找。**

通俗地说，就是一个类需要什么依赖，不再自己去构造，而是**告诉容器“我需要什么”，容器会在合适的时候将它注入进来**。这带来了更低的耦合和更强的可维护性。

在 Spring 中，依赖注入有三种常见方式：

- 构造器注入：适合依赖强制必需、不可变的场景；
- Setter 方法注入：适合可选依赖；
- 注解注入：例如使用 `@Autowired` 或 `@Inject`，更加简洁灵活。

依赖注入不仅降低了对象之间的耦合度，还使得代码更易于测试、扩展和维护。

---

# AOP

AOP(Aspect-Oriented Programming:面向切面编程)能够将那些与业务无关，却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可拓展性和可维护性。

Spring AOP 就是基于动态代理的，如果要代理的对象，实现了某个接口，那么 Spring AOP 会使用 **JDK Proxy**，去创建代理对象，而对于没有实现接口的对象，就无法使用 JDK Proxy 去进行代理了，这时候 Spring AOP 会使用 **Cglib** 生成一个被代理对象的子类来作为代理。

---

## 实现机制

Spring AOP（面向切面编程）通过**动态代理**实现，在不修改业务代码的前提下，实现对方法的增强，常用于日志记录、权限控制、事务管理等横切关注点。

具体实现机制如下：

1. **基于代理机制实现增强**
    Spring AOP 使用的是运行时代理，主要有两种方式：
   - 如果目标对象实现了接口，默认使用 **JDK 动态代理**；
   - 如果没有实现接口，则使用 **CGLIB 字节码增强** 来生成子类代理。
      也可以通过配置强制使用 CGLIB。
2. **核心组件的配合**
    Spring AOP 的实现依赖几个核心概念：
   - **Advice（通知）**：定义增强逻辑，比如前置通知、后置通知、环绕通知等；
   - **Pointcut（切点）**：定义在哪些方法上应用通知；
   - **Advisor（增强器）**：将通知和切点组合；
   - **ProxyFactory / AopProxy**：用于生成代理对象并织入增强逻辑。
3. **AOP 配置方式灵活**
    可通过 XML 配置、注解（如 `@Aspect`、`@Around`）、或者纯 Java 注解和配置类的方式启用。

---

## 动态代理

动态代理是一种在**运行时动态创建代理对象**的机制，代理对象会拦截对目标对象的方法调用，并可以在调用前后添加自定义的逻辑。

它的核心思想是：**不修改目标对象的前提下，通过代理对象在方法执行前后织入增强逻辑**，常用于日志记录、权限校验、事务控制等场景。

在 Java 中，主要有两种动态代理方式：

1. **JDK 动态代理**
    基于接口实现，代理对象必须实现目标对象所实现的接口。底层使用 `java.lang.reflect.Proxy` 和 `InvocationHandler` 实现。
2. **CGLIB 动态代理**
    基于继承实现，代理对象是目标对象的子类。适用于没有接口的类，底层使用 ASM 字节码技术生成子类。

Spring AOP 正是利用这两种机制，在运行时为目标对象生成代理对象，并织入增强逻辑。

---

###  动态代理和静态代理的区别

**代理**是一种常用的设计模式，目的是：为其他对象提供一个代理以控制对某个对象的访问，将两个类的关系解耦。代理类和委托类都要实现相同的接口，因为代理真正调用的是委托类的方法。

**静态代理**：由程序员创建或者是由特定工具创建，在代码编译时就确定了被代理的类是一个静态代理。静态代理通常只代理一个类；

**动态代理**：在代码运行期间，运用反射机制动态创建生成。动态代理代理的是一个接口下的多个实现类。

---

### 使用静态代理实现AOP吗？

可以，使用静态代理确实能够实现 AOP 的部分功能，但它存在局限性，不适合大规模使用。

静态代理是指在编译期间就写死代理类的方式，通过在代理类中手动调用目标方法，并在方法执行前后添加增强逻辑。它确实可以实现 AOP 的“方法增强”，但有以下问题：

1. **每个目标类都要写一个对应的代理类，工作量大，不具备通用性**；
2. **代码冗余，不易维护，扩展性差**；
3. **无法在运行时灵活织入逻辑，不支持切面重用和动态配置**。

相比之下，**动态代理**更符合 AOP 的设计理念，能在运行时统一管理多个切面逻辑、按需匹配切点，具有更好的灵活性和通用性。

---

## Spring AOP vs AspectJ AOP 

| 特性           | Spring AOP                                               | AspectJ                                    |
| -------------- | -------------------------------------------------------- | ------------------------------------------ |
| **增强方式**   | 运行时增强（基于动态代理）                               | 编译时增强、类加载时增强（直接操作字节码） |
| **切入点支持** | 方法级（Spring Bean 范围内，不支持 final 和 staic 方法） | 方法级、字段、构造器、静态方法等           |
| **性能**       | 运行时依赖代理，有一定开销，切面多时性能较低             | 运行时无代理开销，性能更高                 |
| **复杂性**     | 简单，易用，适合大多数场景                               | 功能强大，但相对复杂                       |
| **使用场景**   | Spring 应用下比较简单的 AOP 需求                         | 高性能、高复杂度的 AOP 需求                |

---

## AOP常见的通知类型

- **Before**（前置通知）：目标对象的方法调用之前触发

- **After** （后置通知）：目标对象的方法调用之后触发

- **AfterReturning**（返回通知）：目标对象的方法调用完成，在返回结果值之后触发

- **AfterThrowing**（异常通知）：目标对象的方法运行中抛出 / 触发异常后触发。AfterReturning 和 AfterThrowing 两者互斥。如果方法调用成功无异常，则会有返回值；如果方法抛出了异常，则不会有返回值。

- **Around** （环绕通知）：编程式控制目标对象的方法调用。环绕通知是所有通知类型中可操作范围最大的一种，因为它可以直接拿到目标对象，以及要执行的方法，所以环绕通知可以任意的在目标对象的方法调用前后搞事，甚至不调用目标对象的方法

------

## AOP实现注解

- @Aspect：用于定义切面，标注在切面类上。
- @Pointcut：定义切点，标注在方法上，用于指定连接点。
- @Before：在方法执行之前执行通知。
- @After：在方法执行之后执行通知。
- @Around：在方法执行前后都执行通知。
- @AfterReturning：在方法执行后返回结果后执行通知。
- @AfterThrowing：在方法抛出异常后执行通知。
- @Advice：通用的通知类型，可以替代@Before、@After等。

---

## 切面执行顺序

1、通常使用`@Order` 注解直接定义切面顺序

2、实现`Ordered` 接口重写 `getOrder` 方法。

------

# Spring MVC

MVC 是模型(Model)、视图(View)、控制器(Controller)的简写，其核心思想是通过将业务逻辑、数据、显示分离来组织代码。

- 视图(view)： 为用户提供使用界面，与用户直接进行交互。
- 模型(model)： 代表一个存取数据的对象或 JAVA POJO（Plain Old Java Object，简单java对象）。它也可以带有逻辑，主要用于承载数据，并对用户提交请求进行计算的模块。模型分为两类，一类称为数据承载 Bean，一类称为业务处理Bean。所谓数据承载 Bean 是指实体类（如：User类），专门为用户承载业务数据的；而业务处理 Bean 则是指Service 或 Dao 对象， 专门用于处理用户提交请求的。
- 控制器(controller)： 用于将用户请求转发给相应的 Model 进行处理，并根据 Model 的计算结果向用户提供相应响应。它使视图与模型分离。

## 核心组件

- **`DispatcherServlet`**：**核心的中央处理器**，负责接收请求、分发，并给予客户端响应。
- **`HandlerMapping`**：**处理器映射器**，根据 URL 去匹配查找能处理的 `Handler` ，并会将请求涉及到的拦截器和 `Handler` 一起封装。
- **`HandlerAdapter`**：**处理器适配器**，根据 `HandlerMapping` 找到的 `Handler` ，适配执行对应的 `Handler`；
- **`Handler`**：**请求处理器**，处理实际请求的处理器。
- **`ViewResolver`**：**视图解析器**，根据 `Handler` 返回的逻辑视图 / 视图，解析并渲染真正的视图，并传递给 `DispatcherServlet` 响应客户端

---

## 工作流程

Spring MVC 是基于 MVC（Model-View-Controller）架构设计的 Web 框架，其工作流程可以概括为一个请求从前端到后端再返回响应的完整闭环。核心流程如下：

1. **用户发起请求**：浏览器发送 HTTP 请求，首先被 Spring 的前端控制器 `DispatcherServlet` 接收。
2. **请求分发**：`DispatcherServlet` 通过 `HandlerMapping` 查找与请求路径对应的处理器（Controller 方法）及其执行链。
3. **调用处理器方法**：`DispatcherServlet` 将请求委托给对应的 `HandlerAdapter`，适配并调用目标 Controller 方法。
4. **业务逻辑处理**：Controller 处理业务逻辑后，返回一个 `ModelAndView` 对象（或数据对象），包含视图名和模型数据。
5. **视图解析**：`DispatcherServlet` 调用 `ViewResolver`，根据视图名解析出具体的视图资源（如 JSP、HTML）。
6. **渲染视图**：视图渲染引擎将模型数据填充到页面模板，生成最终的 HTML 页面。
7. **响应返回客户端**：最终 HTML 被返回到浏览器，完成一次完整的请求处理过程。

前后端分离时，后端通常不再返回具体的视图，而是返回**纯数据**（通常是 JSON 格式），由前端负责渲染和展示。

怎么做到呢？

- 使用 `@RestController` 注解代替传统的 `@Controller` 注解，这样所有方法默认会返回 JSON 格式的数据，而不是试图解析视图。
- 如果你使用的是 `@Controller`，可以结合 `@ResponseBody` 注解来返回 JSON。

------

## 统一异常处理

**Spring 中如何做统一异常处理**

在 Spring 或 Spring Boot 应用中，统一异常处理常通过 `@ControllerAdvice` 配合 `@ExceptionHandler` 注解实现。这样可以集中管理异常逻辑，避免在每个 Controller 中重复写 try-catch，提高代码整洁性和可维护性。

`@ControllerAdvice` 是一个全局控制器增强注解，标识的类会对所有 Controller 生效。它内部的方法用 `@ExceptionHandler` 注解标明要处理的异常类型。Spring 会在出现指定异常时自动调用对应的方法进行处理，并返回统一的响应格式。

此外，还可以结合 `@ResponseBody` 或让处理方法返回 `ResponseEntity`，从而将异常信息转为标准的 JSON 格式返回给前端，便于前后端通信。

----

# Spring 循环依赖

循环依赖是指 Bean 对象循环引用，是两个或多个 Bean 之间相互持有对方的引用。

循环依赖问题在Spring中主要有三种情况：

- 第一种：通过构造方法进行依赖注入时产生的循环依赖问题。
- 第二种：通过setter方法进行依赖注入且是在多例（原型）模式下产生的循环依赖问题。
- 第三种：通过setter方法进行依赖注入且是在单例模式下产生的循环依赖问题。

只有【第三种方式】的循环依赖问题被 Spring 解决了，其他两种方式在遇到循环依赖问题时，Spring都会产生异常。

## 三级缓存

Spring 在`DefaultSingletonBeanRegistry`类中维护了三个重要的缓存 (Map)，称为“三级缓存”：

Spring 的三级缓存包括：

1. **一级缓存（singletonObjects）**：存放的是完全初始化好的、可用的 Bean 实例，`getBean()`方法最终返回的就是这里面的 Bean。此时 Bean 已实例化、属性已填充、初始化方法已执行、AOP 代理（如果需要）也已生成。
2. **二级缓存（earlySingletonObjects）**：存放的是提前暴露的 Bean 的原始对象引用 或 早期代理对象引用，专门用来处理循环依赖。当一个 Bean 还在创建过程中（尚未完成属性填充和初始化），但它的引用需要被注入到另一个 Bean 时，就暂时放在这里。此时 Bean 已实例化（调用了构造函数），但属性尚未填充，初始化方法尚未执行，它可能是一个原始对象，也可能是一个为了解决 AOP 代理问题而提前生成的代理对象。
3. **三级缓存（singletonFactories）**： 存放的是 Bean 的 `ObjectFactory`工厂对象。，这是解决循环依赖和 AOP 代理协同工作的关键。当 Bean 被实例化后（刚调完构造函数），Spring 会创建一个 `ObjectFactory` 并将其放入三级缓存。这个工厂的 `getObject() `方法负责返回该 Bean 的早期引用（可能是原始对象，也可能是提前生成的代理对象），当检测到循环依赖需要注入一个尚未完全初始化的 Bean 时，就会调用这个工厂来获取早期引用。

------

## 解决流程

Spring 通过 **三级缓存** 和 **提前暴露未完全初始化的对象引用** 的机制来解决单例作用域 Bean 的 sette注入方式的循环依赖问题。

此方案仅适用于Setter/Field注入的单例Bean。

假设存在两个相互依赖的单例`Bean`：`BeanA` 依赖 `BeanB`，同时 `BeanB` 也依赖 `BeanA`。当Spring容器启动时，它会按照以下流程处理：

**第一步：创建`BeanA`的实例并提前暴露工厂。**Spring首先调用`BeanA`的构造函数进行实例化，此时得到一个原始对象（尚未填充属性）。紧接着，Spring会将一个特殊的`ObjectFactory`工厂对象存入第三级缓存。这个工厂的使命是：当其他`Bean`需要引用`BeanA`时，它能动态返回当前这个半成品的`BeanA`（可能是原始对象，也可能是为应对AOP而提前生成的代理对象）。此时BeanA的状态是"已实例化但未初始化"，像一座刚搭好钢筋骨架的大楼。

**第二步：填充`BeanA`的属性时触发`BeanB`的创建。**Spring开始为`BeanA`注入属性，发现它依赖`BeanB`。于是容器转向创建`BeanB`，同样先调用其构造函数实例化，并将`BeanB`对应的`ObjectFactory`工厂存入三级缓存。至此，三级缓存中同时存在`BeanA`和`BeanB`的工厂，它们都代表未完成初始化的半成品。

**第三步：`BeanB`属性注入时发现循环依赖。**当Spring试图填充`BeanB`的属性时，检测到它需要注入`BeanA`。此时容器启动依赖查找：

- 在一级缓存（存放完整Bean）中未找到`BeanA`
- 在二级缓存（存放已暴露的早期引用）中同样未命中
- 最终在三级缓存中定位到`BeanA`的工厂。

Spring立即调用该工厂的`getObject()`方法。这个方法会执行关键决策：若`BeanA`需要AOP代理，则动态生成代理对象（即使`BeanA`还未初始化）；若无需代理，则直接返回原始对象。得到的这个早期引用（可能是代理）被放入二级缓存，同时从三级缓存清理工厂条目。最后，Spring将这个早期引用注入到`BeanB`的属性中。至此，`BeanB`成功持有`BeanA`的引用——尽管`BeanA`此时仍是个半成品。

**第四步：完成`BeanB`的生命周期。**`BeanB`获得所有依赖后，Spring执行其初始化方法（如`@PostConstruct`），将其转化为完整可用的Bean。随后，`BeanB`被提升至一级缓存（`singletonObjects`），二级和三级缓存中关于`BeanB`的临时条目均被清除。此时`BeanB`已准备就绪，可被其他对象使用。

**第五步：回溯完成`BeanA`的构建。**随着`BeanB`创建完毕，流程回溯到最初中断的`BeanA`属性注入环节。Spring将已完备的`BeanB`实例注入`BeanA`，接着执行`BeanA`的初始化方法。这里有个精妙细节：若之前为`BeanA`生成过早期代理，Spring会直接复用二级缓存中的代理对象作为最终Bean，而非重复创建。最终，完全初始化的`BeanA`（可能是原始对象或代理）入驻一级缓存，其早期引用从二级缓存移除。至此循环闭环完成，两个Bean皆可用。

---

## 二级缓存？

在没有 AOP 的情况下，确实可以只使用一级和二级缓存来解决循环依赖问题。

spring 必须用三级缓存解决循环依赖，核心是为了**正确处理需要 AOP 代理的 Bean**。

举个例子：假设 Bean A 依赖 B，B 又依赖 A，且 A 需要被动态代理（比如加了`@Transactional`）。如果只有二级缓存，当 B 创建时去注入 A，拿到的是 A 的原始对象。但 A 在后续初始化完成后才会生成代理对象，结果就是：B 拿着原始对象 A，而 Spring 容器里存的是代理对象 A —— 同一个 Bean 出现了两个不同实例，这直接违反了单例的核心约束。

三级缓存中的 `ObjectFactory` 就是解决这个问题的关键。它不是直接缓存对象，而是存了一个能生产对象的工厂。当发生循环依赖时，调用这个工厂的 `getObject()` 方法，这时 Spring 会智能判断：如果这个 Bean 最终需要代理，就提前生成代理对象并放入二级缓存；如果不需要代理，就返回原始对象。这样一来，B 注入的 A 就是最终形态（可能是代理对象），后续 A 初始化完成后也不会再创建新代理，保证了对象全局唯一。

简单说，三级缓存的本质是 “按需延迟生成正确引用” 。它既维持了 Bean 生命周期的完整性（正常流程在初始化后生成代理），又在循环依赖时特殊处理，避免逻辑矛盾。而二级缓存缺乏这种动态决策能力，因此无法替代三级缓存。

------

不过，这种机制也有一些**缺点**，比如增加了内存开销（需要维护三级缓存，也就是三个 Map），降低了性能（需要进行多次检查和转换）。并且，还有少部分情况是不支持循环依赖的，比如非单例的 bean 和`@Async`注解的 bean 无法支持循环依赖。

------

## @Lazy能不能解决循环依赖问题

`@Lazy` 注解的作用是**延迟初始化**，即当第一次使用 Bean 时才进行实例化，而不是在容器启动时立即创建。`@Lazy` 可以用于解决某些场景下的循环依赖，但并不是完全解决所有的循环依赖问题。

**在循环依赖场景下，`@Lazy` 如何工作：**

假设有两个单例 Bean A 和 B，其中 A 依赖 B，B 依赖 A。如果在其中一个 Bean 上加上 `@Lazy` 注解，那么 Spring 容器会延迟该 Bean 的初始化，直到它真正被需要时才去创建。

1. **A 依赖 B，B 依赖 A**：当 Spring 初始化 A 时，A 会看到 B 被标记为 `@Lazy`，因此不会立即尝试创建 B，而是将 B 延迟到后续需要时再创建。
2. **B 的初始化被延迟**：当 B 被第一次访问时，Spring 会实例化 B，随后通过 A 注入 B。此时，B 依赖 A，但由于 A 已经是一个 "半初始化" 的对象，Spring 可以通过二级缓存来解决这一问题。

关键点：

- `@Lazy` 可以让 Spring 延迟某个 Bean 的初始化，从而避免在构造函数注入时出现循环依赖。
- 然而，`@Lazy` 只对**延迟加载**有效，它的作用是推迟 Bean 的初始化时机，而不是根本解决循环依赖。实际的循环依赖问题仍然需要通过 Spring 容器的缓存机制（三级缓存）来解决。

---

# Spring 事务

## 事务管理方式

**编程式事务**：在代码中硬编码(在分布式系统中推荐使用) : 通过 `TransactionTemplate`或者 `TransactionManager` 手动管理事务，事务范围过大会出现事务未提交导致超时，因此事务要比锁的粒度更小。

**声明式事务**：在 XML 配置文件中配置或者直接基于注解（单体应用或者简单业务系统推荐使用） : 实际是通过 AOP 实现（基于`@Transactional` 的全注解方式使用最多）

------

## 事务传播行为

**事务传播行为是为了解决业务层方法之间互相调用的事务问题**。

当事务方法被另一个事务方法调用时，必须指定事务应该如何传播。例如：方法可能继续在现有事务中运行，也可能开启一个新事务，并在自己的事务中运行。

正确的事务传播行为可能的值如下:

**1.`TransactionDefinition.PROPAGATION_REQUIRED`**

使用的最多的一个事务传播行为，我们平时经常使用的`@Transactional`注解默认使用就是这个事务传播行为。如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。

**`2.TransactionDefinition.PROPAGATION_REQUIRES_NEW`**

创建一个新的事务，如果当前存在事务，则把当前事务挂起。也就是说不管外部方法是否开启事务，`Propagation.REQUIRES_NEW`修饰的内部方法会新开启自己的事务，且开启的事务相互独立，互不干扰。

**3.`TransactionDefinition.PROPAGATION_NESTED`**

如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于`TransactionDefinition.PROPAGATION_REQUIRED`。

**4.`TransactionDefinition.PROPAGATION_MANDATORY`**

如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。（mandatory：强制性）

这个使用的很少。

------

## 事务的隔离级别

**`TransactionDefinition.ISOLATION_DEFAULT`** :使用后端数据库默认的隔离级别，MySQL 默认采用的 `REPEATABLE_READ` 隔离级别 Oracle 默认采用的 `READ_COMMITTED` 隔离级别.

**`TransactionDefinition.ISOLATION_READ_UNCOMMITTED`** :最低的隔离级别，使用这个隔离级别很少，因为它允许读取尚未提交的数据变更，**可能会导致脏读、幻读或不可重复读**

**`TransactionDefinition.ISOLATION_READ_COMMITTED`** : 允许读取并发事务已经提交的数据，**可以阻止脏读，但是幻读或不可重复读仍有可能发生**

**`TransactionDefinition.ISOLATION_REPEATABLE_READ`** : 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，**可以阻止脏读和不可重复读，但幻读仍有可能发生。**

**`TransactionDefinition.ISOLATION_SERIALIZABLE`** : 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，**该级别可以防止脏读、不可重复读以及幻读**。但是这将严重影响程序的性能。通常情况下也不会用到该级别。

---

## 什么情况失效

1，**未捕获异常**: 如果一个事务方法中发生了未捕获的异常，并且异常未被处理或传播到事务边界之外，那么事务会失效，所有的数据库操作会回滚。

2，**非受检异常**: 默认情况下，Spring对非受检异常（RuntimeException或其子类）进行回滚处理，这意味着当事务方法中抛出这些异常时，事务会回滚。

3，**事务传播属性设置不当**: 如果在多个事务之间存在事务嵌套，且事务传播属性配置不正确，可能导致事务失效。特别是在方法内部调用有 @Transactional 注解的方法时要特别注意。

4，**多数据源的事务管理**: 如果在使用多数据源时，事务管理没有正确配置或者存在多个 @Transactional 注解时，可能会导致事务失效。

5，**跨方法调用事务问题**: 如果一个事务方法内部调用另一个方法，而这个被调用的方法没有 @Transactional 注解，这种情况下外层事务可能会失效。

6，**事务在非公开方法中失效**: 如果 @Transactional 注解标注在私有方法上或者非 public 方法上，事务也会失效。

------

## @Transactional

`@Transactional` 的作用范围

1. **方法**：推荐将注解使用于方法上，不过需要注意的是：**该注解只能应用到 public 方法上，否则不生效。**
2. **类**：如果这个注解使用在类上的话，表明该注解对该类中所有的 public 方法都生效。
3. **接口**：不推荐在接口上使用。

------

**原理**

`@Transactional` 的工作机制是基于 AOP 实现的，AOP 又是使用动态代理实现的。如果目标对象实现了接口，默认情况下会采用 JDK 的动态代理，如果目标对象没有实现了接口,会使用 CGLIB 动态代理。

---

# 设计模式

[Spring 中的设计模式详解 | JavaGuide](https://javaguide.cn/system-design/framework/spring/spring-design-patterns-summary.html)

**工厂设计模式**:  Spring使用工厂模式通过 BeanFactory、ApplicationContext 创建 bean 对象。

**代理设计模式** : Spring AOP 功能的实现。

**单例设计模式** : Spring 中的 Bean 默认都是单例的。

**模板方法模式** : Spring 中 jdbcTemplate、hibernateTemplate 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。

**包装器设计模式** : 我们的项目需要连接多个数据库，而且不同的客户在每次访问中根据需要会去访问不同的数据库。这种模式让我们可以根据客户的需求能够动态切换不同的数据源。

**观察者模式** Spring 事件驱动模型就是观察者模式很经典的一个应用。

**适配器模式** :Spring AOP 的增强或通知(Advice)使用到了适配器模式、spring MVC 中也是用到了适配器模式适配Controller。

---

# 其他

## @Component vs @Bean 

`@Component` 注解作用于类，而`@Bean`注解作用于方法。

`@Component`通常是通过类路径扫描来自动侦测以及自动装配到 Spring 容器中（我们可以使用 `@ComponentScan` 注解定义要扫描的路径从中找出标识了需要装配的类自动装配到 Spring 的 bean 容器中）。`@Bean` 注解通常是我们在标有该注解的方法中定义产生这个 bean,`@Bean`告诉了 Spring 这是某个类的实例，当我需要用它的时候还给我。

`@Bean` 注解比 `@Component` 注解的自定义性更强，而且很多地方我们只能通过 `@Bean` 注解来注册 bean。比如当我们引用第三方库中的类需要装配到 `Spring`容器时，则只能通过 `@Bean`来实现。

------

## @Autowired vs @Resource 

`@Autowired` 是 Spring 提供的注解，`@Resource` 是 JDK 提供的注解。

`Autowired` 默认的注入方式为`byType`（根据类型进行匹配），`@Resource`默认注入方式为 `byName`（根据名称进行匹配）。

当一个接口存在多个实现类的情况下，`@Autowired` 和`@Resource`都需要通过名称才能正确匹配到对应的 Bean。`Autowired` 可以通过 `@Qualifier` 注解来显式指定名称，`@Resource`可以通过 `name` 属性来显式指定名称。

`@Autowired` 支持在构造函数、方法、字段和参数上使用。`@Resource` 主要用于字段和方法上的注入，不支持在构造函数或参数上使用。

------

## IoC和AOP是如何使用反射的

**IoC（控制反转）中的反射应用：**

IoC 的核心是对象的创建和依赖注入交给容器管理，而不是开发者手动 new 对象。

1. **对象创建：**
    Spring 在读取配置或注解时，会通过反射使用 `Class.forName()` 加载类，再用 `Constructor.newInstance()` 创建对象实例。
2. **属性注入：**
    在依赖注入阶段，Spring 会通过反射调用 setter 方法或直接访问字段（通过 `Field.set()`）来完成 Bean 属性的赋值。
3. **方法调用：**
    如果使用了初始化方法、销毁方法，Spring 也会通过反射调用这些方法。

------

**AOP（面向切面编程）中的反射应用：**

AOP 的核心是对目标方法进行“增强”，在方法执行前后插入横切逻辑。

1. **代理创建：**
   - 基于 **JDK 动态代理** 的方式，通过反射创建接口的代理类（`Proxy.newProxyInstance()`）。
   - 如果目标类不是接口，Spring 使用 **CGLIB** 动态生成子类，反射也是底层依赖技术之一。
2. **方法拦截与执行：**
    Spring AOP 拦截到方法调用后，通过反射中的 `Method.invoke()` 调用原始方法，并在其前后织入增强逻辑（如日志、事务等）。

---

## spring扩展点

常见的扩展点包括：

**一、`BeanPostProcessor`**

- **作用**：对 Bean 的实例化之后、属性注入完成之后进行增强，比如 AOP 就是通过它实现的。
- **典型应用**：如 `@Autowired` 注入的处理器 `AutowiredAnnotationBeanPostProcessor`，以及 AOP 的 `AnnotationAwareAspectJAutoProxyCreator`。

**二、`BeanFactoryPostProcessor`**

- **作用**：在 Bean 实例化之前，对 Bean 的定义信息（BeanDefinition）进行修改。
- **典型应用**：比如修改 Bean 的 scope、property 值等。

**三、`ApplicationContextInitializer`**

- **作用**：在 Spring 容器刷新之前（调用 `refresh()` 之前）进行配置。
- **应用场景**：Spring Boot 用它来自定义环境变量或配置。

**四、`ApplicationListener`**

- **作用**：监听 Spring 框架发布的各种事件，如容器刷新完成、关闭等。
- **典型应用**：如监听 `ContextRefreshedEvent` 完成一些初始化逻辑。

**五、`SmartInitializingSingleton`**

- **作用**：在所有单例 Bean 初始化完成后被调用一次，适用于系统启动后执行一次性逻辑。

**六、`ImportSelector` / `ImportBeanDefinitionRegistrar`**

- **作用**：用于向 Spring 容器中动态注册 Bean，配合 `@EnableXxx` 常用于自动配置。

**七、`FactoryBean`**

- **作用**：自定义一个工厂类来创建 Bean 实例，而不是让 Spring 直接反射实例化。

**八、`@EventListener`**

- **作用**：注解方式监听 Spring 事件，简化 `ApplicationListener` 的使用。

---

## spring常用注解

#### 一、组件定义和扫描相关

- `@Component`：通用组件注解，标注在类上，让 Spring 扫描并纳入容器管理。
- `@Controller`：用于标注控制器类，通常与 Spring MVC 搭配使用。
- `@Service`：用于标注业务逻辑组件，语义化更清晰。
- `@Repository`：用于标注 DAO 层组件，同时支持异常转换。
- `@Configuration`：用于标注配置类，相当于 XML 中的 `<beans>`。
- `@ComponentScan`：用于指定包路径，让 Spring 扫描并注册组件。

#### 二、依赖注入相关

- `@Autowired`：按照类型注入 Bean，可用于字段、方法、构造器。
- `@Qualifier`：结合 `@Autowired` 使用，指定注入 Bean 的名称。
- `@Resource`：JDK 提供，默认按名称注入，也可以按类型。
- `@Inject`：JDK 的标准注解，类似 `@Autowired`。
- `@Value`：注入配置文件中的值或表达式。

#### 三、生命周期与作用域

- `@PostConstruct`：方法级注解，Bean 初始化后执行。
- `@PreDestroy`：方法级注解，Bean 销毁前执行。
- `@Scope`：指定 Bean 的作用域，如 singleton、prototype 等。

#### 四、AOP 相关

- `@Aspect`：定义一个切面类。
- `@Before`、`@After`、`@Around`：定义切点逻辑。
- `@Pointcut`：定义切点表达式。

#### 五、配置相关

- `@PropertySource`：加载外部配置文件。
- `@EnableConfigurationProperties`：绑定配置类。
- `@EnableAutoConfiguration`：Spring Boot 启动自动装配核心注解。
- `@Import`：导入额外的配置类或组件。

---

### Handlermapping 和 handleradapter有了解吗？

[Spring面试题 | 小林coding](https://xiaolincoding.com/interview/spring.html#handlermapping-和-handleradapter有了解吗)

---









