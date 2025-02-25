module.exports = {
  extends: [
    // ... 其他配置
  ],
  plugins: [
    'simple-import-sort'
  ],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
} 