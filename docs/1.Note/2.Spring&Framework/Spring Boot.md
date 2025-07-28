---
title : Spring Boot
order : 2
---

自动配置、Starter、Actuator

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

# Starter 启动器

[如何实现一个 Starter](https://javaguide.cn/system-design/framework/spring/spring-boot-auto-assembly-principles.html#如何实现一个-starter)

# 注解

[Spring&SpringBoot常用注解总结 | JavaGuide](https://javaguide.cn/system-design/framework/spring/spring-common-annotations.html)
