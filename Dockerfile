FROM node:16.13.1
WORKDIR /Users/qx/code/play/ng-rx-play
COPY .  .
RUN npm install
EXPOSE 3333
RUN npm start
