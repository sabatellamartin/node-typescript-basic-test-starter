FROM node:19.4.0-alpine

RUN npm install -g typescript

RUN npm install -g nodemon

# CMD [ "npm", "run", "dev" ]
CMD [ "nodemon", "-L", "./src/index.ts" ]