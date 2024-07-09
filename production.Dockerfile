FROM php:8.3-fpm-bookworm

# install nodejs
RUN set -xe \
    && apt-get update -qq \
    && apt-get install -y -qq curl \
    && curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get update -qq \
    && apt-get install -y -qq nodejs

# install common packages
RUN set -xe \
    && apt-get install -y -qq \
      sudo \
      nginx \
      procps \
      unzip \
      libicu-dev \
      zlib1g-dev \
      libxml2 \
      libxml2-dev \
      libreadline-dev \
      supervisor \
      cron \
      libzip-dev \

RUN set -xe \
    && docker-php-ext-configure intl \
    && docker-php-ext-install \
      sockets \
      intl \
      opcache \
      zip

# install composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN chmod +x /usr/bin/composer

# add supervisor
RUN mkdir -p /var/log/supervisor
COPY --chown=root:root ./docker/production/supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY --chown=root:crontab ./docker/production/cron /var/spool/cron/crontabs/root
RUN chmod 0600 /var/spool/cron/crontabs/root

COPY . /srv/iplease
WORKDIR /srv/iplease

# build frontend
RUN set -xe \
    && yarn install \
    && yarn build \
    && rm -rf node_modules