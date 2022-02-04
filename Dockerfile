# FROM node:14-alpine AS builder
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package*.json ./
# RUN npm ci
# RUN npm install react-scripts@3.4.1 -g
# COPY . ./
# RUN npm run build

FROM nginx:stable-alpine
COPY ./public/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
