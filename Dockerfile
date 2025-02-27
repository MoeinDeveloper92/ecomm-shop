##########  Base image  ##########
FROM node:lts-bullseye-slim AS base_image

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY index.html .
COPY public public
COPY next.config.ts .

##########  install development dependencies  ##########
FROM base_image AS dev_dependencies

ENV NODE_ENV development

COPY src src

COPY postcss.config.mjs .
COPY tailwind.config.ts .
RUN npm install


##########  build project  ##########
FROM dev_dependencies AS build

#ENV VITE_REACT_BACKEND_URL=$VITE_REACT_BACKEND_URL

RUN npm run build

##########  install production dependencies  ##########
FROM base_image AS prod_dependencies

ENV NODE_ENV production
COPY --from=build /app/dist dist
RUN npm install
#RUN npm run build


##########  run the application ##########
FROM prod_dependencies AS run

#ENV VITE_REACT_BACKEND_URL=$VITE_REACT_BACKEND_URL

EXPOSE 3000
ENTRYPOINT [ "npm", "run", "preview"]
