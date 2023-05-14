FROM node:14
EXPOSE 3000
COPY . ./
WORKDIR ./
CMD [ "npm" , "start" ]

