# Homepage Modules

可扩展的个人主页 Obsidian 插件 —— 用一个 `homepage` 代码块渲染日记等交互模块。
一个插件容纳多个模块，新增模块互不干扰。

## 安装（通过 BRAT）

本插件未上架社区市场，用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装与自动更新：

1. 安装并启用社区插件 **BRAT**
2. BRAT 设置 → **Add Beta Plugin** → 填入本仓库：
   ```
   XueTianyu24/obsidian-homepage-modules
   ```
3. 启用 **Homepage Modules**

之后每次发布新版本，BRAT 会在所有设备上自动更新。

## 使用

在任意笔记里写一个代码块，语言写 `homepage`，第一行写模块 id：

````markdown
```homepage
diary
```
````

当前内置模块：

| 模块 id | 说明 |
|---------|------|
| `diary` | 日记记录：每日体重/睡眠/工作/健身 + 时间段日志，周/月视图与汇总 |

每个模块头部有「📖 说明」按钮，点开即是该模块的完整用法。

## 平台

桌面端与移动端（iOS / Android）均可用。

---

作者：雪天鱼 · MIT License
