---
title: "Astronomy Tutorial —— 深空摄影者的终身天文自学体系"
date: 2026-09-27
tags: ["Astronomy", "Astrophotography", "Reading List", "Chinese"]
categories: ["Astronomy note"]
description: "深空摄影者的终身天文自学体系：68 本书、11 个模块、严格排序的阅读路线与十年路线图。"
---

> 版本：2026-09 · 全库 **68 本** · **11 个模块** · 每模块内严格排序
> 配套：本目录下所有电子书已按要求重命名，命名格式 `module**_{p优先级}_{书名}_{作者}.{格式}`，
> 本教程全书所有引用均使用**新文件名**，可在目录里直接对号入座。

---

## 0. 先读这页：标记体系、命名规则与模块地图

### 0.1 标记体系

| 标记 | 含义 |
|---|---|
| **P0** | 最高优先。当前阶段最该啃的"地基/杠杆书"，决定你能不能跨阶段 |
| **P1** | 重要。一到三年内按序推进，是体系里承上启下的主干 |
| **P2** | 长期。按兴趣分支随时可读，或当作工具书/查阅层 |
| **通读** | 从封面读到最后 |
| **选读** | 只读指定章节，其余随时翻阅 |
| **工具书** | 不从头读，遇到问题翻对应章节 |
| **睡前读物** | 每晚几页，无负担 |

### 0.2 命名规则

每个人必须立刻理解这条规则：**文件名本身就是分类系统**。

```
module02_p1_Telescope Optics Evaluation and Design_Rutten Venrooij.pdf
│        │     │                                          │
│        │     └ 书名（英文保持原文/中文保持中文）          └ 作者
│        └ 优先级（p0/p1/p2）
└ 模块号（01–11，与下方"模块地图"一一对应）
```

文件排序（按文件名自然排序）＝ **按模块+优先级自动分组**。打开文件夹，
`module` 开头的文件天然排成 11 组，组内按优先级抱团。阅读顺序则以本教程为准。

### 0.3 模块地图（11 组，从"地基"到"塔尖"）

| 模块 | 主题 | 解决的什么问题 | 主干线 |
|---|---|---|---|
| **01** | 入门与全局图景 | 我先看什么？怎样建立全景 | 五线入口 |
| **02** | 望远镜光学与器材 | 这支镜子值不值？成像为什么这样？ | A |
| **03** | 成像采集与传感器 | 出好数据的链路是什么？ | A |
| **04** | 图像处理（算法+软件） | 每个处理按钮背后的数学是什么？ | A |
| **05** | 天文计算与位置天文 | 极轴、平场旋转、历算的底层逻辑 | 工具地基 |
| **06** | 星图、星表与深空档案 | 我该拍什么？这个天体有什么可说的？ | B |
| **07** | 天体物理 | 我拍到的这团气体在发生什么？ | C |
| **08** | Pro-Am 科研实践 | 做出一点真正有价值的东西 | E |
| **09** | 西方天文通史 | 人类是怎么一步步看懂这片天的 | D |
| **10** | 西方星名·神话·星图史 | 星座为什么叫这个名字？星图怎么画出来的 | D |
| **11** | 中国天学·考古·传统星空 | 中国星空传统与文明源头 | D |

---

## 1. 总纲：为什么这样排序 + 三阶段推进

### 1.1 排序哲学

这不是"按难度排"，而是按**你作为一个已经出片的深空摄影者，最缺什么、最需要什么**来排。

你的状态画像（据此定序）：

- **A 线（工程）**：有骨有肉，但缺"算法层"和"检验层" → **Module 02/03/04 是主战场**
- **B 线（档案）**：偏薄，缺系统的深空天体导览 → **Module 06 好好啃**
- **C 线（物理）**：只有大部头字典，缺"为什么窄带长这样"→ **Module 07 是该优先补的一块**
- **D 线（人文）**：强，但缺星图史与通史骨架 → **Module 09/10/11**，是终身项目
- **E 线（科研）**：几乎空白 → **Module 08**，第五年之后的主赛道

### 1.2 三阶段推进

**阶段一（1–2 年）｜工程补齐**
Module 02 + 03 + 04，穿插 Module 01 查漏、Module 05 工具入门。
标志性成果：能解释自己每张片子里每处缺陷的物理成因。

**阶段二（2–5 年）｜认知深化**
Module 06 档案系统推进 + Module 07 天体物理 + Module 01 泛览收尾。
穿插 Module 05 的 Meeus 当编程题库。标志性成果：不再依赖别人的处理流程/选目标逻辑。

**阶段三（5 年以后）｜Pro-Am 与人文收束**
Module 08 科研实践 与 Module 09/10/11 人文线并行推进。
标志性成果：产出一份可被后人使用的观测数据；做出一个"按中国传统星官系统拍摄全天"的十年项目。

### 1.3 关于语言与格式

本书库 **48 本英文 + 20 本中文**。英文书为主的大模块（02/03/04/07/08）建议：
第一次读就当技术阅读，别查词典，抓结构；重要公式与流程再精读。中文书集中在 Module 01/11 和 10，
阅读压力小，适合穿插当作"消遣型补给"。

---

## Module 01 入门与全局图景

> **模块任务**：你不缺实操经验，缺的是"全景"。这个模块帮你把碎片化的知识串成一张地图。
> 除第一本外都不是硬啃，当作茶余饭后的全景读物即可。

### 01-1 · `module01_p0_The Backyard Astronomers Guide 3ed_Dickinson Dyer.pdf`

**【P0 · 第一本必读 · 通读】**

- 作者：Terence Dickinson & Alan Dyer（3rd ed，2008）｜英文｜376 页
- **一句话定位**：当代业余天文最好的"全能手册"，选镜、观测、数字摄影一张网全兜住，是五条干线的共同入口。
- **为什么排第一**：它是全库唯一一本"先给你整张地图，再讲每条路"的书。先读它，后面的每本书都有了安放的位置。
- **怎么读**：通读一遍建立坐标系；之后章节当工具书翻。
- **注**：这是第 **3 版**，CMOS/窄带等 2010 年后内容较少，恰好由 Module 03 的 Woodhouse 补上。

> **与深空摄影的关系**：全书的数字成像章节讲"从好光到好数据再到好图"的完整链条，是 Legault/Woodhouse 之前最合适的铺垫。

### 01-2 · `module01_p1_Turn Left at Orion_Consolmagno Davis.pdf`

**【P1 · 目视入门经典 · 通读】**

- 作者：Consolmagno & Davis（5th ed，2019）｜英文｜257 页
- **一句话定位**：教你"用眼睛真的把东西找到"，从双筒到 8 寸镜按季度编排，天国巡礼级的经典。
- **为什么排这**：摄影党最容易缺"用眼亲见"的体验。这本书把天球坐标系、四季星空方位感练出来，对你选区、构图、判断视场大小是隐性加成。

### 01-3 · `module01_p2_诺顿星图手册_诺顿.pdf`

**【P2 · 第一张全天星图 · 工具书】**

