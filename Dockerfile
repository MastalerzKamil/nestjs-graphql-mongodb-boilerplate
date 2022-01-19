FROM node:14.15.0-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN cat package.json
RUN ls /app
RUN yarn install

ADD . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
