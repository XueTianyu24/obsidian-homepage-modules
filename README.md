# Homepage Modules

一个可扩展的 **Obsidian 个人主页插件** —— 用一个 `homepage` 代码块，渲染日记、待办、
番茄、自律、健身、天气、会议 DDL、统计、倒计时等 **20 个交互模块**；再用「主页」把它们拼成一张
开箱即用的个人仪表盘。一个插件容纳多个模块，新增模块互不干扰，零主题依赖。

<div align="center">
  <img src="docs/img/hero-dark.png" width="820" alt="主页全景"><br>
  <sub><b>一张主页装下所有模块</b> · 卡片式布局 · 可自由增删 / 调宽 / 跨行 / 切列数</sub>
</div>

---

## 🌗 主题自适应（深 ↔ 浅一键切换，零配置）

所有模块颜色走 Nord 语义色板，跟随 Obsidian 主题自动适配，深色浅色都好看。

<div align="center">
  <img src="docs/img/theme-compare.png" width="820" alt="深浅主题对比">
</div>

---

## 🎨 核心功能模块

> 每个模块都是独立的 `homepage` 代码块，单独嵌进任意笔记也能用；下面是真实渲染效果。

<table>
<tr>
<td width="50%" valign="top">
  <img src="docs/img/module-todo.png" width="410" alt="待办看板"><br>
  <b>✅ 待办看板</b><br>
  <sub>当前聚焦 + 今日待办 + 长期任务（起止 + 倒计时）+ 周·月计划（目标 + 复盘 + 自动归档）+ 项目追踪三层，项目可「派单」到今日待办双向同步。</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/img/module-pomodoro.png" width="410" alt="番茄专注"><br>
  <b>🍅 番茄专注</b><br>
  <sub>时间戳法计时（关掉 Obsidian 也不丢进度）+ 桌面悬浮窗 + 全年热力图 + 历史记录可单条删除。</sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <img src="docs/img/module-project-log.png" width="410" alt="项目日志"><br>
  <b>📈 项目日志</b><br>
  <sub>项目→主题→每日条目三级管理 + 项目须知(Markdown) + 待办清单；四视图（折叠日志 / 按天 / 热力图 / 甘特泳道），主题区间自动推导，重叠即并行。</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/img/module-psyche.png" width="410" alt="精神内核"><br>
  <b>🧭 精神内核</b><br>
  <sub>SVG 自动布局的价值观 / 原则树（替代手画 Canvas）。多根 + 「层」分组 + 横纵向布局 + 笔记内链。</sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <img src="docs/img/module-diary.png" width="410" alt="日记记录"><br>
  <b>📔 日记记录</b><br>
  <sub>每日体重 / 睡眠 / 工作 / 健身 4 个数字 + 💧 喝水打卡（早中晚各 2 杯）+ 时间段日志 + 周 / 月视图与汇总。</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/img/module-vocab.png" width="410" alt="背单词"><br>
  <b>📖 背单词</b><br>
  <sub>FSRS-6 间隔重复（Anki 同款调度）+ ECDICT 离线中文词库查词 + 词族关联 + 复习弹窗。</sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <img src="docs/img/module-discipline.png" width="410" alt="自律打卡"><br>
  <b>🎯 自律打卡</b><br>
  <sub>要做 / 限额 / 戒断 三类约束，按类型分组 + 周视图 + 顶部三卡汇总 + 7 天迷你热力 + 自定义指标（跑步距离 / 配速 / 用时）。</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/img/module-weather.png" width="410" alt="天气"><br>
  <b>⛅ 天气</b><br>
  <sub>多地点实况 + 未来 3 天预报（温度区间渐变条），数据源和风天气；支持区县搜索与镇 / 街道手动经纬度。</sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <img src="docs/img/module-prompts.png" width="410" alt="提示词库"><br>
  <b>💬 提示词库</b><br>
  <sub>常用 AI 提示词分标签管理：搜索 / 标签筛选 / 收藏置顶，一键复制原文直接喂给 ChatGPT / Claude / Agent。</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/img/module-principles.png" width="410" alt="个人信条"><br>
  <b>📜 个人信条</b><br>
  <sub>把对自己的约束 / 原则一条条记下：分类管理 + 可展开「为什么 / 怎么做 / 触发场景」+ 核心戒律置顶；每天一次「守住 / 破戒」自检，攒连续坚持天数 + 回顾热力。</sub>
