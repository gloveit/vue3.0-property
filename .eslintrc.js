module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    soureType: 'module'
  },
  env: {
    browser: true
  },
  // extends: "standard",
  //　添加插件
  plugins: ['vue', 'html'],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
