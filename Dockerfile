# 使用 Node.js 20.15.0 作为基础镜像
FROM node:20.15.0-slim

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 yarn.lock 到工作目录
COPY package.json yarn.lock ./

# 安装依赖
RUN yarn install --frozen-lockfile

# 复制整个项目到工作目录
COPY . .

# 构建 Nuxt.js 项目
RUN yarn build

# 暴露端口（根据你的 Nuxt.js 项目配置）
EXPOSE 3000

# 运行 Nuxt.js 项目
CMD ["node", ".output/server/index.mjs"]