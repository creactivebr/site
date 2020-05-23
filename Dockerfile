FROM node:12.16.3-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "serve" ]