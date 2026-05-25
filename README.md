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
| `vocab` | 背单词：单词记录 + FSRS-6 间隔重复复习，含派生词 / 词族、复习弹窗 |
| `todo` | 待办看板：当前聚焦 + 今日待办 + 项目追踪（项目/任务/子任务），支持派单同步 |
| `pomodoro` | 番茄专注：防崩溃计时器，圆环倒计时 + 专注/休息双模式 + 统计与全年热力图，支持桌面悬浮窗（始终置顶、可切迷你模式） |
| `discipline` | 自律打卡：对自己的行为约束 —— 要做 / 限额 / 戒断三种类型，周视图 + 顶部汇总（达标 / 越线 / 最长在戒）+ 每项 7 天迷你热力 |

每个模块头部有「📖 说明」按钮，点开即是该模块的完整用法。

## 平台

桌面端与移动端（iOS / Android）均可用。

---

作者：雪天鱼 · MIT License
