FROM node:lts-slim
RUN apt-get update \ 
    && apt-get install git -y \
    && apt-get clean
RUN yarn global add lerna commitizen
RUN yarn global bin \
    && yarn config set prefix ~/.yarn \
    && export PATH="$PATH:`yarn global bin`" \
    && bash -l
CMD ["node"]