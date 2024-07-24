# Shared State Project
FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .


EXPOSE 4000
CMD ["npm", "run", "serve"]