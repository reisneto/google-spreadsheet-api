FROM node:alpine

ENV CODE /home/code

RUN mkdir -p ${CODE}
WORKDIR ${CODE}

COPY . ${CODE}/

RUN yarn

CMD ["yarn", "dev:start"]