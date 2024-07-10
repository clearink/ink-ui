module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 影响构建系统或外部依赖关系的更改（示例范围：gulp、broccoli、NPM）
        'chore', // 其他不修改src或test文件
        'ci', // 更改持续集成文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）
        'docs', // 表示更改文档
        'feat', // 表示在代码库中新增了一个功能
        'fix', // 表示在代码库中修复了一个 bug
        'perf', // 改进性能的代码更改
        'refactor', // 代码重构，既不修复错误也不添加功能
        'revert', // 撤回之前的 commit
        'style', // 不影响代码含义的变化（空白、格式化、缺少分号等）
        'test', // 添加确实测试或更正现有的测试
        'merge', // 合并分支
      ],
    ],
    'subject-case': [0],
  },
}
