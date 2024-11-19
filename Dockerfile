FROM node:22-alpine3.19 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine3.19

WORKDIR /app

COPY --from=build /app/.next .
COPY --from=build /app/start.js .

ENTRYPOINT ["node", "start.js"]