- 作者：Norton / Ridgeway（中文版）｜中文｜235 页
- **一句话定位**：经典入门星图+参考手册，附全天主要天体、星等、双星与疏散团表。
- **为什么排这**：在系统推进 Module 06 之前，用这张图先认熟星座与银河走向。
- **注**：极限星等有限，深空摄影选目标最终要靠 Module 06 的星图与档案，这里定位是"认星座"。

### 01-4 · `module01_p2_The Backyard Stargazers Bible_Ridpath.epub`

**【P2 · 后院观星全书 · 睡前读物】**

- 作者：Ian Ridpath｜英文｜epub
- **一句话定位**：目前最新的"后院实操"观星全书，目标直接从后院与野外出发，附便携星图段。
- **为什么排这**：与 BYAG 部分重叠，作为轻便补充，适合旅途中读。

### 01-5 · `module01_p2_Patrick Moores Astronomy_Moore Seymour.epub`

**【P2 · 泛览层 · 通读】**

- 作者：Patrick Moore & Percy Seymour｜英文｜epub
- **一句话定位**：建立天文词汇与直觉的简明教科书，覆盖太阳系到宇宙学的全部主干。
- **为什么排这**：作为"术语清洗器"，看见不懂的天文学名词先来这找。

### 01-6 · `module01_p2_Philips Atlas of the Universe_Moore.pdf`

**【P2 · 宇宙地图册 · 图册翻阅】**

- 作者：Patrick Moore｜英文｜288 页
- **一句话定位**：图文并茂的宇宙"地图册"，从太阳系到星系团层层放大。
- **为什么排这**：图册型的全景，配合 01-5 一起建立尺度的直观。

### 01-7 · `module01_p2_Philips Encyclopedia of Astronomy_Moore.pdf`

**【P2 · 条目速查 · 工具书】**

- 作者：Patrick Moore｜英文｜465 页
- **一句话定位**：天文术语音典，按字母排。
- **为什么排这**：与 01-5 功能类似的速查层，遇到名词随手翻。

### 01-8 · `module01_p2_Patrick Moores Data Book of Astronomy_Moore Rees.pdf`

**【P2 · 数据手册 · 工具书】**

- 作者：Moore & Rees（2nd ed）｜英文｜588 页
- **一句话定位**：太阳系天体、恒星、星系的关键数据速查表，常翻不常读。
- **为什么排这**：规划拍摄计划时查目标参数用。

### 01-9 · `module01_p2_星空摄影笔记_阿五在路上.pdf`

**【P2 · 中文实操入门 · 阅读门槛为零】**

- 作者：阿五在路上｜中文｜351 页
- **一句话定位**：中文语境下的星野/深空摄影入门，直观展示"别人怎么拍、怎么处理"。
- **为什么排这**：作为英文教材的中文对照，卡壳时回流到这里找语感。

### 01-10 · `module01_p2_星野摄影第二版.pdf`

**【P2 · 中文实操参考】**

- 中文｜113 页扫描版
- **一句话定位**：星野（广角星空）方向的实操书，与上一本部分重叠，作中文口径的星野拍摄参考。
- **注**：扫描版 PDF、无文字层，用图片方式正常阅读即可。

---

## Module 02 望远镜光学与器材工程

> **模块任务**：从"会用"走到"会判断"。判断一支镜子值不值、理解每个像差从哪来、知道怎么自检。
> 排序逻辑：**先学会检验（Suiter）→ 再吃透原理（Rutten）→ 再武装选购（Star Ware）→ 理论深水区（Schroeder）→ 环境对策（Mizon）**。

### 02-1 · `module02_p0_Star Testing Astronomical Telescopes_Suiter.pdf`

**【P0 · 最大单点缺口 · 精读】**

- 作者：Harold R. Suiter｜英文｜383 页
- **一句话定位**：星点检验。判断一台镜子光学品质、共轴、像散、热平衡的唯一可操作方法。
- **为什么排第一**：你有"怎么设计"（Rutten），却缺"怎么检验"。Suiter 教你用一颗星、一张纸，辨识球差、彗差、离焦、镀膜、大口径热气流——这支镜子到底值不值，全在这里。
- **怎么读**：前几章建立判读直觉（强烈建议拿到镜子就做一次星点测试）；后半部理论选读。

> 与深空摄影的关系：星点检验直接决定你平场、缩焦、柯式镜各配置下的最优姿态；大视场深空片的星点肥瘦、拖线、去彗差是否到位，都能用它的方法判断。

### 02-2 · `module02_p1_Telescope Optics Evaluation and Design_Rutten Venrooij.pdf`

**【P1 · 光学设计圣经 · 精读】**

- 作者：Rutten & van Venrooij｜英文｜390 页
- **一句话定位**：把球差/色差/彗差/场曲/像散用光线追迹拆给你看，业余镜片设计的标准教材。
- **为什么排这**：Suiter 告诉你"是什么毛病"，Rutten 告诉你"为什么有这毛病、怎么从设计上消"。
- **怎么读**：第 1–7 章为光学基础与各种望远镜设计（折射/反射/施卡），与器材切身相关；追迹数学可跳过。

### 02-3 · `module02_p1_Star Ware_Harrington.pdf`

**【P1 · 器材选购实战 · 工具书】**

- 作者：Philip S. Harrington（4th ed）｜英文｜428 页
- **一句话定位**：选购望远镜与配件的实战百科，教你绕开宣传参数陷阱。
- **为什么排这**：读完 02-1/02-2 再买装备，你是带着"检验能力"去买，Star Ware 补足市场情报与配件坑点。

### 02-4 · `module02_p2_Astronomical Optics_Schroeder.pdf`

**【P2 · 理论深水区 · 选读】**

- 作者：Daniel J. Schroeder（2nd ed）｜英文｜495 页
- **一句话定位**：大学级光学理论：像差理论、衍射极限、镀膜、探测器耦合。
- **为什么排这**：想彻底打通光学再上这本，与 Module 07 的辐射物理有交叉。优先级不高，属"吃得透再读"。

### 02-5 · `module02_p2_Light Pollution Responses and Remedies_Mizon.pdf`

**【P2 · 环境对策 · 通读】**

- 作者：Bob Mizon（2nd ed）｜英文｜224 页
- **一句话定位**：光污染的物理、测量与对策（滤镜、选址、城市天文）。
- **为什么排这**：直接关系到你的窄带策略与出摊选址逻辑，读它顺便理解为什么 Hα/OIII/SII 能在城市活下来。

---

## Module 03 成像采集与传感器

> **模块任务**：把"选型 → 装配 → 采集 → 定标 → 处理 → 故障诊断"串成一条可复现的完整链路。
> 排序逻辑：**先读整链路手册（Woodhouse）→ 深挖传感器物理（Howell）→ 实拍高手通识（Legault）→ 经典思路（Covington）→ 目标排期（Kier）**。

### 03-1 · `module03_p0_The Astrophotography Manual 3ed_Woodhouse.pdf`

**【P0 · 整链路手册 · 第一优先】**

