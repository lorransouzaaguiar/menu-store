FROM node:lts-slim
RUN apt-get update \ 
    && apt-get install git -y \
    && apt-get install make -y \
    && apt-get clean
RUN yarn global add lerna commitizen prettier@2.2.1 knex
RUN yarn global bin \
    && yarn config set prefix ~/.yarn \
    && export PATH="$PATH:`yarn global bin`" \
    && bash -l
CMD ["node"]