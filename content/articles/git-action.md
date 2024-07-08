---
title: "git action部署nuxt项目到云服务器"

published: 2024-07-01 20:34:00

description: "git action通过scp将nuxt部署到云服务器并且进行重新Build并重新启动"

tags: [nuxt,git-action]

---
## git-action

​	GitHub Actions 是能够进行持续集成和交付(CI/CD)，内置虚拟机进行打包、部署,比如像项目的Build,部署等等.整个工作流程成为workflows.

###   demo 部署nuxt项目到私有云服务器

```yml
name: scp files  #此workflow的名称
on:	#此处定义wokrflow的触发时机,具体语法见下文
  push:
    branches:
      - pro
jobs: #此处为workflow具体要进行的操作
  build: #定义job的名称,以及所需要的的虚拟机环境指的是github内置虚拟机环境
    name: Build 
    runs-on: ubuntu-22.04
    steps:
    - uses: actions/checkout@v4
    - name: scp ssh pipelines  #定义每一个步骤的名称(可选)
      uses: cross-the-world/ssh-scp-ssh-pipelines@latest #此step为第三方后续配置可看第三方
      env:
        LASTSSH: "SCP完成后重新部署项目"
      with:
        host: ${{ secrets.HOST }}
        user: ${{ secrets.USERNAME }}
        pass: ${{ secrets.PASSWORD }}
        scp: |
          ./* => /project/nuxt-blog-ts
        last_ssh: |
          echo $LASTSSH 
          cd /project/nuxt-blog-ts
          source ~/.nvm/nvm.sh 
          yarn install
          yarn run build
          pm2 restart ecosystem.config.cjs
```



