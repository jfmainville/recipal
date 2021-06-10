FROM node:10.13.0-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --silent
EXPOSE 3000
CMD ["npm", "start"]