---
title : Spring Boot
order : 2
---

# Spring Boot

Spring Boot 是基于 Spring 框架的一个快速开发框架，目的是简化 Spring 应用的配置和部署。它通过自动配置**、**内嵌服务器**、**起步依赖（starter）等特性，让开发者可以开箱即用地构建独立、生产级别的 Spring 应用，大大减少了样板代码和繁琐的 XML 配置。

## 为什么使用

- 简化开发：Spring Boot通过提供一系列的开箱即用的组件和自动配置，简化了项目的配置和开发过程，开发人员可以更专注于业务逻辑的实现，而不需要花费过多时间在繁琐的配置上。

- 快速启动：Spring Boot提供了快速的应用程序启动方式，可通过内嵌的Tomcat、Jetty或Undertow等容器快速启动应用程序，无需额外的部署步骤，方便快捷。
- 自动化配置：Spring Boot通过自动配置功能，根据项目中的依赖关系和约定俗成的规则来配置应用程序，减少了配置的复杂性，使开发者更容易实现应用的最佳实践。

---

## 约定大于配置

约定大于配置是Spring Boot的核心设计理念，它通过**预设合理的默认行为和项目规范**，大幅减少开发者需要手动配置的步骤，从而提升开发效率和项目标准化程度。

可以从以下几个方面来解释：

- **自动化配置**：Spring Boot 提供了大量的自动化配置，通过分析项目的依赖和环境，自动配置应用程序的行为。开发者无需显式地配置每个细节，大部分常用的配置都已经预设好了。例如，引入spring-boot-starter-web后，Spring Boot会自动配置内嵌Tomcat和Spring MVC，无需手动编写XML。
- **默认配置**：Spring Boot 为诸多方面提供大量默认配置，如连接数据库、设置 Web 服务器、处理日志等。开发人员无需手动配置这些常见内容，框架已做好决策。例如，默认的日志配置可让应用程序快速输出日志信息，无需开发者额外繁琐配置日志级别、输出格式与位置等。
- **约定的项目结构**：Spring Boot 提倡特定项目结构，通常主应用程序类（含 main 方法）置于根包，控制器类、服务类、数据访问类等分别放在相应子包，如com.example.demo.controller放控制器类，放服务类等。此约定使团队成员更易理解项目结构与组织，新成员加入项目时能快速定位各功能代码位置，提升协作效率。

---

## 项目结构

**开放接口层**：可直接封装 Service 接口暴露成 RPC 接口；通过 Web 封装成 http 接口；网关控制层等。

**终端显示层**：各个端的模板渲染并执行显示的层。当前主要是 velocity 渲染，JS 渲染，JSP 渲染，移动端展示等。

**Web 层**：主要是对访问控制进行转发，各类基本参数校验，或者不复用的业务简单处理等。

**Service 层**：相对具体的业务逻辑服务层。

**Manager 层**：通用业务处理层，它有如下特征：

1）对第三方平台封装的层，预处理返回结果及转化异常信息，适配上层接口。

2）对 Service 层通用能力的下沉，如缓存方案、中间件通用处理。

3）与 DAO 层交互，对多个 DAO 的组合复用。

**DAO 层**：数据访问层，与底层 MySQL、Oracle、Hbase、OceanBase 等进行数据交互。

**第三方服务**：包括其它部门 RPC 服务接口，基础平台，其它公司的 HTTP 接口，如淘宝开放平台、支付宝付款服务、高德地图服务等。

**外部接口**：外部（应用）数据存储服务提供的接口，多见于数据迁移场景中。

---

## 怎么做到导入依赖后就能直接使用

Spring Boot 之所以能做到**导入依赖就能直接使用**，核心在于它基于**自动配置（AutoConfiguration）机制**，简化了大量手动配置。其背后的原理包括以下几个关键点：

1. **起步依赖（Starter）**
    Spring Boot 提供了一系列以 `spring-boot-starter-*` 命名的起步依赖，整合了常用技术（如 web、jpa、redis 等）所需的所有依赖，开发者只需引入一个 starter，就能使用对应功能。
2. **自动配置机制**
    Spring Boot 通过 `@EnableAutoConfiguration` 注解结合 **Spring 的 SPI（Service Provider Interface）机制**，会自动加载类路径下的 `META-INF/spring.factories` 文件中的配置类。
3. **条件注解判断是否生效**
    加载的自动配置类中，通常会配合 `@ConditionalOnClass`、`@ConditionalOnMissingBean`、`@ConditionalOnProperty` 等条件注解，动态判断当前项目是否需要启用对应功能配置。
4. **默认配置 + 外部配置覆盖**
    Spring Boot 提供合理的默认配置（如内嵌 Tomcat、默认端口 8080、默认数据源等），并允许通过 `application.properties` 或 `application.yml` 轻松覆盖。

---

# 自动配置

**自动装配（Auto-Configuration）** 是 Spring Boot 的核心特性之一，它的作用是：**根据项目中引入的依赖和已有的配置，自动帮你完成相关 Bean 的注册和配置**，从而简化开发者手动配置的工作。

