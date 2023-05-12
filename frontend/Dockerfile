FROM node:18-alpine AS builder

WORKDIR /frontend
RUN mkdir -p /frontend/src
RUN mkdir -p /frontend/public
COPY src /frontend/src
COPY public /frontend/public
COPY package*.json /frontend
COPY *.config.js /frontend
RUN npm install -g npm@7.7.6
RUN npm install
RUN npm run build

#Stage 2
#######################################
FROM node:18-alpine

WORKDIR /build

COPY --from=builder /frontend/build .

RUN npm install -g serve

EXPOSE 3000
ENTRYPOINT ["serve", "-s"]