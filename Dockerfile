#FROM node:alpine3.15 
FROM node:lts-slim
ARG BUILD_CONTEXT
WORKDIR /menu-store
COPY package.json ./
COPY yarn.lock ./
COPY $BUILD_CONTEXT/ ./$BUILD_CONTEXT/
RUN yarn install
USER node
EXPOSE 8080
CMD ["tail", "-f", "/dev/null"]