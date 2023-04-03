module.exports = {
  // 当前配置为根配置，将不再从上级文件夹查找配置
  root: true,
  /* 指定如何解析语法。可以为空，但若不为空，只能配该值，原因见下文。*/
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    // parser: '@typescript-eslint/parser',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
    requireConfigFile: false
    // parser: '@babel/eslint-parser'
  },
  // https://eslint.bootcss.com/docs/user-guide/configuring#specifying-globals
  // globals: {
  //   Nullable: true,
  // },
  extends: [
    // 扩展使用 vue3 检查规则和eslint推荐规则
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    // typescript-eslint推荐规则,
    // 'plugin:@typescript-eslint/recommended',
    // prettier推荐规则,
    'prettier',
    'plugin:prettier/recommended',
    'eslint-config-prettier'
  ],
  rules: {
    // semi: [2, 'never'], // 禁止尾部使用分号“ ; ”
    // indent: ['error', 2], // 缩进2格
    'no-var': 'error', // 禁止使用 var
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    quotes: [2, 'single'], // 使用单引号
    'vue/html-closing-bracket-newline': 'off', // 不强制换行
    'vue/singleline-html-element-content-newline': 'off', // 不强制换行
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 5 },
      multiline: { max: 5 }
    }] // vue template模板元素第一行最多5个属性
    // 优先使用 interface 而不是 type
    // '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // 禁止any类型,报错关闭
    // '@typescript-eslint/no-explicit-any': 'off',
    // 需要导出函数和类的公共类方法的显式返回和参数类型,报错关闭
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 禁止某些类型如String、Number,报错关闭
    // '@typescript-eslint/ban-types': 'off',
    // 禁止未使用的变量,报错关闭
    // '@typescript-eslint/no-unused-vars': 'error',
    // vue首行缩进两字符
    // 'vue/html-indent': [
    //   'error',
    //   2,
    //   {
    //     // 属性缩进的乘数。默认为1。
    //     attribute: 1,
    //     // 顶级语句的缩进倍数。默认为1。
    //     baseIndent: 1,
    //     // 右括号缩进的乘数。默认为0。
    //     closeBracket: 0,
    //     // 属性是否应垂直对齐到多行情况下的第一个属性的条件。默认为true
    //     alignAttributesVertically: true,
    //     // 忽略节点的选择器。默认是[]
    //     ignores: [],
    //   },
    // ],
    // 强制使用驼峰命名
    // 'vue/component-name-in-template-casing': [
    //   'error',
    //   'PascalCase',
    //   {
    //     // 如果true，则仅检查已注册的组件（在 PascalCase 中）。如果false，检查所有。默认true
    //     registeredComponentsOnly: false,
    //     ignores: [],
    //   },
    // ],
    // 编辑器里会给prettier错误进行报错
    // "prettier/prettier": "error",
  },
  'plugins':[
    'vue',
    'prettier'
  ]
}
