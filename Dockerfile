FROM node:16.19.1

WORKDIR /Users/melmini/Study/Assignment/weather/
# add the app source code to the image its like when you cd into a directory

COPY package*.json yarn.lock ./
# first arg: is local package json
# second arg: place to copy it, the current working directory

RUN yarn install
# install the packages

COPY . .
# first arg: all local files
# second arg: to the current directory

# don't forget to add node_modules to the .dockerignore file

ENV PORT=3000

EXPOSE 3000

CMD ["yarn", "dev"]
# writen in exec form