- 作者：Chris Woodhouse（**3rd ed**，比书单标注的 2 版更新）｜英文｜643 页
- **一句话定位**：以系统工程视角写深空摄影全流程：选型 → 装配 → 对焦 → 采集 → 定标 → 处理 → 故障诊断。
- **为什么排第一**：全库最缺的是"整链路视角"，这本就是。且 3 版已完全覆盖现代 CMOS + 窄带 + NINA 生态，正好补上 BYAG 3 版的时代差。
- **怎么读**：通读一遍建立流水线，之后当"故障手册"按症状回查。

> 与深空摄影的关系：它把每个环节的"为什么"写在流程旁边（为什么平场要过冲遍历、为什么要 dither、为什么暗场匹配温度/时长）。这是从"参数党"走向"链路工程师"的书。

### 03-2 · `module03_p1_Handbook of CCD Astronomy_Howell.pdf`

**【P1 · 传感器专业桥 · 精读】**

- 作者：Steve B. Howell（2nd ed，Cambridge Observing Handbooks）｜英文｜224 页
- **一句话定位**：专业级传感器物理与定标：线性度、增益、读出噪声、CTE、CCD/CMOS 异同，孔径测光前置知识。
- **为什么排这**：Woodhouse 教"怎么操作"，Howell 教"传感器到底怎么工作的"，是 E 线（测光）的地基，也是你理解暗场/平场为何必要的理论源头。

### 03-3 · `module03_p1_Astrophotography_Legault.pdf`

**【P1 · 实拍高手通识 · 通读】**

- 作者：Thierry Legault｜英文｜241 页
- **一句话定位**：法国顶级行星/深空摄影师的高水准综合手册，含行星高帧率叠加、深空、目视与器材。
- **为什么排这**：与 Woodhouse 互补——Legault 的深空章节是"一个老手的直觉版操作手册"，行星章节则是你还没解锁的技能树。

### 03-4 · `module03_p2_Digital SLR Astrophotography_Covington.pdf`

**【P2 · 经典思路 · 通读】**

- 作者：Michael A. Covington（Practical Amateur Astronomy 系列）｜英文｜357 页
- **一句话定位**：DSLR 深空摄影的经典教科书，思路比软件版本更耐用。
- **为什么排这**：核心技术（偏置暗场平场、感光曲线、食谱式操作）放在今天依然成立，作思路考古。

### 03-5 · `module03_p2_The 100 Best Astrophotography Targets_Kier.pdf`

**【P2 · 目标册/排期 · 工具书】**

- 作者：Ruben Kier（Springer Patrick Moore 系列）｜英文｜363 页
- **一句话定位**：按月份排的 100 个 CCD 深空目标，含拍摄参数与构图建议。
- **为什么排这**：是 Module 03 与 Module 06 的交汇点——采集参数层归这，目标档案层归 06。每月出摊前翻当月章节。

---

## Module 04 图像处理：算法与软件

> **模块任务**：把你从"调参层"拽到"懂原理层"。PixInsight 里的每个按钮背后都有数学，这套书把它补完。
> 排序逻辑：**先补数学地基（Smith 的 DSP）→ 再上天文图像处理圣经（Berry）→ 通用教科书兜底（Sundararajan）→ 软件层实操（PixInsight）→ 大师思路（Masters）**。
> 注：PixInsight 手册可在任何时刻并行当工具书用，不必等读到它才开 PI。

### 04-1 · `module04_p1_The Scientist and Engineers Guide to DSP_Smith.pdf`

**【P1 · 数学地基 · 精读（先读）】**

- 作者：Steven W. Smith（2nd ed）｜英文｜664 页
- **一句话定位**：傅里叶变换、滤波器、卷积的"最好白话教材"，面向科学家/工程师不对式子和公式绕弯。
- **为什么排第一**：读 Berry 前需要卷积、FFT 的直觉。Smith 成书于免费分享（dspguide.com），排版复古但讲透原理。
- **怎么读**：重点卷尾"应用方向"（图像处理、线性系统）前几章，卷积与 FFT 必读，其余可跳。

### 04-2 · `module04_p0_Handbook of Astronomical Image Processing_Berry Burnell.pdf`

**【P0 · 最大盲区 · 精读】**

- 作者：Richard Berry & James Burnell（2nd ed）｜英文｜656 页
- **一句话定位**：卷积/反卷积、FFT、小波、配准、叠加统计（σ-clip、平均 vs 中值）的完整数学推导——PixInsight 每个按钮背后的东西都在这本书里。
- **为什么排这**：你书单里"最大的盲区"就是算法层。缺了它，你永远停在"按大神参数"的层面。
- **怎么读**：第 1–6 章（图像本质、噪声、卷积、FFT、叠加）为主要战场；反卷积与 DDP 按兴趣。

> 与深空摄影的关系：为什么用 σ-clip 而不是平均？为什么 Wiener 反卷积会造伪影？为什么星点去卷积和月球叠加的火星用不同策略？读完这本书，你不再"哪个参数好用哪个"，而能判断"该不该做这一步"。

### 04-3 · `module04_p2_Digital Image Processing 2ed_Sundararajan.pdf`

**【P2 · 通用教科书 · 选读】**

- 作者：D. Sundararajan（2nd ed，原文件名带"(Unknown)"）｜英文｜541 页
- **一句话定位**：通用数字图像处理教科书，把天文在册算法外的通用手段（增强、分割、编码）补全。
- **为什么排这**：想把算法吃到底再上，与 Berry 互补而不重复。

### 04-4 · `module04_p1_Inside PixInsight 2ed_Keller.pdf`

**【P1 · 软件实操层 · 工具书/并行】**

- 作者：Warren A. Keller（2nd ed）｜英文｜432 页
- **一句话定位**：PixInsight 当前版本的完整流程手册，从界面到工作流到校准到发布。
- **为什么排这**：读 Berry 建立"为什么"，用这本书练"怎么做"；两者必须在同一时期推进才不脱节。

### 04-5 · `module04_p1_Lessons from the Masters_Gendler.mobi`

**【P1 · 大师思路 · 通读】**

- 作者：Robert Gendler（编，Springer Patrick Moore 系列）｜英文｜mobi
- **一句话定位**：Gendler、Croman、Ligustri 等顶级深空摄影师逐张片讲述完整处理思路。
- **为什么排这**：从"能出片"到"有个人风格"的桥梁，处理技法之外的审美与叙事。

---

## Module 05 天文计算与位置天文

> **模块任务**：极轴校准、平场旋转、plate solving、赤道仪建模、周期误差、蒙气差、儒略日——你每晚都用，现在补齐原理。
> 排序逻辑：**轻量入门（Duffett-Smith）→ 标准算法（Meeus）→ 严谨理论（Smart/Green）**。

### 05-1 · `module05_p1_Practical Astronomy with your Calculator or Spreadsheet_Duffett Smith Zwart.pdf`

**【P1 · 计算入门 · 通读/动手】**

- 作者：Duffett-Smith & Zwart（4th ed）｜英文｜239 页
- **一句话定位**：用计算器/电子表格就能做的历算题典，蒙气差、时辰、坐标换算每题配公式与算例。
- **为什么排第一**：门槛最低，把"我能自己算算出星时间/方位角/星等"的成就感先建立起来。

