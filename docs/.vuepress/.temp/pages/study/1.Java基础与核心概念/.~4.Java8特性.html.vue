<template><div><h1 id="目录-java-8-特性" tabindex="-1"><a class="header-anchor" href="#目录-java-8-特性"><span><strong>目录：Java 8 特性</strong></span></a></h1>
<h2 id="第一部分-lambda-表达式与函数式编程" tabindex="-1"><a class="header-anchor" href="#第一部分-lambda-表达式与函数式编程"><span><strong>第一部分：Lambda 表达式与函数式编程</strong></span></a></h2>
<ol>
<li><strong>Lambda 表达式的基本概念与语法</strong>
• Lambda 表达式的基本语法与示例
• Lambda 表达式的应用场景
• Lambda 表达式与匿名内部类的比较</li>
<li><strong>函数式接口与应用</strong>
• 什么是函数式接口
• 常见的内置函数式接口
• 自定义函数式接口示例</li>
<li><strong>方法引用与构造函数引用</strong>
• 方法引用的基本概念
• 常见的几种方法引用
• 构造函数引用示例</li>
</ol>
<h2 id="第二部分-stream-api-的使用与应用" tabindex="-1"><a class="header-anchor" href="#第二部分-stream-api-的使用与应用"><span><strong>第二部分：Stream API 的使用与应用</strong></span></a></h2>
<ol>
<li><strong>Stream API 的基础概念</strong>
• Stream 的定义与作用
• 如何创建 Stream
• Stream 操作的分类（中间操作与终端操作）</li>
<li><strong>Stream API 中的常见操作</strong>
• 中间操作：<code v-pre>filter</code>、<code v-pre>map</code>、<code v-pre>distinct</code> 等
• 终端操作：<code v-pre>forEach</code>、<code v-pre>collect</code>、<code v-pre>reduce</code> 等
• 串行与并行流的使用与区别</li>
<li><strong>Stream API 的高级操作与最佳实践</strong>
• <code v-pre>flatMap</code> 与 <code v-pre>map</code> 的区别
• <code v-pre>Collectors</code> 的使用：<code v-pre>toList</code>、<code v-pre>joining</code>、<code v-pre>groupingBy</code> 等
• 如何优化 Stream 性能</li>
</ol>
<h2 id="第三部分-optional-类与应用" tabindex="-1"><a class="header-anchor" href="#第三部分-optional-类与应用"><span><strong>第三部分：Optional 类与应用</strong></span></a></h2>
<ol>
<li><strong>Optional 类的基本概念与使用</strong>
• Optional 类的定义与作用
• <code v-pre>of</code>、<code v-pre>empty</code>、<code v-pre>ofNullable</code> 方法的使用
• <code v-pre>isPresent</code> 与 <code v-pre>ifPresent</code> 方法</li>
<li><strong>Optional 的常见操作</strong>
• <code v-pre>map</code>、<code v-pre>flatMap</code>、<code v-pre>filter</code> 的使用
• <code v-pre>orElse</code>、<code v-pre>orElseGet</code>、<code v-pre>orElseThrow</code> 的使用</li>
<li><strong>Optional 类的实际应用与最佳实践</strong>
• 如何避免空指针异常
• Optional 与传统 null 检查的对比
• 在方法返回值中使用 Optional</li>
</ol>
<h1 id="第一部分-lambda-表达式与函数式编程-1" tabindex="-1"><a class="header-anchor" href="#第一部分-lambda-表达式与函数式编程-1"><span><strong>第一部分：Lambda 表达式与函数式编程</strong></span></a></h1>
<h2 id="_1-lambda-表达式的基本概念与语法" tabindex="-1"><a class="header-anchor" href="#_1-lambda-表达式的基本概念与语法"><span><strong>1. Lambda 表达式的基本概念与语法</strong></span></a></h2>
<ul>
<li>
<p><strong>Lambda 表达式的基本语法与示例</strong>
Lambda 表达式是 Java 8 引入的一个重要特性，它让 Java 支持函数式编程。Lambda 表达式的基本语法如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(parameters) </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> expression</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>parameters</code>：输入参数，可以是一个或多个。</li>
<li><code v-pre>expression</code>：Lambda 表达式体，可以是一个单一的表达式或代码块。</li>
</ul>
<p><strong>示例：</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 无参数</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Runnable</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> r </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> () </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello, Lambda!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 一个参数</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Function</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> square </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> x </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 多个参数</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">BinaryOperator</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> add </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b) </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Lambda 表达式的应用场景</strong>
Lambda 表达式通常用于以下场景：</p>
<ul>
<li>集合的遍历和操作（如与 Stream API 配合使用）。</li>
<li>事件监听、回调函数、异步任务等。</li>
<li>替代匿名内部类，简化代码。</li>
</ul>
</li>
<li>
<p><strong>Lambda 表达式与匿名内部类的比较</strong>
Lambda 表达式相比匿名内部类具有更简洁的语法，减少了代码的冗余。
<strong>示例对比：</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 匿名内部类方式</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Runnable</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> r1 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Runnable</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello, World!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Lambda 表达式方式</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Runnable</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> r2 </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> () </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Hello, World!"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_2-函数式接口与应用" tabindex="-1"><a class="header-anchor" href="#_2-函数式接口与应用"><span><strong>2. 函数式接口与应用</strong></span></a></h2>
<ul>
<li>
<p><strong>什么是函数式接口</strong>
函数式接口是一个只包含一个抽象方法的接口，可以有多个默认方法或静态方法。Lambda 表达式的目标是实现这些函数式接口。</p>
<p><strong>内置函数式接口：</strong></p>
<ul>
<li><code v-pre>Predicate&lt;T&gt;</code>：接受一个参数，返回布尔值。</li>
<li><code v-pre>Function&lt;T, R&gt;</code>：接受一个参数，返回一个结果。</li>
<li><code v-pre>Consumer&lt;T&gt;</code>：接受一个参数，无返回值。</li>
<li><code v-pre>Supplier&lt;T&gt;</code>：不接受参数，返回一个结果。</li>
</ul>
<p><strong>示例：</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">FunctionalInterface</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MyFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> apply</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>常见的内置函数式接口</strong></p>
<ul>
<li><code v-pre>Predicate&lt;T&gt;</code>：判断某个条件。</li>
<li><code v-pre>Function&lt;T, R&gt;</code>：转换数据。</li>
<li><code v-pre>Consumer&lt;T&gt;</code>：消费数据，执行操作。</li>
<li><code v-pre>Supplier&lt;T&gt;</code>：提供数据。</li>
</ul>
</li>
<li>
<p><strong>自定义函数式接口示例</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B">FunctionalInterface</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MyCalculator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> calculate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">MyCalculator</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> add </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b) </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">calculate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // 输出 8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_3-方法引用与构造函数引用" tabindex="-1"><a class="header-anchor" href="#_3-方法引用与构造函数引用"><span><strong>3. 方法引用与构造函数引用</strong></span></a></h2>
<ul>
<li>
<p><strong>方法引用的基本概念</strong>
方法引用是一种特殊的 Lambda 表达式，它通过方法名来引用类的方法，简化了 Lambda 表达式的写法。</p>
<p><strong>常见的几种方法引用：</strong></p>
<ul>
<li><strong>静态方法引用</strong>：<code v-pre>ClassName::staticMethod</code></li>
<li><strong>实例方法引用</strong>：<code v-pre>instance::instanceMethod</code></li>
<li><strong>构造函数引用</strong>：<code v-pre>ClassName::new</code></li>
</ul>
<p><strong>示例：</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 静态方法引用</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">BiFunction</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Integer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> add </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> Math</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">::</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">apply</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // 输出 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 实例方法引用</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> list </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"b"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"c"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">::</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 构造函数引用</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">Supplier</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">>></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> listSupplier </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> ArrayList</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">::new</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> newList </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> listSupplier</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h1 id="第二部分-stream-api-的使用与应用-1" tabindex="-1"><a class="header-anchor" href="#第二部分-stream-api-的使用与应用-1"><span><strong>第二部分：Stream API 的使用与应用</strong></span></a></h1>
<h2 id="_1-stream-api-的基础概念" tabindex="-1"><a class="header-anchor" href="#_1-stream-api-的基础概念"><span><strong>1. Stream API 的基础概念</strong></span></a></h2>
<ul>
<li><strong>Stream 的定义与作用</strong>
Stream 是 Java 8 引入的一个新特性，它是对集合的抽象，可以高效地处理数据流，并且支持函数式编程。Stream 操作可以分为两类：
<ul>
<li><strong>中间操作</strong>：如 <code v-pre>map</code>、<code v-pre>filter</code>、<code v-pre>distinct</code>，返回一个新的 Stream。</li>
<li><strong>终端操作</strong>：如 <code v-pre>collect</code>、<code v-pre>forEach</code>、<code v-pre>reduce</code>，触发数据的计算并返回最终结果。</li>
</ul>
</li>
<li><strong>如何创建 Stream</strong>
Stream 可以通过多种方式创建：
<ul>
<li>通过集合创建：<code v-pre>list.stream()</code></li>
<li>通过数组创建：<code v-pre>Arrays.stream(arr)</code></li>
<li>通过 <code v-pre>Stream.of()</code> 创建。</li>
</ul>
</li>
<li><strong>Stream 操作的分类（中间操作与终端操作）</strong>
<ul>
<li><strong>中间操作</strong>：会返回一个新的 Stream，如 <code v-pre>filter</code>、<code v-pre>map</code>、<code v-pre>distinct</code> 等。</li>
<li><strong>终端操作</strong>：会消耗 Stream 的数据并返回最终结果，如 <code v-pre>collect</code>、<code v-pre>reduce</code>、<code v-pre>forEach</code> 等。</li>
</ul>
</li>
</ul>
<h2 id="_2-stream-api-中的常见操作" tabindex="-1"><a class="header-anchor" href="#_2-stream-api-中的常见操作"><span><strong>2. Stream API 中的常见操作</strong></span></a></h2>
<ul>
<li>
<p><strong>中间操作：<code v-pre>filter</code>、<code v-pre>map</code>、<code v-pre>distinct</code> 等</strong></p>
<ul>
<li><code v-pre>filter</code>：根据条件筛选元素。</li>
<li><code v-pre>map</code>：转换每个元素。</li>
<li><code v-pre>distinct</code>：去除重复元素。</li>
</ul>
</li>
<li>
<p><strong>终端操作：<code v-pre>forEach</code>、<code v-pre>collect</code>、<code v-pre>reduce</code> 等</strong></p>
<ul>
<li><code v-pre>forEach</code>：遍历每个元素。</li>
<li><code v-pre>collect</code>：收集元素，通常转换为集合。</li>
<li><code v-pre>reduce</code>：将元素按照一定的规则进行合并。</li>
</ul>
</li>
<li>
<p><strong>串行与并行流的使用与区别</strong></p>
<ul>
<li><strong>串行流</strong>：默认的处理方式，数据按顺序处理。</li>
<li><strong>并行流</strong>：通过多核处理器加速计算，可以并行处理流中的元素。</li>
</ul>
<p><strong>示例：</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> list </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"apple"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"banana"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"cherry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 串行流</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(s </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">startsWith</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">::</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 并行流</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">parallelStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">filter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(s </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">startsWith</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"a"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">::</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">println);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="_3-stream-api-的高级操作与最佳实践" tabindex="-1"><a class="header-anchor" href="#_3-stream-api-的高级操作与最佳实践"><span><strong>3. Stream API 的高级操作与最佳实践</strong></span></a></h2>
<ul>
<li>
<p><strong><code v-pre>flatMap</code> 与 <code v-pre>map</code> 的区别</strong></p>
<ul>
<li><code v-pre>map</code>：将每个元素转换为另一个对象。</li>
<li><code v-pre>flatMap</code>：将每个元素转换为一个 Stream，并将多个 Stream 扁平化成一个流。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>Collectors</code> 的使用：<code v-pre>toList</code>、<code v-pre>joining</code>、<code v-pre>groupingBy</code> 等</strong></p>
<ul>
<li><code v-pre>toList</code>：将 Stream 转换为 List。</li>
<li><code v-pre>joining</code>：连接字符串。</li>
<li><code v-pre>groupingBy</code>：按某个属性进行分组。</li>
</ul>
<p><strong>示例：</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> list </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"apple"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"banana"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"cherry"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">collect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">Collectors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">joining</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">", "</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(result);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  // 输出 apple, banana, cherry</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>如何优化 Stream 性能</strong></p>
<ol>
<li><strong>避免不必要的操作</strong>：如避免不必要的中间操作。</li>
<li><strong>使用并行流</strong>：对于大量数据，使用并行流可以提高性能，但要注意线程安全问题。</li>
</ol>
</li>
</ul>
<h1 id="第三部分-optional-类与应用-1" tabindex="-1"><a class="header-anchor" href="#第三部分-optional-类与应用-1"><span><strong>第三部分：Optional 类与应用</strong></span></a></h1>
<h2 id="_1-optional-类的基本概念与使用" tabindex="-1"><a class="header-anchor" href="#_1-optional-类的基本概念与使用"><span><strong>1. Optional 类的基本概念与使用</strong></span></a></h2>
<ul>
<li><strong>Optional 类的定义与作用</strong>
<code v-pre>Optional</code> 是 Java 8 引入的容器类，用于表示可能为空的值。它用于避免显式的 <code v-pre>null</code> 检查。</li>
<li><strong><code v-pre>of</code>、<code v-pre>empty</code>、<code v-pre>ofNullable</code> 方法的使用</strong>
<ul>
<li><code v-pre>Optional.of(value)</code>：创建一个包含非空值的 Optional。</li>
<li><code v-pre>Optional.empty()</code>：创建一个空的 Optional。</li>
<li><code v-pre>Optional.ofNullable(value)</code>：创建一个 Optional，如果值为空则为 <code v-pre>empty</code>。</li>
</ul>
</li>
<li><strong><code v-pre>isPresent</code> 与 <code v-pre>ifPresent</code> 方法</strong>
<ul>
<li><code v-pre>isPresent()</code>：检查值是否存在。</li>
<li><code v-pre>ifPresent()</code>：如果值存在，执行指定操作。</li>
</ul>
</li>
</ul>
<h2 id="_2-optional-的常见操作" tabindex="-1"><a class="header-anchor" href="#_2-optional-的常见操作"><span><strong>2. Optional 的常见操作</strong></span></a></h2>
<ul>
<li><strong><code v-pre>map</code>、<code v-pre>flatMap</code>、<code v-pre>filter</code> 的使用</strong>
<ul>
<li><code v-pre>map()</code>：如果值存在，则转换值。</li>
<li><code v-pre>flatMap()</code>：类似于 <code v-pre>map()</code>，但返回的是一个 Optional。</li>
<li><code v-pre>filter()</code>：根据条件过滤值。</li>
</ul>
</li>
<li><strong><code v-pre>orElse</code>、<code v-pre>orElseGet</code>、<code v-pre>orElseThrow</code> 的使用</strong>
<ul>
<li><code v-pre>orElse()</code>：如果值为空，返回默认值。</li>
<li><code v-pre>orElseGet()</code>：如果值为空，调用 <code v-pre>Supplier</code> 返回默认值。</li>
<li><code v-pre>orElseThrow()</code>：如果值为空</li>
</ul>
</li>
</ul>
<p>，抛出异常。</p>
<h2 id="_3-optional-类的实际应用与最佳实践" tabindex="-1"><a class="header-anchor" href="#_3-optional-类的实际应用与最佳实践"><span><strong>3. Optional 类的实际应用与最佳实践</strong></span></a></h2>
<ul>
<li><strong>如何避免空指针异常</strong>
使用 <code v-pre>Optional</code> 可以避免显式的 <code v-pre>null</code> 检查，降低空指针异常的风险。</li>
<li><strong>Optional 与传统 null 检查的对比</strong>
传统的 <code v-pre>null</code> 检查比较繁琐，<code v-pre>Optional</code> 提供了更加简洁和安全的方式来处理空值。</li>
<li><strong>在方法返回值中使用 Optional</strong>
<code v-pre>Optional</code> 常用于方法返回值，表示方法可能返回值，也可能不返回值，避免了 <code v-pre>null</code> 值的隐性错误。</li>
</ul>
</div></template>


