FROM node:alpine

RUN apk update
RUN npm install -g serve

RUN mkdir -p /var/app
WORKDIR /var/app
COPY . /var/app

RUN npm install
RUN PUBLIC_URL=/wcarlsen npm run build

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build", "-l", "3000"]
