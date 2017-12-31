FROM node:8.9.3
LABEL maintainer="andreasonny83@gmail.com"

ENV HOME=/usr/src/app

# Create a directory where our app will be placed
RUN mkdir -p $HOME

# Change directory so that our commands run inside this new directory
WORKDIR $HOME

# Install app dependencies
COPY package.json $HOME
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