</td>
</tr>
</table>

<div align="center">
  <img src="docs/img/module-deadlines.png" width="760" alt="学术会议 / 期刊 DDL"><br>
  <b>📅 学术会议 / 期刊 DDL</b> · <sub>会议：ccfddl 同步 + 倒计时 + 时区换算 + 临近提醒；期刊：内置 13 个微电子 / EDA 刊的 CCF + 中科院分区 + IF + 投稿周期（🏛 官方 / 💬 网友双口径）+ 官网直达。</sub>
</div>

<div align="center">
  <img src="docs/img/module-gym.png" width="760" alt="健身记录"><br>
  <b>💪 健身记录</b> · <sub>按动作记每日多组「重量×组数×次数」+ 选填 RPE；连续天数 🔥 / 历史总次数 / PR + 负重 e1RM 力量估算 + 每卡进步趋势小图。</sub>
</div>

---

## 🧩 主页配套小组件

<table>
<tr>
<td width="50%" valign="top">
  <img src="docs/img/module-time-progress.png" width="410" alt="时间进度"><br>
  <b>📅 时间进度</b><br>
  <sub>年 / 月双卡：12 月份网格 + 日历 + 进度条 +「N 天剩余」，年蓝月金冷暖对比。</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/img/module-recent-files.png" width="410" alt="最近修改"><br>
  <b>📂 最近修改</b><br>
  <sub>按修改时间排前 N（默认 8）+ 扩展名 tag + 一键隐私模式（●●●●）。</sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <img src="docs/img/module-countdown.png" width="410" alt="项目倒计时"><br>
  <b>⏳ 项目倒计时</b><br>
  <sub>卡片网格 + SVG 进度环 + 加 / 删 / 二次确认，临近变橙、到期变红。</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/img/module-pinned-notes.png" width="410" alt="常用笔记"><br>
  <b>📌 常用笔记</b><br>
  <sub>固定笔记列表，list / grid 双视图；添加走模糊搜索选择器，无需手打路径。</sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
  <img src="docs/img/module-greeting.png" width="410" alt="问候 + 名言"><br>
  <b>👋 问候 + 名言</b><br>
  <sub>时段问候（早 / 午 / 下午 / 晚 / 夜）+ 日期 + 每日轮播名言。</sub>
</td>
<td width="50%" valign="top">
  <img src="docs/img/module-vault-stats.png" width="410" alt="仓库统计"><br>
  <b>📊 仓库统计</b><br>
  <sub>笔记总数 / 画布数 / 本月修改 / 本周修改，4 张大数字卡。</sub>
</td>
</tr>
</table>

<div align="center">
  <img src="docs/img/module-quick-commands.png" width="600" alt="快捷命令"><br>
  <b>⚡ 快捷命令</b> · <sub>一键执行任意 Obsidian 命令的按钮行（如笔记同步、全局搜索、命令面板）。</sub>
</div>

---

## 🔌 插件级功能（不写代码块，设置里开关）

