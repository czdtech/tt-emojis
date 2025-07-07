# Emoji Images Directory

此目录用于存放TikTok表情符号的图片资源。

## 文件命名规范

- 使用小写英文名称
- 用连字符分隔单词（如：`crying-laugh.png`）
- 统一使用PNG格式以获得最佳透明度支持

## 使用方法

在React组件中使用：

```tsx
// 使用Next.js Image组件（推荐）
import Image from 'next/image';

<Image 
  src="/emojis/heart.png" 
  alt="Heart emoji" 
  width={64} 
  height={64} 
/>

// 或者使用普通的img标签
<img 
  src="/emojis/heart.png" 
  alt="Heart emoji" 
  className="w-16 h-16" 
/>
```

## 建议的图片规格

- 尺寸：128x128px 或 256x256px
- 格式：PNG（支持透明背景）
- 大小：尽量控制在50KB以内 