FROM node:14-alpine as build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
ADD . .
RUN npm run build

FROM node:14-alpine
WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD npm run start:prod
