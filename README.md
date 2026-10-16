# 沿途手记

网站内容集中在 `docs/`，并以 `docs/index.html` 作为主页面。当前仍为纯 HTML/CSS/JavaScript，不依赖构建流程。

```text
docs/
├── index.html
├── _templates/
│   ├── card.html
│   └── navigation.html
├── assets/
│   ├── css/
│   ├── images/
│   └── js/
├── journey/
│   └── index.html
├── journal/
│   ├── index.html
│   └── entries/
│       └── entry-placeholder/
│           └── index.html
└── research/
    ├── index.html
    └── stage-01/
        ├── index.html
        ├── q01-geometry/
        │   └── index.html
        ├── q02-known-reference/
        │   ├── index.html
        │   └── appendix/
        │       └── index.html
        ├── q03-target-in-2d/
        │   ├── index.html
        │   ├── appendix-a01/
        │   │   └── index.html
        │   ├── appendix-a02/
        │   │   └── index.html
        │   ├── appendix-a03/
        │   │   └── index.html
        │   └── appendix-a04/
        │       └── index.html
        ├── q04-from-2d-to-3d/
        │   └── index.html
        ├── q05-learning-spatial-clues/
        │   └── index.html
        └── q06-direct-grasp-pose/
            └── index.html
```

页面按最终 URL 组织。例如 `docs/research/stage-01/q01-geometry/index.html` 对应 `/research/stage-01/q01-geometry/`。`_templates/` 仅保存尚未接入构建流程的组件参考片段。

本地查看首页：

```bash
python -m http.server 8000 --directory docs
```

然后访问 `http://localhost:8000/`。
