# 部署说明 (Deployment Guide)

## 环境变量配置

### 创建 `.env.local` 文件

在项目根目录创建 `.env.local` 文件并添加以下环境变量：

```bash
# 网站域名 (必须 - 用于SEO和链接生成)
NEXT_PUBLIC_SITE_URL=https://tiktokemojihub.org

# Google Site Verification (必须 - 用于 Google Search Console)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-site-verification-code

# Google Analytics (可选 - 用于网站分析)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 获取环境变量值

#### Google Site Verification Code

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加你的域名作为资源
3. 选择"HTML 标签"验证方法
4. 复制 `content="..."` 中的值，替换上面的 `your-google-site-verification-code`

#### Google Analytics ID (可选)

1. 访问 [Google Analytics](https://analytics.google.com)
2. 创建新的网站属性
3. 获取测量 ID（格式：G-XXXXXXXXXX）
4. 替换上面的 `G-XXXXXXXXXX`

## 部署平台选择

### 推荐：Vercel (最佳选择)

```bash
# 使用 Vercel CLI 部署
npm i -g vercel
vercel login
vercel
```

**或者通过 GitHub 集成：**

1. 访问 [vercel.com](https://vercel.com)
2. 连接 GitHub 账号
3. 导入仓库
4. 在环境变量设置中添加上述变量
5. 自动部署

### 备选：Cloudflare Pages

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 选择 "Pages" -> "Create a project"
3. 连接 GitHub 仓库
4. 构建设置：
   - Build command: `npm run build`
   - Build output directory: `out`
5. 在环境变量中添加上述变量

### 备选：GitHub Pages

需要额外配置 GitHub Actions 工作流，相对复杂。

## 构建验证

部署前请确保本地构建成功：

```bash
npm install
npm run build
```

## 注意事项

1. **必须设置环境变量**：即使是可选的，也建议设置空值避免构建错误
2. **域名配置**：部署后需要在 Google Search Console 中验证域名
3. **HTTPS**：确保使用 HTTPS，所有推荐平台都自动提供
4. **CDN 缓存**：首次部署后可能需要等待 CDN 缓存刷新

## 项目兼容性

- ✅ React 19.0.0
- ✅ Next.js 15.3.5
- ✅ Node.js 18+
- ✅ 静态导出 (`output: 'export'`)
- ✅ 完全静态网站，无服务端依赖

## SEO 优化完成项

- ✅ 动态 sitemap.xml 生成 (自动更新日期)
- ✅ 所有页面 canonical URL 配置
- ✅ Open Graph 图片路径优化 (静态导出兼容)
- ✅ 域名通过环境变量配置 (`NEXT_PUBLIC_SITE_URL`)
- ✅ 默认域名：`tiktokemojihub.org`
- ✅ 支持 www 重定向到根域名
- ✅ 46 个表情页面完整 SEO 元数据
