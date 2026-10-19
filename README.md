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
│   ├── assets/
│   │   ├── site.css
│   │   └── *.svg
│   └── stage-01/
│       ├── index.html
│       ├── 01-geometry.html
│       ├── 02-observation.html
│       ├── 03-alternatives.html
│       └── 04-takeaways.html
└── research/
    ├── index.html
    └── stage-01/
        ├── index.html
        ├── images/
        │   ├── grasp-pose-roadmap.png
        │   ├── vision-pose-field-notes.png
        │   └── paths-to-grasp-pose.png
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
        │   ├── appendix-a04/
        │   │   └── index.html
        │   └── images/
        │       ├── q03-method-map.png
        │       ├── q03-observation-types.png
        │       ├── q03-parallel-paths.png
        │       ├── a01-classical-vision.png
        │       ├── a02-reference-matching.png
        │       ├── a03-object-detection.png
        │       ├── a04-instance-segmentation.png
        │       └── a05-open-vocabulary-grounding.png
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


python3 -m http.server 8000 --bind 127.0.0.1 --directory docs

```

然后访问 `http://localhost:8000/`。
