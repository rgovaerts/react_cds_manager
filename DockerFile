FROM node:15.4.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g react-scripts@4.0.1

# add app
COPY . ./

CMD ["npm", "start"]