### 05-2 · `module05_p0_Astronomical Algorithms_Meeus.pdf`

**【P0 · 计算标准 · 工具书+编程题库】**

- 作者：Jean Meeus（2nd ed，1998）｜英文｜489 页
- **一句话定位**：业余天文计算的行业标准：坐标变换、岁差章动、恒星时、升落、蒙气差、历法、日月食。
- **为什么排这**：既是工具书，又是 **Python + Astropy 自写小工具的最佳题库**（把 Meeus 公式搬进代码，是打通 Module 08 数据科学的隐秘捷径）。
- **怎么读**：不做全案——需要哪块查哪块；想练编程就从最基础的儒略日、恒星时开始。

### 05-3 · `module05_p2_Textbook on Spherical Astronomy_Smart Green.pdf`

**【P2 · 严谨理论 · 选读】**

- 作者：W. M. Smart 原著，Robin M. Green 修订（书单只署名 Green 属不完整信息）｜英文｜443 页
- **一句话定位**：球面天文的严谨教材：参考系、时间系统、视差与自行的严格推导。
- **为什么排这**：建立了直觉与算法之后，想"彻底弄清参考系与时间"再上。

---

## Module 06 星图、星表与深空天体档案

> **模块任务**：建立属于你的"该拍什么"的体系。摄影党常犯的错是目标靠公众号推荐，这套书把你变成"自己会从星表里挖目标"的人。
> 排序逻辑：**星图打底（Pocket Sky Atlas）→ 梅西耶系统入门（O'Meara）→ 南北天区挑战层层递进 → 重量级档案（Kepple/Burnham）→ 长期挑战清单（Cosmic Challenge）**。

### 06-1 · `module06_p2_Sky and Telescopes Pocket Sky Atlas_Sinnott.pdf`

**【P2 · 野外星图 · 随手翻】**

- 作者：Roger W. Sinnott（Sky & Telescope）｜英文｜125 页
- **一句话定位**：口袋全天星图，便携、墨色温和，野外核对目标位置首选。
- **为什么排第一**：先有"去哪儿找"的图，才谈得上"拍下它"。

### 06-2 · `module06_p1_Deep Sky Companions Messier Objects_OMeara.pdf`

**【P1 · 梅西耶系统 · 通读】**

- 作者：Stephen James O'Meara（Deep-Sky Companions 系列）｜英文｜163 页
- **一句话定位**：110 个梅西耶天体的观测细节+史料考证+拍摄要点，当代最好的梅西耶导览写法。
- **为什么排这**：梅西耶是你已经拍过的主体，用它把"档案-观测-史料"三位一体的读法建立起来。

### 06-3 · `module06_p1_Deep Sky Companions Hidden Treasures_OMeara.pdf`

**【P1 · 北半球进阶档案 · 通读】**

- 作者：S. J. O'Meara｜英文｜603 页
- **一句话定位**：110 个"隐藏珍宝"——避开大众目标，专挖被忽略但值得拍的北半球天体。
- **为什么排这**：梅西耶体系建立读法后，这本提供十年不重复的目标源。

### 06-4 · `module06_p1_Deep Sky Companions Caldwell Objects_OMeara.pdf`

**【P1 · 考德威尔档案 · 通读】**

- 作者：S. J. O'Meara｜英文｜584 页
- **一句话定位**：Caldwell 目录 109 目标，是 Messier 的"扩展包"，覆盖梅西耶漏下的南天与银河深处。
- **为什么排这**：与 06-2/06-3 形成完整档案链，南天目标转场时尤其有用。

### 06-5 · `module06_p1_Deep Sky Companions Secret Deep_OMeara.pdf`

**【P1 · 全天最暗角落 · 通读】**

- 作者：S. J. O'Meara｜英文｜498 页
- **一句话定位**：汇编最不为人知、最暗弱且最有拍摄价值的一组天体。
- **为什么排这**：当你把明亮目标拍尽，这本是继续挑战的矿脉。

### 06-6 · `module06_p1_Deep Sky Companions Southern Gems_OMeara.pdf`

**【P1 · 南天珍宝 · 通读（北半球可后移）】**

- 作者：S. J. O'Meara｜英文｜482 页
- **一句话定位**：南天不可见的宝石天体档案，文字与史料分量足。
- **为什么排这**：若你主要在北纬观测，可放到旅行/观念补全时读；它同时是这套系列的语言收束。

### 06-7 · `module06_p1_Night Sky Observers Guide_Kepple Sanner.pdf`

**【P1 · 多口径观测档案 · 工具书/按星座查】**

- 作者：Kepple & Sanner（Willmann-Bell）｜英文｜520 页
- **一句话定位**：按星座编排、按不同口径（4/8/12/16 寸）标注目视特征的档案巨著，每目标附星图与描述。
- **为什么排这**：O'Meara 讲"一个很棒的天体"，这本讲"这个星座里所有值得看的天体按口径的观感"，是规划一夜拍摄清单的终极工具。

### 06-8 · `module06_p2_Burnhams Celestial Handbook Vol. 1_Burnham.djvu`（Vol. 2 / Vol. 3 相同说明）

**【P2 · 史诗档案+史料 · 睡前/选读】**

- 作者：Robert Burnham Jr.（Dover，3 卷）｜英文｜djvu
- **一句话定位**：一代美国舰船航标巡天员写的深空档案文学，文字极有感染力。
- **注**：**数据停留在 1970 年代**——把它当史料与文学读，当参考参数表用必须与现代数据库（SIMBAD/NED）复核。

### 06-9 · `module06_p2_Cosmic Challenge_Harrington.pdf`

**【P2 · 长期挑战清单 · 按图索引】**

- 作者：Philip S. Harrington｜英文｜483 页
- **一句话定位**：按口径分级的"挑战名单"，从双筒到 14 寸分 500+ 目标，十年不重样的目标源。
- **为什么排这**：当 O'Meara 与 Kepple 都翻完，挑战名单保证你永远有"下一个目标"。

---

## Module 07 天体物理：理解你拍的是什么

> **模块任务**：从"拍得好看"到"看懂它"。这条线把 Hα/OIII/SII 的物理、星系形态的来由、星际介质的浪漫讲清楚。
> 排序逻辑：**先快速建立主线（Nutshell）→ 重点啃发射线物理（Osterbrock，窄带核心）→ 星系专题（Sparke）→ 深水区（Draine）→ 大部头当字典（BOB）**。

### 07-1 · `module07_p1_Astrophysics in a Nutshell 1ed_Maoz.pdf`

**【P1 · 主线总览 · 通读】**

- 作者：Dan Maoz（**1st ed，2007**）｜英文｜264 页
- **一句话定位**：200 页讲清天体物理全部主干（辐射、恒星、致密天体、星系、宇宙学），是 BOB 的"清爽替代"。
- **为什么排第一**：先有骨架再谈细节，这本 10 天读完给你一张天体物理学地图。

### 07-2 · `module07_p0_Astrophysics of Gaseous Nebulae and AGN_Osterbrock Ferland.pdf`

**【P0 · 深空摄影者最该读而几乎没人读的一本 · 选读前 4 章】**

