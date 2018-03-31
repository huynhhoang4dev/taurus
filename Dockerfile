FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nodejs nodejs-legacy npm
RUN apt-get clean

RUN mkdir src

COPY .package.json src

RUN cd src && npm install

COPY . /src

WORKDIR src/

CMD [ "npm": "start" ]

# RUN adduser taurus
# RUN sudo su - taurus
