FROM node:16.20.1
VOLUME [ "/data" ]

COPY . /frontend
WORKDIR /frontend

# RUN npm install -g pnpm
RUN npm --registry https://registry.npm.taobao.org install any-touch

ENTRYPOINT [ "npm","run","start" ]