FROM nginx:alpine
MAINTAINER Viktor Dzundza <victor.dzundza.dev@gmail.com>
ENV REFRESHED_AT 20170000:000000
ENV HOME=/static
RUN mkdir $HOME
COPY ./dist $HOME/
WORKDIR $HOME
COPY nginx.conf /etc/nginx/nginx.conf

RUN set -x ; \
  addgroup -g 82 -S www-data ; \
  adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

RUN chown -R www-data:www-data /static/*
RUN chmod -R 0755 /static/*

CMD ["nginx", "-g", "daemon off;"]
