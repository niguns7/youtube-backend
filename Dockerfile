# Use an Alpine Linux-based Node.js image as the base
FROM node:16-alpine

WORKDIR /app/backend/
COPY package.json ./
RUN npm install
COPY . .


EXPOSE 3030
CMD ["node", "src/index.js"]