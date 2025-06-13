---
title ： Github常用操作
---

#### 1.安装Git

https://git-scm.com/

安装后在终端检查

```bash
git --version
```

#### 2.配置用户信息

继续执行以下命令

```bash
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub注册邮箱"
git config --global --list
```

如果出现

```bash
user.name=你的用户名
user.email=你的邮箱
```

表示成功

#### 3.生成SSH密钥

继续在终端输入

```bash
ssh-keygen -t ed25519 -C "2111867383@qq.com"
```

出现

```bash
Enter file in which to save the key (/c/Users/nu11cat1/.ssh/id_ed25519):
```

直接回车

然后回提示设置密码，继续两次回车

显示以下内容表示SSH密钥生成成功

```bash
Your identification has been saved in C:\Users\***\.ssh\id_ed***
Your public key has been saved in C:\Users\***\.ssh\id_ed***.pub
```

#### 4.复制公钥内容

输入以下命令查看公钥内容，就是上一步的路径

```bash
type C:\Users\***\.ssh\id_ed***.pub
```

然后复制出现的`ssh-`开头的字符串

#### 5.添加到Github

打开浏览器，登录 GitHub

点击右上角头像 → **Settings（设置）**

左边点击 **SSH and GPG keys**

点击 **New SSH key** 按钮

填写：

- **Title**：随便写，比如 `My New Laptop`
- **Key**：粘贴刚才复制的那段 `ssh-ed25519...` 内容

点击 **Add SSH key**

#### 6.测试SSH是否连接成功

```bash
ssh -T git@github.com
```

如果是第一次可能显示：

```bash
The authenticity of host 'github.com (IP地址)' can't be established.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

输入`yes`回车即可

然后你会看到

```bash
Hi ***! You've successfully authenticated, but GitHub does not provide shell access.
```

#### 7.克隆项目

如果你想从GitHub克隆现有项目到本地

注意先cd到你想要存放的路径

```java
git clone git@github.com:用户名/仓库名.git
```

#### 8.提交代码

在本地仓库内修改文件提交到`Github`：

查看当前状态：

```bash
git status
```

添加你修改的文件：

```bash
git add 文件名
```

或者添加所有文件：

```bash
git add .
```

提交修改：

```bash
git commit -m "提交信息"
```

推送到 `GitHub`：

```bash
git push origin main
```

这里假设你的默认分支是 `main`，如果是 `master`，请替换成 `master`。

#### 9.切换分支

查看当前分支

```bash
git branch
```

切换分支

```bash
git checkout 分支名
```

创建并切换到新分支

```bash
git checkout -b 新分支名
```

切换到远程分支

```bash
git fetch
git checkout origin/远程分支名
```

查看所有分支

```bash
git branch -a
```

#### 10.新建仓库

先在`GitHub`添加新的空仓库

在本地初始化Git仓库

```bash
cd 路径/到/你的文件夹
git init
git add .
git commit -m "Initial commit"
```

本地仓库与`Github`关联（SSH）

```bash
git remote add origin git@github.com:用户名/仓库名.git
```

推送本地代码到远程仓库

```bash
git branch
git push -u origin main
#或者
git push -u origin master
```

后续同步同`提交代码`

如果你的新仓库不是空的，而是有默认的 `README.md` 或 `.gitignore` 文件，而你本地的 `main` 分支是从空仓库开始的，那么你需要先拉远程在合并和推送

```bash
git pull --rebase origin main
git push -u origin main
```