## 工作流程

首先，Spring Boot 项目通常以 `@SpringBootApplication` 注解作为入口，它本质上是一个复合注解，其中包含了一个关键注解 `@EnableAutoConfiguration`。这个注解的作用是启用 Spring Boot 的自动配置能力。

当应用启动时，Spring Boot 会根据类路径下的依赖、当前的配置信息和运行环境，自动推断并配置出合适的 Spring 组件。这一过程的核心依赖于一种称为“SPI机制”的服务加载方式：Spring Boot 会扫描项目中的一个特殊配置文件，从中获取所有的自动配置类。

这些自动配置类中通常使用了条件判断注解，例如“当类路径下存在某个类”或者“当容器中缺少某个 Bean”时才进行自动装配。这样可以确保只加载真正需要的配置，避免不必要的资源浪费。

通过这种机制，Spring Boot 可以根据开发者引入的依赖，自动配置常用的中间件组件、Web 框架、数据源连接等，极大地减少了开发中繁琐的 XML 或 Java 配置，提高了开发效率和可维护性。

---

## 如何实现

**Spring Boot 是通过 `@EnableAutoConfiguration` 结合 SPI 机制，扫描并加载配置类，再通过条件注解动态判断是否生效，最终实现自动装配的。**

具体来说，它会在应用启动时，根据类路径下的依赖和当前环境，自动匹配合适的配置类，然后通过 `@Conditional` 系列注解判断这些配置是否需要生效。如果条件满足，Spring Boot 就会自动注册相关的 Bean，完成组件的装配。这样大大简化了传统 Spring 项目中繁琐的 XML 或 Java 配置过程，提升了开发效率。

---

## 原理

Spring Boot 的自动装配是通过 `@EnableAutoConfiguration` 注解配合 Spring 的条件装配机制来实现的。其核心原理如下：

1. **@SpringBootApplication 启动自动装配入口**
    这个注解是一个组合注解，其中包含了 `@EnableAutoConfiguration`。启动类加了这个注解后，Spring Boot 会尝试根据当前应用的依赖和配置，自动装配相应的 Bean。
2. **@EnableAutoConfiguration 导入自动配置类**
    它使用了 `@Import(AutoConfigurationImportSelector.class)`，这个类会在启动时从类路径下加载 `META-INF/spring.factories` 文件中配置的所有自动配置类（如 `RedisAutoConfiguration`、`WebMvcAutoConfiguration` 等）。
3. **spring.factories 中声明自动配置类**
    这些自动配置类都会被提前加载，但是是否真正生效，要通过“条件注解”判断。
4. **条件注解控制自动配置是否生效**
    常见注解有：
   - `@ConditionalOnClass`：类路径下存在某个类时生效；
   - `@ConditionalOnMissingBean`：容器中不存在某个 Bean 时生效；
   - `@ConditionalOnProperty`：某个配置属性满足条件时生效。
5. **通过配置覆盖默认行为**
    开发者可以通过 `application.yml` 或 `application.properties` 来启用、禁用或覆盖默认的配置，从而灵活控制自动装配的行为。

---

# Starter 启动器

## 常见starter

常见的 Starter 启动器包括：

1. **spring-boot-starter**：
    最核心的启动器，几乎所有项目都会依赖它，提供基本的 Spring Boot 应用支持。
2. **spring-boot-starter-web**：
    用于构建 Web 应用，包括 Spring MVC、Tomcat（默认）、Jackson 等。
3. **spring-boot-starter-data-jpa**：
    集成 Spring Data JPA 和 Hibernate，用于简化数据库持久化开发。
4. **spring-boot-starter-jdbc**：
    提供对 JDBC 的支持，适合不使用 ORM 直接操作数据库的场景。
5. **spring-boot-starter-security**：
    提供安全认证和授权功能，集成了 Spring Security。
6. **spring-boot-starter-test**：
    包含 JUnit、Mockito、Spring Test 等测试工具，用于测试支持。
7. **spring-boot-starter-thymeleaf**：
    集成 Thymeleaf 模板引擎，适合构建服务端渲染页面。
8. **spring-boot-starter-actuator**：
    提供应用监控和运维相关的端点，如健康检查、性能指标等。
9. **spring-boot-starter-aop**：
    提供对 Spring AOP 的支持，用于切面编程。
10. **spring-boot-starter-validation**：
     提供数据校验支持，基于 Hibernate Validator。

----

## 实现一个starter

