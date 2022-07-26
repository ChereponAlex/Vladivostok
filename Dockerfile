FROM node:14.15.3-alpine
ENV NODE_ENV=production
ENV PORT=80
ENV HOST 0.0.0.0
ENV APP_ROOT /frontend

WORKDIR /frontend
COPY package.json package-lock.json server.js ./
RUN npm ci


RUN npm run build
CMD npm start
