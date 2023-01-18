FROM node:14.20.1 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/diploma-web-ui /usr/share/nginx/html
EXPOSE 80
