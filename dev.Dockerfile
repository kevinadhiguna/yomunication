FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY models/ models/
COPY routes/ routes/
COPY views/ views/
COPY server.js server.js

EXPOSE 5000

# Start in development mode
CMD [ "yarn", "devStart" ]