- 作者：Osterbrock & Ferland（2nd ed）｜英文｜488 页
- **一句话定位**：发射线天体物理标准教材：禁线、电离平衡、加热/冷却、电离前沿——Hα/OIII/SII 的物理源头。
- **为什么排这**：**你拍的正是这些气体的照片**。为什么 HII 区 Hα 红？为什么行星状星云的 OIII 蓝？为什么窄带每个波段"画"出的是不同物理层？前 4 章给全答案。
- **怎么读**：只读第 1–4 章（Introduction / Ionized gases / Nebular emission / AGN 概述），剩下的按需查。

### 07-3 · `module07_p1_Galaxies in the Universe_Sparke Gallagher.pdf`

**【P1 · 星系专题 · 通读/选读】**

- 作者：Sparke & Gallagher（2nd ed）｜英文｜443 页
- **一句话定位**：星系形态、旋臂、棒、并合、潮汐尾的权威入门，你拍的每一个星系的"解释书"。
- **为什么排这**：M51 的旋臂为什么长那样、相互作用星系为什么拉丝——这本给你因果。

### 07-4 · `module07_p2_Physics of the Interstellar Medium_Draine.pdf`

**【P2 · 星际介质权威 · 选读】**

- 作者：Bruce T. Draine｜英文｜567 页
- **一句话定位**：尘埃、消光、热电离介质、分子云的终极大部头。
- **为什么排这**：理解暗星云为什么"黑"、反射星云为什么"蓝"、消光曲线如何塑造你的颜色校准。深水区，按需下潜。

### 07-5 · `module07_p2_Introduction to Modern Astrophysics 2ed_Carroll Ostlie.pdf`

**【P2 · 十年字典 · 绝不通读】**

- 作者：Carroll & Ostlie（2nd ed，业内俗称 BOB）｜英文｜1479 页
- **一句话定位**：覆盖全部主干的大学生教科书，当字典用。
- **推荐章节（按需查）**：
  - Ch.3 连续谱辐射 / Ch.5 光与物质相互作用 → 测光与滤镜的物理底座
  - Ch.9 恒星大气 / Ch.10 恒星内部 → 恒星颜色与光谱型
  - Ch.12 星际介质与恒星形成 → **深空摄影者的核心章节**
  - Ch.24–26 星系 → 形态分类与并合
  - Ch.27–29 宇宙学 → 红移与深场

---

## Module 08 Pro-Am 科研实践

> **模块任务**：让爱好五年后不腻的那条无限高路线。变星测光、小行星光变、系外行星凌星、超新星巡天、业余光谱——你现有的赤道仪与相机已经够用。
> 排序逻辑：**官方最短路径（AAVSO）→ 实操圣经（Warner）→ 理论加深（Henden）→ 光谱分支（Trypsteen）→ 数据科学（Ivezić）**。

### 08-1 · `module08_p0_AAVSO Guide_AAVSO.pdf`

**【P0 · 官方入门最短路径 · 通读】**

- 作者：AAVSO｜英文｜66 页
- **一句话定位**：美帝变星观测协会官方教程：从曝光选择、孔径测光到提交数据，一条龙奔向"能提交"。
- **为什么排第一**：66 页的门槛，让你最快亲手产出一条能进 AAVSO 数据库的光变曲线。

### 08-2 · `module08_p0_A Practical Guide to Lightcurve Photometry_Warner.pdf`

**【P0 · 业余测光实操圣经 · 精读】**

- 作者：Brian D. Warner（2nd ed）｜英文｜418 页
- **一句话定位**：从定标、星表参考星、孔径测光、光变曲线建模到投稿的完整工程手册（MPO Canopus 是作者自己的软件）。
- **为什么排这**：AAVSO 入门后的"工程化"书，教你把一条曲线做扎实、做可信。

### 08-3 · `module08_p1_Astronomical Photometry_Henden Kaitchuck.pdf`

**【P1 · 测光理论基础 · 选读】**

- 作者：Henden & Kaitchuck｜英文｜410 页
- **一句话定位**：测光系统（UBVRI）、大气消光改正、标准星转换——把 08-1/08-2 里"照抄"的步骤讲成道理。
- **为什么排这**：当你想知道"为什么必做消光改正、标准星为什么常翻不动"时来读。

### 08-4 · `module08_p1_Spectroscopy for Amateur Astronomers_Trypsteen Walker.pdf`

**【P1 · 业余光谱 · 通读/选读】**

- 作者：Trypsteen & Walker（Springer）｜英文｜165 页
- **一句话定位**：光谱的记录、处理、分析与解读，从衍射光栅到星云/恒星光谱的分类。
- **为什么排这**：测光线做稳后的第二条 Pro-Am 支线，与 Module 07 的发射线物理直接呼应。

### 08-5 · `module08_p2_Statistics Data Mining and ML in Astronomy_Ivezic.pdf`

**【P2 · 数据科学天花板 · 按需/编程用】**

- 作者：Ivezić, Connolly, VanderPlas, Gray（Princeton）｜英文｜551 页
- **一句话定位**：天文学数据科学实战教材（配 Python），从统计基础到机器学习，覆盖真实天文数据问题。
- **为什么排这**：若你走上数据/编程分支（与 Module 05 的 Meeus 编程交叉发力），这是天花板级字典。

---

## Module 09 西方天文通史与思想史

> **模块任务**：D 线补"通史骨架"：知道人类如何在观念上一步步走进现代宇宙。
> 排序逻辑：**现代学术通史（Hoskin）→ 古典宇宙论经典（Dreyer）→ 近现代宇宙图景史（Natarajan）**。

### 09-1 · `module09_p0_The Cambridge Concise History of Astronomy_Hoskin.pdf`

**【P0 · 通史骨架 · 通读】**

- 作者：Michael Hoskin（ed.）｜英文｜388 页
- **一句话定位**：从史前到 20 世纪的天文学史，学界为天文爱好者写的最高性价比通史。
- **为什么排第一**：先有一个完整的故事，之后 Module 10 的星图史与 Module 11 的中国天学才有挂靠的框架。

### 09-2 · `module09_p2_A History of Astronomy from Thales to Kepler_Dreyer.pdf`

**【P2 · 古典宇宙论经典 · 选读】**

- 作者：J. L. E. Dreyer（2nd ed）｜英文｜468 页
- **一句话定位**：从泰勒斯到开普勒的古代宇宙论演化，公版书里的经典，史料工作扎实。
- **为什么排这**：读 Hoskin 后再进古籍原典，体验"从原文看历史"。

### 09-3 · `module09_p2_Mapping the Heavens_Natarajan.pdf`

**【P2 · 现代宇宙图景史 · 通读】**

- 作者：Priyamvada Natarajan｜英文｜261 页
- **一句话定位**：从哥白尼到暗能量，宇宙图景六个关键转折点（扁平宇宙、黄道带、暴胀、暗物质暗能量……）的口述式史。
- **为什么排这**：Hoskin 讲到 20 世纪即收，这本接着讲"现代宇宙学如何在图景层面重构"，与 Module 07 宇宙学章节呼应。
- **注**：与 Whitfield《The Mapping of the Heavens》（Module 10 古典星图册）是两本**不同的书**，注意区分。

