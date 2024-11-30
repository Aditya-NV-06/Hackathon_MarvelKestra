FROM node:latest

WORKDIR /usr/src/app

COPY src/ ./src
COPY package*.json ./

RUN npm install

ENV PORT=3000
ENV SITE_URL=http://localhost:3000

COPY . .


EXPOSE 3000

CMD ["node", "app.js"]