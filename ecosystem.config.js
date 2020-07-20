const { loadConfig } = require("@thought-booster/quark");
const path = require("path");

// 自定义配置。
// 设置 PM2 服务进程数量。
const APP_INSTANCE_NUM = 1;

// 以下代码不建议修改！

// 读取应用配置。
const config = loadConfig();
module.exports = {
  apps: [
    {
      name: config.name,
      instances: APP_INSTANCE_NUM,
      exec_mode: "cluster",
      script: "dist/index.js",
      watch: false,
      env: {
        NODE_ENV: "prod",
        NODE_APP_NAME: config.name,
        LOG_DIR: path.join(__dirname, "./log"),
      },
      kill_timeout: config.graceful ? config.graceful + 1000 : 11000, // 额外延时多 1 秒
      wait_ready: true,
      autorestart: true,
    },
  ],
};