---

## Module 10 西方星名、神话与星图史

> **模块任务**：名字从哪里来、神话怎么讲、星图作为一种艺术品怎么演化。
> 排序逻辑：**先溯源星座（星空故事）→ 星图史主线（Kanas）→ 古典图版（Whitfield）→ 神话纵览（Staal）与天文考古（Krupp）**。

### 10-1 · `module10_p0_星座的故事_里德帕思.epub`

**【P0 · 星座溯源权威 · 睡前读物】**

- 作者：Ian Ridpath（《Star Tales》中译）｜中文｜epub
- **一句话定位**：现代最权威的 88 星座溯源，逐星座讲来历、星名与文化，原文考订严谨。
- **为什么排第一**：是 D 线的"根目录"；把它当睡前读物，一年读完，星座在你眼里从此有身世。

### 10-2 · `module10_p0_Star Maps History Artistry and Cartography_Kanas.pdf`

**【P0 · 星图史主线 · 通读】**

- 作者：Nick Kanas（**3rd ed**，2019）｜英文｜599 页
- **一句话定位**：星图作为图像与印刷品的演化史：拜耳、赫维留、弗拉姆斯蒂德的谱系、符号系统与艺术史全部在这里，D 线最大的补缺。
- **为什么排这**：你之前全是"文字史"，缺"图像史"。这本是你后续收藏古典星图原本（以及与中国星图对照）的坐标系。

### 10-3 · `module10_p1_The Mapping of the Heavens_Whitfield.pdf`

**【P1 · 古典图版 · 翻阅】**

- 作者：Peter Whitfield｜英文｜152 页
- **一句话定位**：西方古典星图册，图版精美且印刷质高，与 Kanas 互补（偏"看图"）。
- **为什么排这**：Kanas 讲"谱系"，这本讲"美"；两者是同一块地的理论版与画册版。

### 10-4 · `module10_p1_New Patterns in the Sky_Staal.pdf`

**【P1 · 神话纵览 · 睡前/选读】**

- 作者：Julius D. W. Staal｜英文｜316 页
- **一句话定位**：世界各地的恒星神话，兼收埃及与两河对照，文学呈现而非考订。
- **为什么排这**：Ridpath 给的是"事实"，Staal 给的是"故事"，合起来才完整。

### 10-5 · `module10_p1_Echoes of the Ancient Skies_Krupp.pdf`

**【P1 · 天文考古通识 · 通读/选读】**

- 作者：E. C. Krupp｜英文｜420 页
- **一句话定位**：天文考古集大成——巨石阵、玛雅、巴比伦、埃及，古人如何把神圣写进天空。
- **为什么排这**：连接 Module 10（西方）与 Module 11（中国的考古线），让你看中国话题时已有全球参照。

---

## Module 11 中国天学、天文考古与传统星空

> **模块任务**：你手上"史观"材料强（江晓原/冯时），但缺通史主干与实证（星表/星图）。这个模块把它补齐成一个闭环。
> 排序逻辑：**社会史逻辑（天学真原）→ 通史主干（陈遵妫）→ 中西比较（天学外史）→ 考古核心（冯时）→ 实证两翼（潘鼐星表/图录）→ 今用对照（漫步中国星空）→ 理论/背景/记诵（万年中国/文明论/步天歌研究）**。

### 11-1 · `module11_p0_天学真原_江晓原.epub`

**【P0 · 天学社会史 · 通读】**

- 作者：江晓原｜中文｜epub
- **一句话定位**：中国天学的社会史逻辑：为什么天象观测在中国被垄断于皇权与星占，天学如何嵌入政治。
- **为什么排第一**：先理解"中国天学为什么长这样"，后面所有星表、星图、考古才有语境。

### 11-2 · `module11_p0_中国天文学史上_陈遵妫.pdf` / `module11_p0_中国天文学史下_陈遵妫.pdf`

**【P0 · 通史主干 · 按章节精读】**

- 作者：陈遵妫｜中文｜上 662 页 / 下 831 页
- **一句话定位**：中文世界最完整的中国天文学通史——历法、恒星观测、天文仪器、天象记录、中西交流的全景。
- **为什么排这**：冯时与江晓原是"专题"，这本才是"主干"。上卷推进后自然衔接下卷。
- **怎么读**：先读"历法沿革"与"恒星观测"两大章支撑全体系，仪器与记录章可作史料库随查。

### 11-3 · `module11_p1_天学外史_江晓原.epub`

**【P1 · 中西比较姊妹篇 · 通读】**

- 作者：江晓原｜中文｜epub
- **一句话定位**：《天学真原》的姊妹篇，以中西对比视角讲天学在文化中的位置。
- **为什么排这**：读完真原读外史，把中国天学的"另类性"放进世界光谱里。

### 11-4 · `module11_p1_中国天文考古学五卷_冯时.pdf`

**【P1 · 考古维度核心 · 选读/按册推进】**

- 作者：冯时（五卷套装）｜中文｜3303 页
- **一句话定位**：《中国天文考古学》《中国古代的天文与人文》《文明以止》《百年来甲骨文天文历法研究》《中国古文字学概论》——从天文印证上古文明。
- **为什么排这**：这是你"天文考古"的硬核库。五卷较大，建议先把《中国天文考古学》主体读完，其余作专题查询。

### 11-5 · `module11_p1_中国恒星观测史_潘鼐.pdf`

**【P1 · 星表实证史 · 选读/查询】**

- 作者：潘鼐｜中文｜780 页
- **一句话定位**：中国星表与恒星测量的实证史，从石申夫到明清，系统考证星名与坐标。
- **为什么排这**：与 11-6 图录、11-7 现代对照形成"理论-星表-星图-今用"闭环的一环。

### 11-6 · `module11_p1_中国古天文图录_潘鼐.pdf`

**【P1 · 中国星图图版集 · 翻阅】**

- 作者：潘鼐｜中文｜379 页
- **一句话定位**：中国古星图图版的大部头影印集，对应西方的 Kanas。
- **为什么排这**：补上"图"这一维——你即将策划的"按传统星官拍全天"项目，需要它的影像底本。

### 11-7 · `module11_p1_漫步中国星空_齐锐万昊宜.pdf`

**【P1 · 今用对照 · 工具书/实操】**

- 作者：齐锐、万昊宜｜中文｜243 页
- **一句话定位**：三垣二十八宿与现代国际星座的一对一对照，出摊对星的好工具，也是 D 线与 B 线的交汇点。
- **为什么排这**：它是把考古/史料落到"今晚天顶那颗星的古名"的唯一实用书，也承接 Module 06 的"该看什么"。

### 11-8 · `module11_p2_万年中国_冯时.pdf`

**【P2 · 文明起源背景 · 通读/选读】**

- 作者：冯时 等、北京联合/天略出版社编｜中文｜320 页
- **一句话定位**：通过天文体系论证中华文明起源与形成的大背景书。
- **为什么排这**：把 11-4 的考古硬核放到文明史叙事的更大画布上。

### 11-9 · `module11_p2_文明论_冯时.mobi`

