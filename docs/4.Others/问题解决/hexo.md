### 第一步：环境准备

Hexo 基于 Node.js，所以你需要先安装它。

1. **安装 Node.js 和 npm**：

   - 访问 [Node.js 官网](https://nodejs.org/)。

   - 下载并安装 **LTS（长期支持版）**。

   - 安装完成后，打开你的终端（或 CMD/PowerShell），输入以下命令来验证是否安装成功：

     ```
     node -v
     npm -v
     ```

     如果正确显示了版本号，说明安装成功。

2. **安装 Hexo 命令行工具**：

   - 在终端中运行以下命令：

     ```
     npm install -g hexo-cli
     ```

   - 安装完成后，验证一下：

     ```
     hexo -v
     ```

------

### 第二步：初始化你的博客站点

1. 在终端中，切换到你希望创建博客的目录（例如 `C:\Users\YourName\Documents\` 或`~/Documents/`）。

2. 运行以下命令来初始化一个 Hexo 博客，`my-blog`是你的文件夹名称，可以自定义：

   ```
   hexo init my-blog
   ```

3. 初始化完成后，进入该文件夹并安装依赖：

   ```
   cd my-blog
   npm install
   ```

   现在你的博客骨架就创建好了！它的结构大概是这样的：

   ```
   my-blog/
   ├── _config.yml       # 站点的核心配置文件
   ├── source/           # 你的Markdown源文件存放地
   │   └── _posts/       # 文章默认就在这个文件夹里
   ├── themes/           # 主题存放的文件夹
   ├── public/           # 执行生成命令后，静态文件会在这里（勿动）
   └── ...
   ```

------

### 第三步：选择并安装一个主题

Hexo 默认的主题很朴素，我们换一个好看且功能强大的。

1. **挑选主题**：访问 [Hexo 主题页](https://hexo.io/themes/)，挑选一个你喜欢的。**强烈推荐 `Fluid`**，它设计现代、文档齐全、功能强大，非常适合做技术文档和博客。

   - Fluid GitHub 地址: https://github.com/fluid-dev/hexo-theme-fluid

2. **安装主题**：

   在你的博客根目录 (`my-blog`) 下，运行以下命令：

   ```
   npm install --save hexo-theme-fluid
   ```

3. **启用主题**：

   打开根目录下的 `_config.yml`文件（**这是站点配置文件**），找到 `theme`字段，将其修改为：

   ```
   theme: fluid
   ```

4. **创建主题配置文件**：

   - 在博客根目录下，创建一个新文件 `_config.fluid.yml`。
   - 将 [Fluid 项目仓库里 `_config.yml`](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/_config.yml)的全部内容复制到你刚创建的文件中。
   - **现在你有两个配置文件**：
     - `_config.yml`：**站点配置**（控制全局）
     - `_config.fluid.yml`：**主题配置**（控制外观和功能）

------

### 第四步：迁移你的笔记并组织分类

这是最核心的一步，将你的知识体系落地。

1. **理解文章结构**：

   - 所有文章（笔记）都应放在 `source/_posts/`文件夹下。
   - 但你**可以直接在 `source`目录下创建子文件夹**来分类！Hexo 会自动处理路由。

2. **创建分类文件夹**：

   在 `source`目录下，创建对应你知识体系的文件夹结构。例如：

   ```
   source/
   ├── _posts/          # 默认 posts，可以放一些杂文
   ├── computer-basis/  # 计算机基础
   ├── java-core/       # Java核心
   ├── frameworks/      # 框架生态
   ├── database/        # 数据存储
   ├── distribution/    # 分布式架构
   ├── devops/          # 开发运维
   └── projects/        # 项目实战
   ```

   **注意**：每个分类文件夹下，都需要一个 `index.md`文件作为该分类的首页。Hexo 会自动生成。你可以先创建文件夹，后续通过命令生成文章时它会自动创建。

3. **开始写文章/迁移笔记**：

   - **方法一（推荐，用命令行）**： 使用 `hexo new`命令创建新文章，它会自动帮你处理好 Front Matter。

     ```
     # 语法： hexo new [layout] <title>
     # 在指定分类下创建一篇新文章
     hexo new post --path distribution/RPC-Principle "RPC原理详解"
     ```

     这会在 `source/distribution/RPC-Principle.md`创建文件。

   - **方法二（手动迁移）**： 直接将你现有的 `.md`文件复制到对应的分类文件夹下。然后，**你必须为每个文件手动添加 Hexo 的 Front Matter**。打开一个旧笔记，在最顶部添加：

     ```
     ---
     title: 你的文章标题        # 必需
     date: 2024-07-25 22:58:59  # 必需（可修改为文件创建日期）
     categories: [分布式架构]    # 必需（与文件夹名对应）
     tags: [RPC, 分布式, 网络]   # 可选
     ---
     ```

     **注意**：Front Matter 必须用 `---`包裹。

------

### 第五步：本地预览和调试

1. 在博客根目录下，运行以下命令来启动本地服务器：

   ```
   hexo server
   # 或简写
   hexo s
   ```

2. 终端会输出一个地址，通常是 `http://localhost:4000`。在浏览器中打开它。

3. **你现在可以看到你的网站了！** 一边修改你的笔记和配置文件，一边在浏览器刷新查看效果。**所有修改都需要重启 `hexo s`才能生效**。

------

### 第六步：生成静态文件并部署

我们使用 **Vercel** 进行部署，因为它最简单快捷。

1. **安装 Vercel 命令行工具**：

   ```
   npm install -g vercel
   ```

2. **登录 Vercel**：

   ```
   vercel login
   ```

   按照提示完成登录。

3. **在博客根目录部署**：

   ```
   vercel
   ```

   然后会有一系列提示，全部直接按回车使用默认选项即可。

   - 它会问你 “Link to existing project?” 选 `N`。
   - 问你 “Set up and deploy?” 选 `Y`。
   - 问你 “Which scope do you want to deploy to?” 直接回车。
   - 问你 “Link to existing project?” 再选 `N`。
   - 问你 “What’s your project’s name?” 直接回车。
   - 问你 “In which directory is your code located?” 直接回车。

4. **部署成功**：

   命令执行完后，它会给你一个唯一的 URL，比如 `https://my-blog.vercel.app`。你的网站已经上线了！

5. **(可选) 连接 GitHub 实现自动部署**：

   - 在博客根目录初始化 Git：`git init`
   - 在 GitHub 上创建一个新的仓库。
   - 将本地仓库关联并推送到 GitHub。
   - 进入 Vercel 网站 dashboard，点击 “Import Project”，导入你的 GitHub 仓库。之后每次你 `git push`代码，Vercel 都会自动重新部署网站。

---

