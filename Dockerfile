# lightweight image node:alpine
FROM node:20-slim

# set working dir

WORKDIR /src/app

# copy package.json and package-lock.js

COPY . .

# install dependencies 

# RUN npm install --only=production

# expose port=3000

# EXPOSE 3000

# start the app 

CMD ["node", "start"]