**【P2 · 理论框架 · 通读】**

- 作者：冯时｜中文｜mobi
- **一句话定位**：冯时关于"文明"的定义与理论框架（人文与天文互证的哲学面）。
- **为什么排这**：当你想追问"天文考古的意义是什么"时来读，是 11-4 的形而上班。

### 11-10 · `module11_p2_步天歌研究_周晓陆.pdf`

**【P2 · 记诵体系源流 · 选读】**

- 作者：周晓陆｜中文｜356 页
- **一句话定位**：中国星官记诵体系《步天歌》的版本、源流与考证研究。
- **为什么排这**：它解释了"古人怎么背下全天星官"——你的"传统星官拍全天"项目的文化方法论。

---

## 附录 A 场景速查索引

> 按"我正在遇到什么问题"而非"我该读哪一本"查。

| 场景 | 翻开哪本 |
|---|---|
| 想判断一支镜子/自测光学质量 | `module02_p0` Suiter 星点检验 |
| 想理解 PI 每个按钮背后的数学 | `module04_p0` Berry & Burnell → `module04_p1` Smith（前几章） |
| 想练 PI 具体流程 | `module04_p1` Inside PixInsight |
| 从能出片到有自己的风格 | `module04_p1` Lessons from the Masters |
| 想搭/诊断一套深空采集系统 | `module03_p0` Woodhouse |
| 想懂传感器与定标（暗场/平场/增益） | `module03_p1` Howell |
| 想算极轴/坐标/时间/历算或练 Python | `module05_p1` Duffett-Smith → `module05_p0` Meeus |
| 今晚拍什么（按月排期） | `module03_p2` Kier（按月）→ `module06_p2` Cosmic Challenge |
| 想深挖一个目标的所有档案 | `module06_p1` O'Meara 系列 + `module06_p1` Kepple |
| 想知道"这团气体为什么这个颜色" | `module07_p0` Osterbrock 前 4 章 |
| 想查一个星系为什么长这样 | `module07_p1` Sparke |
| 想入变星测光 | `module08_p0` AAVSO → `module08_p0` Warner |
| 睡前想读点好玩的 | `module10_p0` 星座的故事 ／ `module06_p2` Burnham ／ `module10_p1` Staal |
| 想对照今晚的传统星官名 | `module11_p1` 漫步中国星空 |
| 想欣赏古典星图 | `module10_p0` Kanas → `module10_p1` Whitfield → `module11_p1` 中国古天文图录 |
| 想系统了解中国天学 | `module11_p0` 天学真原 → `module11_p0` 中国天文学史 |

---

## 附录 B 十年路线图

> 与模块内"阅读顺序"的区别：这里是**按年份排的任务主线**，模块内顺序是"同一时间开口袋先拿哪一本"。

**第 1 年｜把工程地基打实（阶段一）**
- Module 03-1 Woodhouse（整链路）→ Module 02-1 Suiter（星点检验）→ Module 04-1 Smith（DSP 入门）→ Module 04-2 Berry（算法层）。
- 穿插：Module 01-1 BYAG 全景 / Module 10-1 星座的故事（睡前）。
- 目标：能解释自己每张片子里每一处缺陷的物理成因。

**第 2–3 年｜打通算法与计算（阶段一试水收尾）**
- Module 05-2 Meeus（当编程题库）+ Python/Astropy 自写小工具。
- Module 04-4 Inside PixInsight（工具书推进）→ Module 04-5 Masters。
- Module 07-1 Nutshell → Module 07-2 Osterbrock 前 4 章。
- 目标：不再依赖"大神的处理流程"，能判断一个步骤该不该做。

**第 3–5 年｜深化认知与选题（阶段二）**
- Module 06 档案系列按"先 Messier 后进阶"推进；Module 07-3 星系。
- BOB（Module 07-5）按推荐章节查（见 07-5）。
- Module 05-3 Smart/Green 追参考系与时间。
- 目标：建立起自己的目标库与"今晚拍什么"的判断力。

**第 5–8 年｜开辟 Pro-Am 分支（阶段三上）**
- Module 08-1 AAVSO → Module 08-2 Warner → 完成第一条真光变曲线并尝试向 AAVSO 提交。
- 之后按兴趣转向：光谱（Module 08-4）或时域巡天。
- 目标：产出至少一份可被他人使用的观测数据。

**第 8 年以后｜人文线收束（阶段三下）**
- Module 09/10/11 系统推进（陈遵妫通史 → 潘鼐星表/图录 → Kanas 星图史 → 古典星图原本）。
- 长期项目建议：**按中国传统星官体系系统地拍摄一遍全天**，把冯时、齐锐、潘鼐、伊世同的材料与自己的影像对上——一件几乎没人做完、且可以做十年的终身题目。

---

## 附录 C 全库文件总表

> 排序即文件名排序（=模块内自动分组）。页数为核验时读取的 PDF 页数，仅供参考。

