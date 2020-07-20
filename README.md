# [服务名称]

> [服务介绍]

## Build Setup

服务运行配置存放于 `config/` 目录，部署配置存放于 `ecosystem.config.js` 文件。

```bash
# 安装依赖
yarn install --registry https://registry.npm.taobao.org/

# 启动服务（开发环境）
yarn start

# 格式化代码
yarn format

# 构建服务
yarn build

# 启动服务（生产环境）
./toolman start

# 停止服务（生产环境）
./toolman stop

# 重启服务（生产环境）
./toolman reload
```
