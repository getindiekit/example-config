FROM node:16-alpine

ENV NODE_ENV=production
ENV TZ="ETC/UTC"
ENV INDIEKIT_CONFIG="indiekit.config.js"

# Sets up correct timezone
ENTRYPOINT ["docker-entrypoint.sh"]

RUN npm update -g npm

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install @indiekit/indiekit --production && mv node_modules ../

COPY . .

EXPOSE 3000

RUN chown -R node /usr/src/app

USER node

CMD ["sh", "-c", "node config/${INDIEKIT_CONFIG}"]