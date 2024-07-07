FROM nodejs:22-alpine as frontend

RUN set -xe \
    && npm i -g yarn \
    && yarn install \
    && yarn build