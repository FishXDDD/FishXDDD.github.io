# 沿途手记

网站源码集中在 `docs/`，仓库根目录不再放置页面内容。

```text
docs/
├── index.html
├── src/
│   ├── pages/
│   │   ├── journey.html
│   │   ├── journal/
│   │   │   ├── index.html
│   │   │   └── entry-placeholder.html
│   │   └── research/
│   │       ├── stage-01-grasp-pose-cards.html
│   │       └── stage-01-notes/
│   │           ├── q01-geometry.html
│   │           ├── q02-known-reference.html
│   │           ├── q03-target-in-2d.html
│   │           ├── q04-from-2d-to-3d.html
│   │           ├── q05-learning-spatial-clues.html
│   │           └── q06-direct-grasp-pose.html
│   ├── content/
│   │   ├── journal/
│   │   └── research/
│   └── components/
│       ├── navigation.html
│       └── card.html
└── public/
    ├── images/
    └── assets/
        ├── css/
        └── js/
```

这是一次目录层面的轻量整理，目前仍为纯 HTML/CSS/JavaScript，尚未接入 Astro 构建流程。未完成的页面使用最小 HTML 占位，后续可逐步替换为 `.astro` 页面和 Markdown 内容集合。

本地查看首页：

```bash
python -m http.server 8000 --directory docs
```

然后访问 `http://localhost:8000/`。
