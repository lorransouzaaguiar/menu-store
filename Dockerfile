#FROM node:alpine3.15 
FROM node:lts-slim
ARG BUILD_CONTEXT
ARG BUILD_PORT
WORKDIR /menu-store
COPY $BUILD_CONTEXT/ ./$BUILD_CONTEXT/
RUN yarn install
USER node
EXPOSE $BUILD_PORT
CMD ["tail", "-f", "/dev/null"]