<template><div><hr>
<p><strong>问：Java 中的异常处理机制是如何工作的？</strong></p>
<p>答：Java 的异常处理机制通过 <code v-pre>try-catch-finally</code> 结构以及 <code v-pre>throw</code> 和 <code v-pre>throws</code> 关键字来实现。</p>
<ul>
<li><strong>try 块</strong>：包含可能抛出异常的代码。</li>
<li><strong>catch 块</strong>：用于捕获并处理 try 块中抛出的异常。可以有多个 catch 块，分别处理不同类型的异常。</li>
<li><strong>finally 块</strong>：无论是否发生异常，finally 块中的代码都会执行，常用于资源的释放，如关闭文件、数据库连接等。</li>
<li><strong>throw 关键字</strong>：用于手动抛出一个异常实例。</li>
<li><strong>throws 关键字</strong>：用于方法声明中，表示该方法可能抛出某些异常，调用者需要处理这些异常。</li>
</ul>
<hr>
<p><strong>问：Java 中异常的分类是什么？</strong></p>
<p>答：Java 中的异常体系以 <code v-pre>Throwable</code> 类为根，分为两个主要子类：</p>
<ul>
<li><strong>Error</strong>：表示严重的错误，通常是 JVM 无法处理的，如 <code v-pre>OutOfMemoryError</code>、<code v-pre>StackOverflowError</code> 等。程序不应捕获或处理这些错误。</li>
<li><strong>Exception</strong>：表示程序可以处理的异常，进一步分为：
<ul>
<li><strong>受检异常（Checked Exception）</strong>：在编译时强制要求处理的异常，如 <code v-pre>IOException</code>、<code v-pre>SQLException</code> 等。</li>
<li><strong>非受检异常（Unchecked Exception）</strong>：运行时异常，编译器不强制要求处理，如 <code v-pre>NullPointerException</code>、<code v-pre>ArrayIndexOutOfBoundsException</code> 等。</li>
</ul>
</li>
</ul>
<hr>
<p><strong>问：受检异常和非受检异常有何区别？</strong></p>
<p>答：</p>
<ul>
<li><strong>受检异常（Checked Exception）</strong>：
<ul>
<li>在编译时强制要求处理，必须使用 try-catch 块捕获或在方法签名中声明 throws。</li>
<li>通常用于可预见的异常情况，如文件未找到、数据库连接失败等。</li>
</ul>
</li>
<li><strong>非受检异常（Unchecked Exception）</strong>：
<ul>
<li>在编译时不强制要求处理，可以选择捕获或不处理。</li>
<li>通常是由于程序逻辑错误引起，如空指针访问、数组越界等。</li>
</ul>
</li>
</ul>
<hr>
<p><strong>问：throw 和 throws 有什么区别？</strong></p>
<p>答：</p>
<ul>
<li><strong>throw</strong>：
<ul>
<li>用于方法内部，手动抛出一个异常实例。</li>
<li>语法：<code v-pre>throw new ExceptionType(&quot;Error Message&quot;);</code></li>
</ul>
</li>
<li><strong>throws</strong>：
<ul>
<li>用于方法声明中，表示该方法可能抛出某些异常，调用者需要处理。</li>
<li>语法：<code v-pre>public void method() throws ExceptionType {}</code></li>
</ul>
</li>
</ul>
<hr>
<p><strong>问：finally 块的作用是什么？</strong></p>
<p>答：finally 块用于执行清理操作，无论是否发生异常，finally 块中的代码都会执行。常用于释放资源，如关闭文件、网络连接等。</p>
<hr>
<p><strong>问：Java 中如何创建自定义异常？</strong></p>
<p>答：可以通过继承 <code v-pre>Exception</code> 或 <code v-pre>RuntimeException</code> 类来创建自定义异常。</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> MyException</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Exception</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> MyException</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> message</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">        super</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(message);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果继承自 <code v-pre>Exception</code>，则为受检异常；如果继承自 <code v-pre>RuntimeException</code>，则为非受检异常。</p>
<hr>
<p><strong>问：什么是异常链（Chained Exception）？</strong></p>
<p>答：异常链是指在捕获一个异常后，将其作为另一个异常的原因（cause）重新抛出，以保留原始异常信息。</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 可能抛出异常的代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">IOException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    throw</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> CustomException</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Custom message"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> e)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以在处理高层异常时，追踪到原始异常的根本原因。</p>
<hr>
<p><strong>问：Java 中的异常处理对性能有何影响？</strong></p>
<p>答：异常处理机制在正常执行路径中几乎没有性能开销，但在抛出和捕获异常时，会涉及栈帧的展开和异常对象的创建，可能影响性能。因此，应避免将异常处理用于控制程序流程，而应仅在真正的异常情况下使用。</p>
<hr>
<p><strong>问：在多线程环境下，如何处理异常？</strong></p>
<p>答：在多线程环境中，每个线程应独立处理其可能发生的异常。</p>
<ul>
<li><strong>线程内部处理</strong>：在线程的 run 方法中使用 try-catch 块捕获并处理异常。</li>
<li><strong>线程未捕获异常处理器</strong>：可以通过设置 <code v-pre>Thread.setDefaultUncaughtExceptionHandler</code> 来处理未捕获的异常。</li>
</ul>
<hr>
<p><strong>问：Java 中的异常处理与资源管理有何关系？</strong></p>
<p>答：Java 7 引入了 try-with-resources 语句，用于自动关闭实现了 <code v-pre>AutoCloseable</code> 接口的资源，如文件、数据库连接等。</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">BufferedReader</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> br </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> BufferedReader</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> FileReader</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"file.txt"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">))) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 使用资源</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">IOException</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">    // 异常处理</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 try 块结束时，无论是否发生异常，都会自动调用资源的 <code v-pre>close</code> 方法，简化了资源管理。</p>
<hr>
</div></template>


