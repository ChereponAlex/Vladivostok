FROM node:16.13.2-alpine as builder
WORKDIR /frontend

COPY package*.json ./
RUN npm ci
ENV NODE_ENV=production
ENV PORT=80
ENV HOST 0.0.0.0
ENV APP_ROOT /frontend

COPY . ./
RUN npm run build

FROM node:16.13.2-alpine
ENV NODE_ENV=production
ENV PORT=80
ENV HOST 0.0.0.0
ENV APP_ROOT /frontend

WORKDIR /frontend
COPY package*.json ./
RUN npm ci
COPY --from=builder /frontend/build /frontend/build
COPY --from=builder /frontend/server.js ./server.js

CMD npm start