- **Ctrl + 滚轮缩放整个 UI** —— 补回 Obsidian 老版本的滚轮缩放（`Ctrl + 0` 复位）。仅桌面端。
- **番茄状态栏指示器** —— 底部状态栏一眼可见番茄进度，点击 = 开始 / 暂停 / 继续。仅桌面端。
- **阅读体验：图片对齐 + 页面行宽 + 去嵌入竖条** —— 可选图片对齐（左 / 中 / 右）+ 自定义行宽 + 去掉 `![[...]]` 嵌入笔记的左侧竖条（阅读视图 + 导出 PDF 同时生效）。默认零影响。
- **一键打开文档组** —— 右下角状态栏「📂 工具组」按钮点一下打开你预设的一组常用文档（各成标签页），快速恢复阅读布局；已打开的不重复开。设置里用文件选择器配置 + 排序。仅桌面端。

---

## 💰 付费说明（v1.0.0 起商业化）

**Payment Required — 7 天免费试用 + 一次买断终身使用**

| 项目 | 内容 |
|---|---|
| 💸 价格 | **¥39 一次买断**（不是订阅，永久有效，跨所有未来版本） |
| ⏳ 试用 | 装上后自动进入 **7 天免费试用**，全部功能解锁（首次启动联网注册一次试用，之后离线照常用） |
| 🔑 激活方式 | 收到 License Key 后，在「设置 → Homepage Modules → License」粘贴 Key 即可激活 |
| 💻 设备数 | 一个 Key **最多绑定 3 台设备**。换电脑前在旧设备点「解绑本设备」即可腾出名额 |
| 🌐 联网要求 | **试用首次启动 + 激活时各联网校验一次**（只传匿名设备标识 / Key，**不传任何笔记内容**）；之后**离线运行**，断网也有 3 天宽限 |
| 🔄 版本更新 | License 跨版本永久有效，未来插件更新无需重新付费 |

### 购买方式

**小红书联系作者**（搜「雪天鱼」/ 小红书号 `6289484655`）：

![小红书二维码](./MyXhs.jpg)

扫码或在小红书搜索「雪天鱼」私信，备注「homepage-modules license + 你的邮箱」。
作者收款后 24h 内将 License Key 发邮件给你。

---

## 🛡 隐私政策

本插件遵循 Obsidian「offline-first」原则，业务数据全程留在本地：

- ✅ **不上传任何笔记内容**：日记 / 待办 / 番茄 / 词汇等所有业务数据始终停留在你的 vault 内，绝不外传
- ✅ **不收集使用统计、不监控行为**
- ✅ **试用首次启动 + 激活时联网一次**：仅向授权服务器上传一个**匿名设备标识**（随机串，存本地、不随 vault 同步、不含任何个人信息）+ 激活时的 License Key，用于注册试用首次时间 / 校验授权和设备数上限（最多 3 台）；之后离线运行，**不再连接服务器**（断网另有 3 天宽限自动重试）
- ✅ **未激活时数据安全**：试用结束 / 未激活时插件不修改你 vault 里的任何 `Data/*.md` 文件，激活后所有数据原样回来

另一处可选网络请求是 **天气模块**调用和风天气 API 查询你配置的城市，这是模块功能必需，跟 License 验证无关。

---

## 📦 安装（通过 BRAT）

本插件未上架社区市场，用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装与自动更新：

1. 安装并启用社区插件 **BRAT**
2. BRAT 设置 → **Add Beta Plugin** → 填入本仓库：
   ```
   XueTianyu24/obsidian-homepage-modules
   ```
3. 启用 **Homepage Modules**

之后每次发布新版本，BRAT 会在所有设备上自动更新。

### 🔑 BRAT 提示 GitHub API rate limit 怎么办

BRAT 检查更新要调 GitHub 接口，**不登录时匿名限额只有 60 次/小时**（按 IP 算）。装的 beta 插件一多、或频繁点检查更新，就容易撞到 `GitHub API rate limit` 报错。配一个 GitHub **Personal Access Token（PAT）** 认证后，限额升到 **5000 次/小时**，基本一劳永逸：