| # | 模块 | 文件名 | 格式 | 语言 | 页数 | 优先级 |
|---|---|---|---|---|---|---|
| 1 | 01 | module01_p0_The Backyard Astronomers Guide 3ed_Dickinson Dyer.pdf | pdf | EN | 376 | P0 |
| 2 | 01 | module01_p1_Turn Left at Orion_Consolmagno Davis.pdf | pdf | EN | 257 | P1 |
| 3 | 01 | module01_p2_诺顿星图手册_诺顿.pdf | pdf | CN | 235 | P2 |
| 4 | 01 | module01_p2_星空摄影笔记_阿五在路上.pdf | pdf | CN | 351 | P2 |
| 5 | 01 | module01_p2_Patrick Moores Astronomy_Moore Seymour.epub | epub | EN | — | P2 |
| 6 | 01 | module01_p2_Patrick Moores Data Book of Astronomy_Moore Rees.pdf | pdf | EN | 588 | P2 |
| 7 | 01 | module01_p2_Philips Atlas of the Universe_Moore.pdf | pdf | EN | 288 | P2 |
| 8 | 01 | module01_p2_Philips Encyclopedia of Astronomy_Moore.pdf | pdf | EN | 465 | P2 |
| 9 | 01 | module01_p2_The Backyard Stargazers Bible_Ridpath.epub | epub | EN | — | P2 |
| 10 | 01 | module01_p2_星野摄影第二版.pdf | pdf | CN | 113 | P2 |
| 11 | 02 | module02_p0_Star Testing Astronomical Telescopes_Suiter.pdf | pdf | EN | 383 | P0 |
| 12 | 02 | module02_p1_Star Ware_Harrington.pdf | pdf | EN | 428 | P1 |
| 13 | 02 | module02_p1_Telescope Optics Evaluation and Design_Rutten Venrooij.pdf | pdf | EN | 390 | P1 |
| 14 | 02 | module02_p2_Astronomical Optics_Schroeder.pdf | pdf | EN | 495 | P2 |
| 15 | 02 | module02_p2_Light Pollution Responses and Remedies_Mizon.pdf | pdf | EN | 224 | P2 |
| 16 | 03 | module03_p0_The Astrophotography Manual 3ed_Woodhouse.pdf | pdf | EN | 643 | P0 |
| 17 | 03 | module03_p1_Astrophotography_Legault.pdf | pdf | EN | 241 | P1 |
| 18 | 03 | module03_p1_Handbook of CCD Astronomy_Howell.pdf | pdf | EN | 224 | P1 |
| 19 | 03 | module03_p2_Digital SLR Astrophotography_Covington.pdf | pdf | EN | 357 | P2 |
| 20 | 03 | module03_p2_The 100 Best Astrophotography Targets_Kier.pdf | pdf | EN | 363 | P2 |
| 21 | 04 | module04_p0_Handbook of Astronomical Image Processing_Berry Burnell.pdf | pdf | EN | 656 | P0 |
| 22 | 04 | module04_p1_Inside PixInsight 2ed_Keller.pdf | pdf | EN | 432 | P1 |
| 23 | 04 | module04_p1_Lessons from the Masters_Gendler.mobi | mobi | EN | — | P1 |
| 24 | 04 | module04_p1_The Scientist and Engineers Guide to DSP_Smith.pdf | pdf | EN | 664 | P1 |
| 25 | 04 | module04_p2_Digital Image Processing 2ed_Sundararajan.pdf | pdf | EN | 541 | P2 |
| 26 | 05 | module05_p0_Astronomical Algorithms_Meeus.pdf | pdf | EN | 489 | P0 |
| 27 | 05 | module05_p1_Practical Astronomy with your Calculator or Spreadsheet_Duffett Smith Zwart.pdf | pdf | EN | 239 | P1 |
| 28 | 05 | module05_p2_Textbook on Spherical Astronomy_Smart Green.pdf | pdf | EN | 443 | P2 |
| 29 | 06 | module06_p1_Deep Sky Companions Caldwell Objects_OMeara.pdf | pdf | EN | 584 | P1 |
| 30 | 06 | module06_p1_Deep Sky Companions Hidden Treasures_OMeara.pdf | pdf | EN | 603 | P1 |
| 31 | 06 | module06_p1_Deep Sky Companions Messier Objects_OMeara.pdf | pdf | EN | 163 | P1 |
| 32 | 06 | module06_p1_Deep Sky Companions Secret Deep_OMeara.pdf | pdf | EN | 498 | P1 |
| 33 | 06 | module06_p1_Deep Sky Companions Southern Gems_OMeara.pdf | pdf | EN | 482 | P1 |
| 34 | 06 | module06_p1_Night Sky Observers Guide_Kepple Sanner.pdf | pdf | EN | 520 | P1 |
| 35 | 06 | module06_p2_Burnhams Celestial Handbook Vol. 1_Burnham.djvu | djvu | EN | — | P2 |
| 36 | 06 | module06_p2_Burnhams Celestial Handbook Vol. 2_Burnham.djvu | djvu | EN | — | P2 |
| 37 | 06 | module06_p2_Burnhams Celestial Handbook Vol. 3_Burnham.djvu | djvu | EN | — | P2 |
| 38 | 06 | module06_p2_Cosmic Challenge_Harrington.pdf | pdf | EN | 483 | P2 |
| 39 | 06 | module06_p2_Sky and Telescopes Pocket Sky Atlas_Sinnott.pdf | pdf | EN | 125 | P2 |
| 40 | 07 | module07_p0_Astrophysics of Gaseous Nebulae and AGN_Osterbrock Ferland.pdf | pdf | EN | 488 | P0 |
| 41 | 07 | module07_p1_Astrophysics in a Nutshell 1ed_Maoz.pdf | pdf | EN | 264 | P1 |
| 42 | 07 | module07_p1_Galaxies in the Universe_Sparke Gallagher.pdf | pdf | EN | 443 | P1 |
| 43 | 07 | module07_p2_Introduction to Modern Astrophysics 2ed_Carroll Ostlie.pdf | pdf | EN | 1479 | P2 |
| 44 | 07 | module07_p2_Physics of the Interstellar Medium_Draine.pdf | pdf | EN | 567 | P2 |
| 45 | 08 | module08_p0_AAVSO Guide_AAVSO.pdf | pdf | EN | 66 | P0 |
| 46 | 08 | module08_p0_A Practical Guide to Lightcurve Photometry_Warner.pdf | pdf | EN | 418 | P0 |
| 47 | 08 | module08_p1_Astronomical Photometry_Henden Kaitchuck.pdf | pdf | EN | 410 | P1 |
| 48 | 08 | module08_p1_Spectroscopy for Amateur Astronomers_Trypsteen Walker.pdf | pdf | EN | 165 | P1 |
| 49 | 08 | module08_p2_Statistics Data Mining and ML in Astronomy_Ivezic.pdf | pdf | EN | 551 | P2 |
| 50 | 09 | module09_p0_The Cambridge Concise History of Astronomy_Hoskin.pdf | pdf | EN | 388 | P0 |
| 51 | 09 | module09_p2_A History of Astronomy from Thales to Kepler_Dreyer.pdf | pdf | EN | 468 | P2 |
| 52 | 09 | module09_p2_Mapping the Heavens_Natarajan.pdf | pdf | EN | 261 | P2 |
| 53 | 10 | module10_p0_星座的故事_里德帕思.epub | epub | CN | — | P0 |
| 54 | 10 | module10_p0_Star Maps History Artistry and Cartography_Kanas.pdf | pdf | EN | 599 | P0 |
| 55 | 10 | module10_p1_Echoes of the Ancient Skies_Krupp.pdf | pdf | EN | 420 | P1 |
| 56 | 10 | module10_p1_New Patterns in the Sky_Staal.pdf | pdf | EN | 316 | P1 |
| 57 | 10 | module10_p1_The Mapping of the Heavens_Whitfield.pdf | pdf | EN | 152 | P1 |
| 58 | 11 | module11_p0_天学真原_江晓原.epub | epub | CN | — | P0 |
| 59 | 11 | module11_p0_中国天文学史上_陈遵妫.pdf | pdf | CN | 662 | P0 |
| 60 | 11 | module11_p0_中国天文学史下_陈遵妫.pdf | pdf | CN | 831 | P0 |
| 61 | 11 | module11_p1_漫步中国星空_齐锐万昊宜.pdf | pdf | CN | 243 | P1 |
| 62 | 11 | module11_p1_天学外史_江晓原.epub | epub | CN | — | P1 |
| 63 | 11 | module11_p1_中国古天文图录_潘鼐.pdf | pdf | CN | 379 | P1 |
| 64 | 11 | module11_p1_中国恒星观测史_潘鼐.pdf | pdf | CN | 780 | P1 |
| 65 | 11 | module11_p1_中国天文考古学五卷_冯时.pdf | pdf | CN | 3303 | P1 |
| 66 | 11 | module11_p2_步天歌研究_周晓陆.pdf | pdf | CN | 356 | P2 |
| 67 | 11 | module11_p2_万年中国_冯时.pdf | pdf | CN | 320 | P2 |
| 68 | 11 | module11_p2_文明论_冯时.mobi | mobi | CN | — | P2 |

---

*祝你拍到比想象中更深的那片天空。*
