---
title: "Pull DockerImages受阻解决方案"

published: 2024-07-03 22:52:00

description: "国内pull DockerImages受阻,自建nginx反向代理解决"

tags: [docker,nginx]

---
## 前提条件

1. 有一台国外云服务器(没有被GWF墙掉,或者是墙掉的服务器套CF),给鸡哥打个广告[鸡哥家香港的云服务器嘎嘎快,时延低至10ms,因为他家的鸡,每天身体都被掏空点击跳转🔗](https://pro.cfhost.cn)
2. 有一个域名

## 原理

nginx反向代理流量.在之前,我们PULL Image是我们的服务器直接去DockerHub Pull Image,现在因为有了墙会将我们的流量阻断也就是将我们的服务器通向DockerHub的路切断了.为了解决这种问题,我们需要开辟一条新的道路,我们的服务器先去向我们的海外服务器,这条路是通畅的,海外服务器再去向DokcerHub拉取镜像.

## 具体操作

### 域名A记录指向你的服务器IP

### 安装nginx

centos系统:[安装点击这里🔗](https://blog.csdn.net/fmd316/article/details/136141600?spm=1001.2014.3001.5501)

### 申请域名ssl证书

依次执行下列命令(执行前先去ping一下检测域名是否生效)

```bash
curl https://get.acme.sh | sh
~/.acme.sh/acme.sh --register-account -m 你的邮箱
~/.acme.sh/acme.sh --issue -d 你的域名 --standalone
```

### nginx配置

```bash
server {
  listen 443 ssl;
  server_name #域名;
  ssl_certificate #证书地址;
  ssl_certificate_key #密钥地址;

  ssl_session_timeout 24h;
  ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256';
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;

  location / {
    proxy_pass https://registry-1.docker.io;  # Docker Hub 的官方镜像仓库
    proxy_set_header Host registry-1.docker.io;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_buffering off;
    proxy_set_header Authorization $http_authorization;
    proxy_pass_header  Authorization;
    proxy_intercept_errors on;
    recursive_error_pages on;
    error_page 301 302 307 = @handle_redirect;
  }
  location @handle_redirect {
    resolver 1.1.1.1;
    set $saved_redirect_location '$upstream_http_location';
    proxy_pass $saved_redirect_location;
  }
}

```

### docker镜像源配置(可选)

`vim /etc/docker/daemon.json`

```bash
{
"registry-mirrors": ["你的域名带https"]
}
```

### 测试

1.docker镜像源配置的情况拉镜像

```bash
docker pull nginx
```
![](https://s3.bmp.ovh/imgs/2024/07/04/1c874e03f0c58997.png)
2.docker镜像源不配置的情况拉镜像

```bash
docker pull 域名/library/nginx
```

![](https://s3.bmp.ovh/imgs/2024/07/03/04f0ebe286e3f7f4.png)

### 写在最后

感谢你看到这里,如果你暂时没有配置的想法,可以联系我,我将给你我的接口使用,助你更上一层楼!


