FROM node:16
COPY . .

RUN apt-get update
RUN apt-get install lsof
RUN npm install

ENTRYPOINT [ "npm", "start" ]

# RUN npx sequelize-cli db:seed:all