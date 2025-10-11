FROM oven/bun:1 AS base
WORKDIR /usr/src/app

FROM base AS install
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM install AS build
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 8080
