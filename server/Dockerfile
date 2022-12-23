FROM node

WORKDIR /usr/src/site4web_server

COPY package.json .
 
RUN npm install
RUN npm uninstall bcrypt
RUN npm install bcrypt

COPY . .