[如何实现一个 Starter](https://javaguide.cn/system-design/framework/spring/spring-boot-auto-assembly-principles.html#如何实现一个-starter)

---

# 注解

[Spring&SpringBoot常用注解总结 | JavaGuide](https://javaguide.cn/system-design/framework/spring/spring-common-annotations.html)

在 Spring Boot 中，注解是实现自动配置、组件扫描、配置管理等核心功能的重要手段。以下是一些关键注解及其作用：

1. **@SpringBootApplication**
    Spring Boot 项目的入口注解，是 `@Configuration`、`@EnableAutoConfiguration` 和 `@ComponentScan` 的组合，表示这是一个 Spring Boot 应用，负责配置和组件扫描。
2. **@EnableAutoConfiguration**
    启用 Spring Boot 的自动配置机制，根据 classpath 中的依赖自动配置相关的 Bean。
3. **@ComponentScan**
    扫描当前包及子包下被 `@Component`、`@Service`、`@Repository`、`@Controller` 等注解标注的类，自动注册为 Spring Bean。
4. **@Configuration**
    声明该类是一个配置类，等价于传统的 XML 配置文件，通常用于定义 Bean。
5. **@Bean**
    表示方法的返回值会被注册为 Spring 容器中的一个 Bean，通常和 `@Configuration` 一起使用。
6. **@Value**
    用于注入配置文件中的属性值。
7. **@ConfigurationProperties**
    用于将配置文件中的一组属性绑定到一个 Java Bean 上，便于统一管理配置。
8. **@RestController / @Controller**
    分别用于定义 REST 接口控制器和传统的 MVC 控制器。
9. **@RequestMapping / @GetMapping / @PostMapping 等**
    用于映射请求路径和 HTTP 方法到具体的处理方法上。
10. **@Autowired / @Resource / @Inject**
     注入依赖 Bean，`@Autowired` 是最常用的方式。
11. **@ConditionalOnXXX（如 @ConditionalOnMissingBean）**
     条件注解，用于控制某个配置类或 Bean 是否加载，是自动配置的核心基础。
12. **@EnableConfigurationProperties**
     结合 `@ConfigurationProperties` 使用，开启配置属性绑定功能。

---

# 设计模式

**代理模式**：Spring 的 AOP 通过动态代理实现方法级别的切面增强，有静态和动态两种代理方式，采用动态代理方式。

**策略模式**：Spring AOP 支持 JDK 和 Cglib 两种动态代理实现方式，通过策略接口和不同策略类，运行时动态选择，其创建一般通过工厂方法实现。

**装饰器模式**：Spring 用 TransactionAwareCacheDecorator 解决缓存与数据库事务问题增加对事务的支持。

**单例模式**：Spring Bean 默认是单例模式，通过单例注册表（如 HashMap）实现。

**简单工厂模式**：Spring 中的 BeanFactory 是简单工厂模式的体现，通过工厂类方法获取 Bean 实例。

**工厂方法模式**：Spring中的 FactoryBean 体现工厂方法模式，为不同产品提供不同工厂。

**观察者模式**：Spring 观察者模式包含 Event 事件、Listener 监听者、Publisher 发送者，通过定义事件、监听器和发送者实现，观察者注册在 ApplicationContext 中，消息发送由 ApplicationEventMulticaster 完成。

**模板模式**：Spring Bean 的创建过程涉及模板模式，体现扩展性，类似 Callback 回调实现方式。

**适配器模式：Spring MVC 中针对不同方式定义的 Controller，利用适配器模式统一函数定义，定义了统一接口 HandlerAdapter 及对应适配器类。**

---

# 过滤器和拦截器

**过滤器**是 Java Servlet 规范中的一部分，它可以对进入 Servlet 容器的请求和响应进行预处理和后处理。过滤器通过实现 javax.servlet.Filter 接口，并重写其中的 init、doFilter 和 destroy 方法来完成相应的逻辑。当请求进入 Servlet 容器时，会按照配置的顺序依次经过各个过滤器，然后再到达目标 Servlet 或控制器；响应返回时，也会按照相反的顺序再次经过这些过滤器。

**拦截器**是 Spring 框架提供的一种机制，它可以对控制器方法的执行进行拦截。拦截器通过实现 org.springframework.web.servlet.HandlerInterceptor 接口，并重写其中的 preHandle、postHandle和afterCompletion 方法来完成相应的逻辑。当请求到达控制器时，会先经过拦截器的 preHandle 方法，如果该方法返回 true，则继续执行后续的控制器方法和其他拦截器；在控制器方法执行完成后，会调用拦截器的 postHandle 方法；最后，在请求处理完成后，会调用拦截器的 afterCompletion 方法。

----

**区别**

**所属规范**：过滤器是 Java Servlet 规范的一部分，而拦截器是 Spring 框架提供的机制。

**执行顺序**：过滤器在请求进入 Servlet 容器后，在到达目标 Servlet 或控制器之前执行；拦截器在请求到达控制器之后，在控制器方法执行前后执行。

**使用范围**：过滤器可以对所有类型的请求进行过滤，包括静态资源请求；拦截器只能对 Spring MVC 控制器的请求进行拦截。

**功能特性**：过滤器主要用于对请求和响应进行预处理和后处理，如字符编码处理、请求日志记录等；拦截器可以更细粒度地控制控制器方法的执行，如权限验证、性能监控等。







