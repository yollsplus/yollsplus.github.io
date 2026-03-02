# GitHub Pages 部署指南

## 问题解析

### 原始问题
你遇到的错误：`Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"`

### 原因
1. **上传了源代码而非构建产物**：GitHub Pages 无法直接运行 TypeScript/React 源代码
2. **缺少构建步骤**：需要 `npm run build` 将 `.tsx` 文件编译成 `.js` 文件
3. **这是需要构建的项目，不是纯静态HTML**：虽然构建后会生成静态文件

## 解决方案

我已经配置了 **GitHub Actions 自动部署**，你只需要推送代码即可自动构建和部署。

## 部署步骤

### 1. 在 GitHub 仓库设置中启用 GitHub Pages

1. 打开你的仓库：https://github.com/yollsplus/yollsplus.github.io
2. 进入 **Settings** > **Pages**
3. 在 **Build and deployment** 下：
   - **Source**: 选择 `GitHub Actions`
   - 不要选择 "Deploy from a branch"

### 2. 推送代码

```bash
# 添加所有文件
git add .

# 提交更改
git commit -m "Add GitHub Actions deployment workflow"

# 推送到 GitHub
git push origin main
```

### 3. 查看部署进度

1. 在仓库中点击 **Actions** 标签
2. 你会看到 "Deploy to GitHub Pages" 工作流正在运行
3. 等待几分钟直到显示绿色勾号（成功）

### 4. 访问网站

部署成功后，访问：**https://yollsplus.github.io**

## 工作流程

自动部署流程：

```
推送代码 → GitHub Actions 触发 → npm install → npm run build → 部署 dist 文件夹 → 网站更新
```

## 本地开发

```bash
# 安装依赖
npm install

# 本地开发服务器
npm run dev

# 本地预览构建结果
npm run build
npm run preview
```

## 注意事项

### 关于静态网站
- ✅ **构建后是静态网站**：`npm run build` 生成纯 HTML/CSS/JS
- ❌ **源代码不是静态的**：源代码包含 TypeScript 和 JSX，需要编译

### 关于后端依赖
你的 `package.json` 中有 `express` 和 `better-sqlite3` 等后端依赖，但代码中**没有使用它们**。这些是 AI Studio 模板自带的，可以安全忽略。在 GitHub Pages 上部署不会用到它们。

### 分支说明
- **main**: 源代码分支（你推送的代码）
- **gh-pages**: 自动生成的部署分支（无需手动管理）

## 故障排除

### 如果部署失败

1. 检查 Actions 标签中的错误日志
2. 确保 `package.json` 和 `package-lock.json` 都已提交
3. 确认 Settings > Pages > Source 设置为 "GitHub Actions"

### 如果看到 404

1. 等待 5-10 分钟（首次部署需要时间）
2. 检查 Settings > Pages 显示的 URL 是否正确
3. 清除浏览器缓存

### 如果需要调试

本地构建测试：
```bash
npm run build
cd dist
# 使用任意 HTTP 服务器测试
npx serve
```

## 文件说明

- `.github/workflows/deploy.yml`: GitHub Actions 自动部署配置
- `vite.config.ts`: Vite 构建配置（已设置 `base: '/'`）
- `.gitignore`: 排除 `dist` 文件夹（因为会自动构建）
