FROM node:alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
EXPOSE 8080
CMD [ "node", "src/server.js" ]

