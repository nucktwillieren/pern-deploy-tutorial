FROM node:18 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

#Stage 2
#######################################
FROM node:18

WORKDIR /build

COPY --from=builder /usr/src/app/build .

RUN npm i -g serve

EXPOSE 3000
ENTRYPOINT ["serve", "-s"]