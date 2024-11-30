FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ENV PORT=3000
ENV SITE_URL=http://localhost:3000

COPY . .


EXPOSE 3000

CMD ["npm", "test"]