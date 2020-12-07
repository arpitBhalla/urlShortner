FROM node:latest

EXPOSE 80

RUN npm install

COPY . .

ENV PORT=80

CMD ["node","index.js"] 
