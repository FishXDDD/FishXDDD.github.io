# 沿途手记

纯 HTML、CSS 和 JavaScript 的个人网站，无需安装依赖或执行构建。

## 目录

```text
docs/                              GitHub Pages 发布目录
  index.html                       首页
  stage-01-grasp-pose.html          第一站：抓取姿态
  .nojekyll                        禁用 Jekyll 处理
  assets/
    css/home.css                   首页原有样式
    css/research-map.css           研究地图原有样式
    js/home-navigation.js          首页原有导航脚本
archive/
  stage-01-grasp-pose-standalone.html  原始内嵌样式版本，仅作备份
```

## 发布到 GitHub Pages

1. 将整个目录上传到 GitHub 仓库。
2. 打开仓库 Settings → Pages。
3. Source 选择 Deploy from a branch。
4. 选择代码所在分支（通常为 main），目录选择 /docs，然后保存。

用户站点仓库名称为 用户名.github.io；普通项目仓库可使用 journey-notes。
所有页面与资源采用相对路径，可兼容项目站点的仓库路径前缀。
仅 docs/ 是网站发布目录，archive/ 不会随此配置发布。

## 本地预览

在本目录执行 `python -m http.server 8000 --directory docs`，然后访问 http://localhost:8000。

## 尚缺少的页面

原始目录没有以下内容，整理时保留了现有链接，没有编造页面或修改可见文字：

- docs/journal.html
- docs/route-1-1.html
- docs/route-1-2.html
- docs/topics.html（需要 pointcloud、annotation、multiview 锚点）

在这些文件补齐之前，相关链接会返回 404。
备份文件保留原始引用，供恢复或对照使用，不作为正式发布入口。
