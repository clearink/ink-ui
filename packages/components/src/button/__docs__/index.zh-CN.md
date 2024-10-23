---
title: Button 按钮
desc: 按钮是一种命令组件，可发起一个即时操作。
---

<Demo title="基本" code="./demos/basic" />

<Demo title="块级" code="./demos/block" />

<Demo title="危险" code="./demos/danger"/>

## Button API

<Props title="Button" file="../props" of="ButtonProps" />

<Props title="ButtonGroup" file="../props" of="ButtonGroupProps" />

| 属性     | 描述     | 类型 | 默认值    | 版本 |
| -------- | -------- | ---- | --------- | ---- |
| block    | 块级格式 |      |           |      |
| disabled | 禁用     |      |           |      |
| shape    | 形状     |      | `default` |      |

{
name: 'block',
desc: { zh: '块级格式', en: '块级格式 en' },
type: undefined,
required: false,
default: undefined,
version: undefined
}
{
name: 'disabled',
desc: { zh: '禁用', en: '禁用 en' },
type: undefined,
required: false,
default: undefined,
version: undefined
}
{
name: 'ghost',
desc: { zh: '幽灵按钮', en: '幽灵按钮 en' },
type: undefined,
required: false,
default: undefined,
version: undefined
}
{
name: 'icon',
desc: { zh: '前缀图标', en: '前缀图标 en' },
type: 'React.ReactNode',
required: false,
default: undefined,
version: undefined
}
{
name: 'loading',
desc: { zh: '加载中', en: '加载中 en' },
type: 'false|true|{ delay: number; }|T',
required: false,
default: undefined,
version: undefined
}
{
name: 'shape',
desc: { zh: '形状', en: '形状 en' },
type: undefined,
required: false,
default: '`default`',
version: undefined
}
{
name: 'size',
desc: { zh: '按钮大小', en: undefined },
type: '"large"|"middle"|"small"',
required: false,
default: '`middle`',
version: undefined
}
{
name: 'theme',
desc: { zh: '按钮主题', en: undefined },
type: undefined,
required: false,
default: 'primary',
version: undefined
}
{
name: 'variant',
desc: { zh: '变体(在不影响布局属性的情况下所派生出的类型)', en: '变体(在不影响布局属性的情况下
所派生出的类型) en' },
type: undefined,
required: false,
default: '`outlined`',
version: undefined
}
{
name: 'children',
desc: { zh: '子元素', en: undefined },
type: undefined,
required: false,
default: undefined,
version: undefined
}
{
name: 'classNames',
desc: { zh: '语义化类名', en: undefined },
type: 'Partial',
required: false,
default: undefined,
version: undefined
}
{
name: 'styles',
desc: { zh: '语义化样式', en: undefined },
type: 'Partial',
required: false,
default: undefined,
version: undefined
}
{
name: 'className',
desc: { zh: '类名', en: undefined },
type: undefined,
required: false,
default: undefined,
version: undefined
}
{
name: 'style',
desc: { zh: '样式', en: undefined },
type: undefined,
required: false,
default: undefined,
version: undefined
}
