FROM node:19.4.0-alpine

RUN npm install -g typescript
RUN npm install -g nodemon
RUN npm install -g ts-node

# CMD [ "npm", "run", "start" ]
CMD [ "nodemon", "-L", "./src/index.ts" ]