1. 打开 GitHub → 右上头像 → **Settings → Developer settings → Personal access tokens**，生成一个 token（**Tokens (classic)** 或 **Fine-grained tokens** 都行）
2. **装公开插件无需任何权限**：classic token **不用勾选任何 scope**；fine-grained 选 **Public Repositories（read-only）** 即可。token 只用于认证身份、提高限额，不需要写权限
3. 建议设个**过期时间**（别选 No Expiration）；生成后**立刻复制**（离开页面就不再显示）
4. 回到 Obsidian → **设置 → BRAT → 填进「Personal Access Token」字段**，填完会自动校验有效性

> 💡 生成 token 时 GitHub 可能要求用 **密码 / 两步验证 / Passkey（通行密钥——指纹、面容或设备 PIN）** 再确认一次身份，这是它的安全步骤，按提示验证即可（不想用 Passkey 可点验证框里的「用其他方式验证」切回密码）。
>
> ⚠️ token 等同密码：**存进密码管理器、不要外泄、不要提交进任何仓库**。过期后限额会掉回 60，重新生成换上即可。

## ✨ 快速开始（推荐）

装好后，命令面板（Ctrl / Cmd + P）搜「**创建效率工具页面**」，或在 **设置 → Homepage Modules → 快速开始** 点「创建页面」：插件会在你 vault 的「效率工具」目录下，为日记 / 番茄 / 待办 / 背单词 / 自律 / 精神内核 / 天气 / 健身 / 项目日志各建一个**开箱即用**的页面 + 一张总览导航页。

- **可选、不自动执行**：只有你主动点才会创建，绝不擅自动你的 vault
- **不覆盖**：已存在的同名文件自动跳过
- 目录名可在设置里改。主页（仪表盘）继续放轻量小部件，这些重型工具走各自独立页面更好用

## 🚀 使用

在任意笔记里写一个代码块，语言写 `homepage`，第一行写模块 id：

````markdown
```homepage
diary
```
````

把多个模块拼成一张主页：桌面端点底部状态栏「🏠 主页」/ 移动端点左侧 ribbon /
命令「打开主页」，即可打开独立的主页标签页，铺满面板。首次打开可一键应用推荐布局；
编辑模式下 ↑↓ 调位置 / ▢▭ 切单列整行 / ⇕ 切跨行高度 / + 添加模块 / 切 1·2·3 列。

每个模块头部都有「📖 说明」按钮，点开即是该模块的完整用法。

### 模块 id 一览

| 模块 id | 名称 | 模块 id | 名称 |
|---|---|---|---|
| `home` | 主页（聚合） | `diary` | 日记记录 |
| `vocab` | 背单词 | `todo` | 待办看板 |
| `pomodoro` | 番茄专注 | `discipline` | 自律打卡 |
| `psyche` | 精神内核 | `weather` | 天气 |
| `gym` | 健身记录 | `project-log` | 项目日志 |
| `greeting` | 问候 + 名言 | `vault-stats` | 仓库统计 |
| `time-progress` | 时间进度 | `countdown` | 项目倒计时 |
| `pinned-notes` | 常用笔记 | `recent-files` | 最近修改 |
| `quick-commands` | 快捷命令 | `prompts` | 提示词库 |
| `principles` | 个人信条 | `deadlines` | 学术会议 / 期刊 DDL |

---

## 🔒 多设备同步保护

数据存 vault 内 `.md` 文件，可见、可 git、卸载后仍在。多设备同步（remotely-save 等）
场景下接入了「新设备保护门」：数据文件不存在且本会话未确认时，模块不渲染可编辑界面，
显示保护提示 + 「重新检查 / 全新开始」，避免新设备造冲突文件覆盖真实数据。

## 📱 平台

桌面端与移动端（iOS / Android）均可用。悬浮窗 / 状态栏 / 滚轮缩放等桌面专属功能
在移动端自动跳过、不影响其它模块加载。

---

作者：雪天鱼 · MIT License

> 注：文档中的截图为演示数据，安装后所有数据均来自你自己的 vault。
