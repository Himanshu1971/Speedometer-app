# Frontend Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Use serve to serve production build
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "5173"]

EXPOSE 5173
