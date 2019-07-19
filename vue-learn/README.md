# vue-learn

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Issue

组件要支持template选项，需要在vue.config.js配置runtimeCompiler选项

```
module.exports = {
  runtimeCompiler:true
}
```