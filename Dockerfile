# base image
FROM node:11.6.0 as builder

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY 2-React/address-app/package.json /usr/src/app/package.json
#COPY 2-React/5-shop-ui-v3/public/ /usr/src/app/public/
#COPY 2-React/5-shop-ui-v3/src/ /usr/src/app/src/
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

COPY 2-React/address-app/. /usr/src/app/
# start app
#CMD ["npm", "start"]

RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]