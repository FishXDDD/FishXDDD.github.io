# Journal · 插画研究连载 / Codex 交接

## 成品结构

此文件夹是可以 `file://` 本地直接打开的多页面静态 HTML 原型。解压后打开 `index.html` 即可浏览完整故事。

```text
journal/
├── index.html                       Journal 日记本（连载目录）
├── stage-01/
│   ├── index.html                   Stage 01 序章（任务、起点、三段故事预告）
│   ├── 01-geometry.html            第一章：Q01 几何 → Q02 已知参考
│   ├── 02-observation.html         第二章：Q03 目标定位 → Q04 二维到三维
│   ├── 03-alternatives.html        第三章：Q05 学空间线索 → Q06 直接 Grasp Pose
│   └── 04-takeaways.html          终章：三次认识、求解关系、条件代价、Stage 02 预告
└── assets/
    ├── site.css                    共享响应式视觉样式
    └── *.svg                       本地矢量插画（原创原型、离线可见）
```

## 设计关键（不要被改回图库）

1. **一页只完成一个有意义的叙事阶段**；各页是真实的独立页面跳转，不是一个大页面滚动锚点。
2. 主阅读路径：`/journal/` → `/journal/stage-01/` → `01-geometry` → `02-observation` → `03-alternatives` → `04-takeaways`。每页末尾“获得的发现 → 新问题”推动跳转。
3. 每章都包含当时的问题、关键技术认识、方法边界、启发下一个问题的提问，以及 **Q 详细研究笔记的可选链接**。Research 不替代 Journal 的独立可读性。
4. 插画就地解释故事，不要堆成统一“全部插画”长画廊。主图都使用已随包提供的 SVG，**没有依赖图片生成服务或外部网络**。未来可以替换成真正生成/绘制的正式插画。
5. Stage 02 是预告，不编造已经完成的研究画册或假链接。
6. 全站可从 GitHub Pages 静态部署，使用相对路径。本原型无需构建、无需 JavaScript。
7. 推荐 Astro 映射：
   - `src/pages/journal/index.astro`
   - `src/pages/journal/stage-01/index.astro`
   - `src/pages/journal/stage-01/01-geometry.astro`
   - `src/pages/journal/stage-01/02-observation.astro`
   - `src/pages/journal/stage-01/03-alternatives.astro`
   - `src/pages/journal/stage-01/04-takeaways.astro`
8. Q01–Q06 的技术长文准确路径已经实际核对并写入各章。在运行时可转化为站内路由。
9. 未来插画资料建议数据化：`id, stageId, chapterId, qId, title, description, image, finding, nextQuestion, researchUrl, status, order`。Stage 画册大纲和图像列表应分开存储。
10. 请维持整体《沿途手记》气质：温馨自然、稍有克制幽默，但不编造项目成果或实验结论。少用“技术革命”“史诗级”之类口号。

## 正式图片建议

- 现有 Stage 01 三张正式研究图（可通过线上研究页图片路径访问）：
  - `/research/stage-01/images/grasp-pose-roadmap.png`
  - `/research/stage-01/images/vision-pose-field-notes.png`
  - `/research/stage-01/images/paths-to-grasp-pose.png`
- 本原型里它们作为终章“收藏原图”的外链；原型正文使用本地矢量故事插画保持离线可读。
- 正式版可将线上 PNG 下载为项目内资源，并按实际图意放在对应故事段落；不要一股脑放到页底。

## 检查标准

- 不打开 Research 原文，读者也能解释为什么研究 Q01→Q06。
- 每翻到下一网页，都能回答“上一段认识带来了什么新问题”。
- 浏览器上一页返回合理，首页与每章有可见导航。
- 手机端不溢出；SVG 自适应。
- 未完成的未来页明确标注，不能点击到 404。
